// src/component/FloatingIcon.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FloatingIcon = () => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSc_Dc_qIkE07GCyVeVMVKU9rnrayRTNcIP-eIr2cOO5JUyNYw/viewform?pli=1" // Change this to the URL of your form page
      className="fixed bottom-4 right-4 bg-blueish hover:bg-[#FF9141] text-white rounded-full p-1 shadow-lg transition"
      style={{ zIndex: 1000 }} // Ensure it's above other elements
    >
      <Image src="/google-forms.png" alt="form" height={50} width={50} />
    </Link>
  );
};

export default FloatingIcon;
