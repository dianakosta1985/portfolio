import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-slate-900 text-slate-200 flex align-bottom ">
      <p>© {new Date().getFullYear()} Diana Kosta. Built with Next.js and lots of coffee.</p>
    </footer>
  );
};

export default Footer;
