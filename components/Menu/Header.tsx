// components/Header.tsx
import React from "react";
import Link from "next/link";
import { NavigationMenuDemo } from "@/components/Menu/NavMenu";  // Navbar'ı import ediyoruz

const Header = () => {
  return (
    <div>
      {/* Navbar'ı burada çağırıyoruz */}
      <NavigationMenuDemo/> 
    </div>
  );
};

export default Header;  // Header'ı default olarak export ediyoruz
