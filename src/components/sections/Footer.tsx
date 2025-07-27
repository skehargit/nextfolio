import React from "react";

const Footer = () => (
  <footer
    id="footer"
    className="mt-auto w-full py-8 px-8 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400"
  >
    {/* Add your contact info or footer content here */}
    &copy; {new Date().getFullYear()} Sudhansu Sekhar Behera. All rights reserved.
  </footer>
);

export default Footer;
