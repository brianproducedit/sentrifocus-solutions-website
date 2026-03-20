import { PageWrapper } from "../components/layout/PageWrapper";
import { contactFormAction, feedbackFormAction, formsConfigured } from "../config/forms";
import { MessageCircle } from "lucide-react";

export function ContactPage() {
  return (
    <PageWrapper>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Contact and Feedback
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
            Reach out for project scoping, support, or partnership opportunities. We reply with clear next steps and ownership.
          </p>
          {!formsConfigured ? (
            <p className="text-xs text-amber-600 mt-3">
              Configure Formspree IDs in environment variables: VITE_FORMSPREE_CONTACT_FORM_ID and VITE_FORMSPREE_FEEDBACK_FORM_ID.
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/10">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-4 text-lg">
                <p>brianproducedit@gmail.com</p>
                <p>+263 242 000000</p>
                <p>Innovation Hub, Harare, Zimbabwe</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary/20">
                <h3 className="font-bold text-lg mb-4">Chat with Our Founders</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/263714431793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                    <span>Chat with Munashe</span>
                  </a>
                  <a
                    href="https://wa.me/263777374513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                    <span>Chat with Lawrence</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/10 shadow-lg">
              <iframe
                title="SentriFocus Solutions - Harare, Zimbabwe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.799356644184!2d31.033753776514373!3d-17.82531948258506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a67c5d8e9b7d%3A0x1234567890abcdef!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2zzw!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-primary/10 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4" method="POST" action={contactFormAction}>
              <input type="hidden" name="_subject" value="SentriFocus - Contact Form" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-primary/10 rounded-lg p-3" placeholder="Your full name" name="name" required />
                <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-primary/10 rounded-lg p-3" placeholder="you@example.com" type="email" name="email" required />
              </div>
              <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-primary/10 rounded-lg p-3" name="subject">
                <option value="">Select inquiry type</option>
                <option>Technical Support</option>
                <option>Sales Inquiry</option>
                <option>Partnership</option>
                <option>Project Discovery</option>
              </select>
              <textarea
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-primary/10 rounded-lg p-3 resize-none"
                rows={4}
                placeholder="Tell us your site type (home, tuckshop, supermarket, or company), location, and what you need help with."
                name="message"
                required
              />
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <section className="border-t border-primary/10 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Client Feedback</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Help us improve our services by sharing your experience.</p>
          </div>
          <div className="max-w-3xl mx-auto bg-primary/5 dark:bg-primary/10 p-8 md:p-12 rounded-2xl border border-primary/10">
            <form className="space-y-6" method="POST" action={feedbackFormAction}>
              <input type="hidden" name="_subject" value="SentriFocus - Feedback Form" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="w-full bg-white dark:bg-slate-900 border border-primary/10 rounded-lg p-3" placeholder="Your full name" name="name" required />
                <input className="w-full bg-white dark:bg-slate-900 border border-primary/10 rounded-lg p-3" placeholder="Household, tuckshop, supermarket, or company name (optional)" name="company" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {["1", "2", "3", "4", "5"].map((rating) => (
                  <label key={rating} className="text-sm rounded-lg border border-primary/20 p-2 text-center">
                    <input type="radio" name="rating" value={rating} className="mr-1" required={rating === "1"} />
                    {rating} Star
                  </label>
                ))}
              </div>
              <textarea
                className="w-full bg-white dark:bg-slate-900 border border-primary/10 rounded-lg p-3 resize-none"
                rows={4}
                placeholder="Tell us what service you used (CCTV, POS, networking, etc.), your site type (home, tuckshop, supermarket, or company), and how well we delivered."
                name="feedback"
                required
              />
              <button className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white font-bold py-4 rounded-lg" type="submit">
                Submit Review
              </button>
            </form>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
}
