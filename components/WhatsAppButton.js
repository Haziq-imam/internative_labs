'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/14044651869"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-container"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-tooltip">
        <span className="whatsapp-tooltip-dot"></span>
        Chat on WhatsApp
      </div>
      <div className="whatsapp-float">
        <FaWhatsapp size={32} />
      </div>
    </a>
  );
}
