import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#features" className="text-sm text-gray-600 hover:text-primary-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-gray-600 hover:text-primary-600">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-600 hover:text-primary-600">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-gray-600 hover:text-primary-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-600 hover:text-primary-600">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="mailto:info@clickcore.io" className="text-sm text-gray-600 hover:text-primary-600">
                  info@clickcore.io
                </a>
              </li>
              <li>
                <a href="tel:+15877571767" className="text-sm text-gray-600 hover:text-primary-600">
                  +1 (587) 757-1767
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} ClickCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}