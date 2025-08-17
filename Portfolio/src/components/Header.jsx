// src/components/Header.jsx
import { Sun, Moon } from "lucide-react";
import React from "react";
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded border text-xs font-semibold bg-blue-600">SS</span>
        </div>
        <ul className="flex items-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>



    </header>
  );
}
