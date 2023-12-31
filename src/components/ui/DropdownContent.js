import React from 'react';
import Link from 'next/link';

const DropdownContent = ({ categories }) => {
  return (
    <ul className="p-2 bg-white text-black z-50">
      {categories.map((category) => (
        <li key={category.name}><Link href={category.href}>{category.name} </Link>
       
        
        </li>
       
      ))}
    </ul>
  );
};

export default DropdownContent;

