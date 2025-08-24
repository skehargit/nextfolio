import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <ul className="space-y-2">
      <li>
        <Link href="/location" className="flex items-center space-x-3 hover:underline">
          <Image src="/svg/location.svg" alt="location" width={20} height={20} />
          <span>From Odisha, India</span>
        </Link>
      </li>
      <li>
        <a
          href="mailto:sudhansusekharweb@gmail.com"
          className="flex items-center space-x-3 hover:underline"
          aria-label="Send email to sudhansusekharweb@gmail.com"
        >
          <Image src="/svg/email.svg" alt="email" width={20} height={20} />
          <span className="">sudhansusekharweb@gmail.com</span>
        </a>
      </li>
      <li>
        <a
          href="tel:+919078078242"
          className="flex items-center space-x-3 hover:underline"
          aria-label="Call phone number +91 9078078242"
        >
          <Image src="/svg/phone.svg" alt="phone" width={20} height={20} />
          <span className="">(+91) 9078078242</span>
        </a>
      </li>
      <li>
        <Link href="/resume" className="flex items-center space-x-3 hover:underline">
          <Image src="/svg/resume.svg" alt="resume" width={20} height={20} />
          <span>Resume</span>
        </Link>
      </li>
    </ul>
  );
};

export default Contact;
