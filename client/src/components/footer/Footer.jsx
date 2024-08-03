import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        This site was created as an exam project in S
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://softuni.bg/"
        >oftUni</a>
      </div>
    </footer>
  );
}