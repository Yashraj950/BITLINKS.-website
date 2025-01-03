import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          opacity: 0.2
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="text-gray-200">
              We are dedicated to providing the best service to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
              <li><Link href="/shorten" className="hover:text-gray-300 transition-colors">Shorten</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-200"> City -India , Bihar , Sasaram </p>
            <p className="text-gray-200">Phone: 9508511755</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 bg-opacity-50 text-white border-gray-700"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 sm:mb-0">&copy;2025 Company ❤️ Wanted Yash  ❤️. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="/facebook" target='_blank'  className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="/twitter" target='_blank'  className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="/instagram"  target='_blank' className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="/linkedin" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="/github" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

