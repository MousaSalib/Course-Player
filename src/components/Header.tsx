"use client";

import Link from "next/link";

export default function Header() {
  const links = [
    { label: "Home", disabled: true },
    { label: "Courses", disabled: true },
    { label: "Course Details", href: "/", disabled: false },
  ];

  return (
    <header className="bg-gray-100 p-4">
      <nav className="flex items-center text-gray-800 font-medium mb-4">
        {links.map((link, index) => (
          <div key={link.label} className="flex items-center">
            {link.disabled ? (
              <span className="text-gray-400 cursor-not-allowed">
                {link.label}
              </span>
            ) : (
              <Link
                href={link.href!}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            )}
            {index < links.length - 1 && (
              <span className="mx-2 text-gray-500">{">"}</span>
            )}
          </div>
        ))}
      </nav>
      <h1 className="text-2xl font-semibold">Starting SEO as your Home</h1>
    </header>
  );
}
