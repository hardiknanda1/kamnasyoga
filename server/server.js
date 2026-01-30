import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;
const recipientNumber = process.env.RECIPIENT_WHATSAPP_NUMBER;

// Debug: Log configuration
console.log('Twilio Config Loaded:');
console.log('Account SID:', accountSid ? '✓ Present' : '✗ Missing');
console.log('Auth Token:', authToken ? '✓ Present' : '✗ Missing');
console.log('WhatsApp From:', whatsappNumber);
console.log('Recipient:', recipientNumber);

const client = twilio(accountSid, authToken);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    twilio: {
      hasSid: !!accountSid,
      hasToken: !!authToken,
      fromNumber: whatsappNumber,
      toNumber: recipientNumber
    }
  });
});

// Root - simple status page to avoid 404 when visiting the base URL
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    status: 'server running',
    env: process.env.NODE_ENV || 'development',
    info: 'Use /health for Twilio status and POST /api/booking to submit bookings'
  });
});

// Booking submission endpoint
app.post('/api/booking', async (req, res) => {
  try {
    const { fullName, age, phone, batch, experience, healthIssues } = req.body;

    // Validate required fields
    if (!fullName || !age || !phone || !batch || !experience) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Build WhatsApp message
    const message = `🧘 *Free Trial Booking Request*

*Name:* ${fullName}
*Age:* ${age}
*Phone:* ${phone}
*Preferred Batch:* ${batch === 'morning' ? '🌅 Morning' : '🌆 Evening'}
*Experience Level:* ${experience === 'beginner' ? 'Beginner' : 'Intermediate'}
${healthIssues ? `*Health Notes:* ${healthIssues}` : ''}

I would like to book my 2 free trial yoga classes. Please confirm my slot. 🙏`;

    // Send WhatsApp message via Twilio
    const messageResponse = await client.messages.create({
      from: `whatsapp:${whatsappNumber}`,
      to: `whatsapp:${recipientNumber}`,
      body: message,
    });

    console.log(`Message sent successfully. SID: ${messageResponse.sid}`);

    res.json({
      success: true,
      message: 'Booking request submitted successfully!',
      messageSid: messageResponse.sid,
    });
  } catch (error) {
    console.error('Error sending message:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      status: error.status,
      details: error.details
    });
    res.status(500).json({
      error: 'Failed to send booking request. Please try again.',
      details: error.message,
      errorCode: error.code
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
