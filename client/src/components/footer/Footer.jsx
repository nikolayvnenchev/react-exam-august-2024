import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left border-t border-neutral-300 dark:border-neutral-600">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        This site was created as an exam project in&nbsp;
        <a
          style={{ color: 'blue' }}
          className="text-neutral-800 font-bold dark:text-neutral-400"
          href="https://softuni.bg/"
        >SoftUni</a>
      </div>
    </footer>
  );
}