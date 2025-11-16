/**
 * Security Headers Configuration
 * This file defines security headers to prevent code inspection and protect the application
 */

module.exports = {
  // Prevent MIME type sniffing
  "X-Content-Type-Options": "nosniff",

  // Prevent clickjacking attacks
  "X-Frame-Options": "DENY",

  // Enable XSS protection
  "X-XSS-Protection": "1; mode=block",

  // Control referrer information
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Restrict browser features
  "Permissions-Policy": "geolocation=(), microphone=(), camera=(), payment=()",

  // Content Security Policy - prevents inline scripts and restricts resource loading
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.emailjs.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; "),

  // Prevent browser from caching sensitive responses
  "Cache-Control": "no-cache, no-store, must-revalidate",

  // Additional privacy headers
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
};
