import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-roboto font-black mb-6 text-brown-200 tracking-wide uppercase">OPYRA INFOTECH</h3>
            <p className="text-brown-300 mb-6 leading-relaxed font-roboto font-light tracking-wide">
              Digital Agency That Thrives on Your Success. We help businesses create remarkable online presence.
            </p>
            <div className="space-y-3 text-brown-300 font-roboto font-light tracking-wide">
              <p>📍AIC BUILDING BHU VARANASI 221005, UP INDIA</p>
              <p>✉️ infotechopyra@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-roboto font-black mb-6 text-brown-200 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-brown-300 hover:text-white transition-colors font-roboto font-medium tracking-wide uppercase">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brown-300 hover:text-white transition-colors font-roboto font-medium tracking-wide uppercase">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brown-300 hover:text-white transition-colors font-roboto font-medium tracking-wide uppercase">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brown-300 hover:text-white transition-colors font-roboto font-medium tracking-wide uppercase">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-roboto font-black mb-6 text-brown-200 tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-brown-300 font-roboto font-medium tracking-wide">
              <li>WEB DESIGN</li>
              <li>WEB DEVELOPMENT</li>
              <li>DIGITAL MARKETING</li>
              <li>SEO SERVICES</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown-800 mt-12 pt-8 text-center">
          <p className="text-brown-400 font-roboto font-light tracking-wide">
            COPYRIGHT © 2025 OPYRA INFOTECH | POWERED BY OPYRA INFOTECH
          </p>
        </div>
      </div>
    </footer>
  )
}
