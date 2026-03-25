import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { Zap, Camera, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer inline-flex">
              <div className="bg-primary-600 text-white p-2 rounded-xl">
                <Zap size={20} className="fill-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Founder<span className="text-primary-500">Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-slate-800 p-3 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Camera size={20} />
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} aria-label="Email" className="bg-slate-800 p-3 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Mail size={20} />
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" aria-label="WhatsApp" rel="noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-[#25D366] transition-colors text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/events" className="text-slate-400 hover:text-primary-400 transition-colors">Events & Meetups</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Legal</h3>
            <ul className="space-y-4">
              <li><div className="text-slate-400 hover:text-primary-400 transition-colors cursor-pointer">Privacy Policy</div></li>
              <li><div className="text-slate-400 hover:text-primary-400 transition-colors cursor-pointer">Terms of Service</div></li>
              <li><div className="text-slate-400 hover:text-primary-400 transition-colors cursor-pointer">Community Guidelines</div></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed for Startup Founders.
          </p>
        </div>
      </div>
    </footer>
  );
}
