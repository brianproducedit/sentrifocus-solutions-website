import { Link } from "react-router-dom";
import { Code, Globe, Mail, Share2 } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  return (
    <footer className="bg-slate-950 pt-16 pb-8 px-4 border-t border-primary/20 text-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Code size={20} />
              </div>
              <h2 className="text-white text-lg font-bold">Galaxy ICT Solutions</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Zimbabwe-owned ICT company focused on secure infrastructure, operational reliability, and measurable outcomes.
            </p>
            <p className="text-xs text-slate-500">Harare, Zimbabwe</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Core Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>CCTV Security</li>
              <li>Enterprise Networking</li>
              <li>Networking</li>
              <li>Managed ICT Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Trust and Process</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Scope-first project planning</li>
              <li>Weekly status reports</li>
              <li>Documented handover checklists</li>
              <li>Transparent support SLAs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Actions</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-primary transition-colors" to="/request-quote">
                Request a Quote
              </Link>
              <Link className="hover:text-primary transition-colors" to="/gallery">
                Browse Gallery
              </Link>
              <Link className="hover:text-primary transition-colors" to="/contact">
                Send Feedback
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-slate-800 mb-6">
          <div className="max-w-lg">
            <h3 className="text-white font-bold mb-2">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for ICT insights, project updates, and company news.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                {subscribed ? "✓ Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2026 Galaxy ICT Solutions. All rights reserved.</p>
          <div className="flex gap-5 text-slate-500">
            <Globe size={20} className="hover:text-primary transition-colors cursor-pointer" />
            <Mail size={20} className="hover:text-primary transition-colors cursor-pointer" />
            <Share2 size={20} className="hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
