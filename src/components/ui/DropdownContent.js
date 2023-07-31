import React from 'react';
import Link from 'next/link';

const DropdownContent = ({ categories }) => {
    console.log(categories, 'from ddwn');
  return (
    <ul className="p-2">
      {categories.map((category) => (
        <li key={category.name}><Link href={category.href}>{category.name}</Link></li>
      ))}
    </ul>
  );
};

export default DropdownContent;

