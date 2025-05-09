import React from 'react';
import './footer.css'; // Import the CSS file for styling

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
