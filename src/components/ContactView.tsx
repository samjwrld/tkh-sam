import React, { useState } from 'react';
import { Mail, Phone, MapPin, Compass, CheckCircle2, Send, Clock } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Hyderabad',
    service: 'Full Home Interior',
    budget: '5 - 10 Lakhs',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-fidelity server callback scheduler
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div id="contact-success-container" className="mx-auto max-w-2xl px-6 py-24 text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="font-display text-3xl font-bold text-warm-charcoal">
          Design Consultation Requested!
        </h1>
        <p className="text-sm text-warm-charcoal/70 leading-relaxed max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Sanjay Kumar or our senior design consultant will review your floor plan specifications and contact you at <strong>{formData.phone}</strong> within 2 business hours.
        </p>
        <div className="p-4 rounded-xl bg-warm-cream border border-warm-cream/50 max-w-xs mx-auto text-xs text-warm-charcoal/60 flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 text-warm-accent" />
          <span>Average callback time: 45 minutes</span>
        </div>
        <div className="pt-6">
          <button
            id="reset-contact-form"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                location: 'Hyderabad',
                service: 'Full Home Interior',
                budget: '5 - 10 Lakhs',
                message: ''
              });
            }}
            className="rounded-full bg-warm-charcoal px-6 py-2.5 font-display text-xs font-bold tracking-widest text-warm-beige transition-colors hover:bg-warm-accent"
          >
            SUBMIT ANOTHER REQUEST
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-page-container" className="py-16 sm:py-24 bg-warm-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        
        {/* Editorial Heading */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-warm-accent uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-warm-charcoal sm:text-5xl">
            Reach Out, Let's Design Magic
          </h1>
          <p className="text-base text-warm-charcoal/60 leading-relaxed">
            Begin your transformation journey. Book your completely free in-studio or home design consultation.
          </p>
        </section>

        {/* Form and Contact Detail Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-2xl border border-warm-cream shadow-sm">
            <h2 className="font-display text-xl font-bold text-warm-charcoal">
              Studio & Production Info
            </h2>
            <p className="text-sm text-warm-charcoal/60 leading-relaxed">
              We welcome you to visit our state-of-the-art modular manufacturing unit or our main design experience lounge. Bookings are mandatory.
            </p>

            <div className="space-y-6 pt-4 border-t border-warm-cream/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm-cream text-warm-accent">
                  <MapPin className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold tracking-wider text-warm-accent uppercase">EXPERIENCE STUDIO ADDRESS</h4>
                  <p className="text-sm text-warm-charcoal font-semibold mt-1">4th Floor, Sadanand Yadav's Buildings,</p>
                  <p className="text-xs text-warm-charcoal/60">Opp. Sumadhura Horizon, Hyderabad, Telangana - 500084</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm-cream text-warm-accent">
                  <Phone className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold tracking-wider text-warm-accent uppercase">CALL DIRECTLY</h4>
                  <a href="tel:+918907545678" className="block text-sm text-warm-charcoal font-semibold mt-1 hover:text-warm-accent transition-colors">
                    +91 89075 45678
                  </a>
                  <p className="text-xs text-warm-charcoal/60">Studio Desk hours: Wednesday – Monday: 10:00 AM – 6:00 PM (Tuesday Closed)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm-cream text-warm-accent">
                  <Mail className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold tracking-wider text-warm-accent uppercase">EMAIL INQUIRIES</h4>
                  <a href="mailto:info@thekoncepthouse.com" className="block text-sm text-warm-charcoal font-semibold mt-1 hover:text-warm-accent transition-colors">
                    info@thekoncepthouse.com
                  </a>
                  <p className="text-xs text-warm-charcoal/60">General partner & client desk</p>
                </div>
              </div>
            </div>

            {/* Quick Map Placeholder */}
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center relative p-4 border border-warm-cream/50">
              <svg className="absolute inset-0 h-full w-full opacity-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 20 Q 30 40 50 10 T 100 30 M30 0 L 30 100 M 0 60 Q 40 70 80 50 T 100 90 M70 0 L 70 100" stroke="#c5a880" strokeWidth="0.5" fill="none" />
              </svg>
              <div className="text-center space-y-1 relative z-10">
                <Compass className="h-8 w-8 text-warm-bronze mx-auto animate-spin" style={{ animationDuration: '8s' }} />
                <span className="block font-display text-xs font-bold text-white uppercase tracking-wider mt-1">THE KONCEPT HOUSE</span>
                <span className="block text-[10px] text-warm-bronze uppercase font-mono">HYDERABAD DESIGN CENTRE</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-warm-cream shadow-sm">
            <h2 className="font-display text-xl font-bold text-warm-charcoal mb-6 pb-4 border-b border-warm-cream/50">
              Schedule Your Workspace/Home Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +91 98765 43210"
                    className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., mail@example.com"
                    className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-location" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                    Property Location *
                  </label>
                  <select
                    id="contact-location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3.5 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                  >
                    <option value="Hyderabad">Hyderabad Region</option>
                    <option value="Central Hyderabad">Central Hyderabad</option>
                    <option value="West Hyderabad">West Hyderabad</option>
                    <option value="North Hyderabad">North Hyderabad</option>
                    <option value="South Hyderabad">South Hyderabad</option>
                    <option value="NRI Overseas">NRI / Overseas Client</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                    Requested Service *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3.5 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                  >
                    <option value="Full Home Interior">Full Home Interior</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                    <option value="Living Room Redesign">Living Room Redesign</option>
                    <option value="Luxury Bedroom & Master Suites">Luxury Bedroom & Master Suites</option>
                    <option value="Renovations & Expansion">Renovations & Expansion</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-budget" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                    Estimated Budget *
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3.5 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                  >
                    <option value="Below 5 Lakhs">Below 5 Lakhs</option>
                    <option value="5 - 10 Lakhs">5 - 10 Lakhs</option>
                    <option value="10 - 20 Lakhs">10 - 20 Lakhs</option>
                    <option value="20 - 40 Lakhs">20 - 40 Lakhs</option>
                    <option value="40 Lakhs+">40 Lakhs+</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-bold tracking-wider text-warm-charcoal/80 uppercase">
                  Describe Your Space (Optional)
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g., 3BHK residence floor plan in Hyderabad, looking for an earthy luxury theme with organic wood finishes and smart modular kitchen solutions."
                  className="w-full rounded-lg border border-warm-cream/80 bg-warm-beige/30 px-4 py-3 text-sm text-warm-charcoal outline-none transition-colors focus:border-warm-bronze focus:bg-white"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  id="submit-consultation-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-warm-charcoal py-4 text-center font-display text-xs font-bold tracking-widest text-warm-beige transition-all duration-300 hover:bg-warm-accent disabled:bg-warm-charcoal/50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING REQUEST...</span>
                  ) : (
                    <>
                      <span>SUBMIT FREE REQUEST</span>
                      <Send className="h-4.5 w-4.5 text-warm-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-warm-charcoal/40 text-center leading-relaxed">
                By clicking submit, you authorize The Koncept House Hyderabad to schedule a call back at your convenience. We never sell your personal details.
              </p>
            </form>
          </div>

        </section>

      </div>
    </div>
  );
}
