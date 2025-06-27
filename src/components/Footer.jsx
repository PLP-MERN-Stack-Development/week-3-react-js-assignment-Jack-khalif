import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Jackson Mugwe. All rights reserved.
    </footer>
  );
}
