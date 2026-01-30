import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, CheckCircle } from 'lucide-react';
import { z } from 'zod';

const bookingSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  age: z.string().refine(val => {
    const num = parseInt(val);
    return num >= 10 && num <= 100;
  }, 'Please enter a valid age (10-100)'),
  phone: z.string().trim().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number is too long'),
  // batch removed — selection no longer required
  experience: z.enum(['beginner', 'intermediate'], { required_error: 'Please select your experience level' }),
  healthIssues: z.string().max(500, 'Health issues description is too long').optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Booking = () => {
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    fullName: '',
    age: '',
    phone: '',
    experience: undefined,
    healthIssues: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = bookingSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof BookingFormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof BookingFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `🧘 *Free Trial Booking Request*

*Name:* ${result.data.fullName}
*Age:* ${result.data.age}
*Phone:* ${result.data.phone}
*Experience Level:* ${result.data.experience === 'beginner' ? 'Beginner' : 'Intermediate'}
${result.data.healthIssues ? `*Health Notes:* ${result.data.healthIssues}` : ''}

I would like to book my 2 free trial yoga classes. Please confirm my slot. 🙏`;

    // Encode and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '917404293340';
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="flex items-center gap-3">
          <Link to="/" className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div>
            <h1 className="font-display font-semibold text-lg text-foreground">Book Free Trial</h1>
            <p className="text-xs text-muted-foreground">2 classes • No payment required</p>
          </div>
        </div>
      </motion.header>

      {/* Form */}
      <main className="px-5 py-8 pb-32">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Free Trial Badge */}
          <div className="flex items-center gap-2 p-4 rounded-2xl bg-yoga-lavender-light">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">2 Free Classes</span> - No commitment, join only if you love it!
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              className={`w-full px-4 py-4 rounded-xl bg-card border ${
                errors.fullName ? 'border-destructive' : 'border-border'
              } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
            />
            {errors.fullName && (
              <p className="text-xs text-destructive">{errors.fullName}</p>
            )}
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Age *
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
              placeholder="Enter your age"
              min="10"
              max="100"
              className={`w-full px-4 py-4 rounded-xl bg-card border ${
                errors.age ? 'border-destructive' : 'border-border'
              } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
            />
            {errors.age && (
              <p className="text-xs text-destructive">{errors.age}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-4 rounded-xl bg-card border ${
                errors.phone ? 'border-destructive' : 'border-border'
              } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Experience Level *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['beginner', 'intermediate'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => handleChange('experience', level)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.experience === level
                      ? 'border-primary bg-yoga-lavender-light'
                      : 'border-border bg-card'
                  }`}
                >
                  <span className="text-2xl mb-1 block">
                    {level === 'beginner' ? '🌱' : '🌿'}
                  </span>
                  <span className={`text-sm font-medium ${
                    formData.experience === level ? 'text-primary' : 'text-foreground'
                  }`}>
                    {level === 'beginner' ? 'Beginner' : 'Intermediate'}
                  </span>
                </button>
              ))}
            </div>
            {errors.experience && (
              <p className="text-xs text-destructive">{errors.experience}</p>
            )}
          </div>

          {/* Health Issues */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Any Health Issues? <span className="text-muted-foreground">(Optional)</span>
            </label>
            <textarea
              value={formData.healthIssues}
              onChange={(e) => handleChange('healthIssues', e.target.value)}
              placeholder="E.g., back pain, knee issues, pregnancy..."
              rows={3}
              className="w-full px-4 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            {errors.healthIssues && (
              <p className="text-xs text-destructive">{errors.healthIssues}</p>
            )}
          </div>
        </motion.form>
      </main>

      {/* Submit Button - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-background/90 backdrop-blur-lg border-t border-border/50">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-4 rounded-2xl bg-green-50 border border-green-200"
          >
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800 mb-1">Booking Confirmed!</h3>
            <p className="text-sm text-green-700">
              You will receive the class link shortly on WhatsApp.
            </p>
          </motion.div>
        ) : (
          <>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              After submitting, press the <span className="font-semibold">Send</span> button on WhatsApp to confirm your slot
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
