import {Mail, MapPin, Loader2} from 'lucide-react';
import {useState} from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData]         = useState({
    name: '', email: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual IDs from the EmailJS dashboard
    const serviceId  = 'service_e23hgf9';
    const templateId = 'template_552k5kl';
    const publicKey  = 'fIPje9dv3wyiDWg6k';

    const templateParams = {
      from_name: formData.name, from_email: formData.email, message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert('Thank you for your message! I\'ll get back to you soon.');
              setFormData({name: '', email: '', message: ''});
            }, (err) => {
              console.error('FAILED...', err);
              alert('Something went wrong. Please try again later.');
            })
            .finally(() => {
              setIsSubmitting(false);
            });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  return (<section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl text-center mb-4">Get In Touch</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Have a project in mind or just want to chat? Feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <Mail size={24}/>
                      </div>
                      <div>
                        <p className="text-gray-600">Email</p>
                        <a href="mailto:contact@lyneq.be" className="text-lg hover:text-blue-600">
                          contact@lyneq.be
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <MapPin size={24}/>
                      </div>
                      <div>
                        <p className="text-gray-600">Location</p>
                        <p className="text-lg">Charleroi, BE</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                              placeholder="Your message..."
                      />
                    </div>

                    <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (<>
                                <Loader2 className="animate-spin" size={20}/>
                                Sending...
                              </>) : ('Send Message')}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p>© 2026 Lyne Quequin. All rights reserved.</p>
            </footer>
          </section>);
}
