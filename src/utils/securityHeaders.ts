// Add these headers to your server configuration
// For GitHub Pages, you may need to use a custom domain with Cloudflare or Netlify to apply these headers

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self)'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      connect-src 'self' https://www.google-analytics.com;
      frame-src 'self';
      object-src 'none';
    `.replace(/\s+/g, ' ').trim()
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

// Example for Express.js server:
/*
const express = require('express');
const app = express();

// Apply security headers
securityHeaders.forEach(({ key, value }) => {
  app.use((req, res, next) => {
    res.setHeader(key, value);
    next();
  });
});
*/

// Example for Netlify (create a netlify.toml file):
/*
[[headers]]
  for = "/*"
  [headers.values]
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Frame-Options = "DENY"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(self)"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none';"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
*/

export default securityHeaders;
