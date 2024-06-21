import React from 'react';

const NewsCategory = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    'general',
    'entertainment',
    'business',
    'health',
    'science',
    'sports',
    'technology'
  ];

  return (
    <div className='flex flex-wrap gap-3  justify-center mt-6'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className='w-full md:w-auto px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-0 text-white font-semibold text-lg bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer active:text-blue-700'
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default NewsCategory;
