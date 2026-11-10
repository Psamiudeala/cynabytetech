import React from 'react';
import { CONTACT_INFO } from '../data/servicesData.ts';
import { Phone, Mail, MessageSquare, Linkedin, Twitter, Instagram, ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-14 pb-12 border-t border-neutral-900" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <button
              type="button"
              onClick={() => scrollTo('hero')}
              className="text-2xl font-bold tracking-tight text-white group cursor-pointer inline-flex items-center"
            >
              <span>cynabyte</span>
              <span className="text-[#ADF802] font-black inline-block transition-transform duration-300 group-hover:scale-125">
                .
              </span>
            </button>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Engineering high-performance websites and digital products that turn visitors into loyal customers.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-neutral-400">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ADF802] transition-colors flex items-center space-x-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#ADF802]" />
                <span>WhatsApp</span>
              </a>
              <span>&bull;</span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-[#ADF802] transition-colors flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#ADF802]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <span>&bull;</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-[#ADF802] transition-colors flex items-center space-x-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#ADF802]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="https://www.linkedin.com/company/cynabytetech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center space-x-1.5 py-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                <span>Cynabyte Tech</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/samueludeala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center space-x-1.5 py-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                <span>Samuel Udeala</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
              <a
                href="https://x.com/cynabytetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center space-x-1.5 py-1 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 text-neutral-500" />
                <span>@cynabytetech</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
              <a
                href="https://tiktok.com/@cynabytetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center space-x-1.5 py-1 transition-colors"
              >
                <span className="w-3.5 h-3.5 font-bold text-[10px] flex items-center justify-center text-neutral-500">
                  TT
                </span>
                <span>@cynabytetech</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
              <a
                href="https://www.instagram.com/cynabytetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center space-x-1.5 py-1 transition-colors col-span-2"
              >
                <Instagram className="w-3.5 h-3.5 text-neutral-500" />
                <span>Instagram: @cynabytetech</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Cynabyte Tech. All rights reserved.</p>
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
