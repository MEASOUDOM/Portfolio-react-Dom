import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 
            ${errors.name 
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
              : 'border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-slate-700'
            }`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 
            ${errors.email 
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
              : 'border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-slate-700'
            }`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 
            ${errors.subject 
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
              : 'border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-slate-700'
            }`}
          placeholder="Subject of your message"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 
            ${errors.message 
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
              : 'border-slate-300 dark:border-slate-600 focus:ring-blue-200 dark:focus:ring-blue-800 dark:bg-slate-700'
            }`}
          placeholder="Your message here..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className={`w-full flex items-center justify-center py-3 px-6 rounded-lg text-white transition-all duration-300 ${
          formStatus === 'submitting' 
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900'
        }`}
      >
        {formStatus === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} className="ml-2" />
          </>
        )}
      </button>
      
      {formStatus === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-200 rounded-lg animate-fadeIn">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-200 rounded-lg animate-fadeIn">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
};