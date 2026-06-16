import { useState } from 'react'
import Button from './Button'
import LoadingSpinner from './LoadingSpinner'
import { business } from '../data/business'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => setIsSubmitting(true)

  return (
    <form
      action={`https://formsubmit.co/${business.email}`}
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 space-y-5 transition-colors duration-300"
    >
      <input type="hidden" name="_subject" value="New Inquiry - Prakash N Electricals Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-primary dark:text-slate-200 mb-2">
          Name <span className="text-secondary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:border-primary dark:focus:border-indigo-500 focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/30 outline-none transition-all text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-semibold text-primary dark:text-slate-200 mb-2">
          Mobile <span className="text-secondary">*</span>
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          required
          pattern="[0-9]{10}"
          placeholder="10-digit mobile number"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:border-primary dark:focus:border-indigo-500 focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/30 outline-none transition-all text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-primary dark:text-slate-200 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company_name"
          placeholder="Your company or firm name"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:border-primary dark:focus:border-indigo-500 focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/30 outline-none transition-all text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-semibold text-primary dark:text-slate-200 mb-2">
          Requirement <span className="text-secondary">*</span>
        </label>
        <textarea
          id="requirement"
          name="requirement"
          required
          rows={4}
          placeholder="Describe the products or quantities you need..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 focus:border-primary dark:focus:border-indigo-500 focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/30 outline-none transition-all text-gray-800 resize-none"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" />
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </Button>
    </form>
  )
}

export default ContactForm
