import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xleklalg");

  if (state.succeeded) {
      return (
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Thanks for joining!</h2>
          <p className="text-lg">We have received your message and will get back to you as soon as possible.</p>
        </div>
      );
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email Address
              </label>
              <input
                  id="email"
                  type="email" 
                  name="email"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white"
              />
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-bold mb-2">
                Message
              </label>
              <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white"
              />
              <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400"
              />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                {state.submitting ? 'Sending...' : 'Submit'}
            </button>
        </form>
    </div>
  );
}
