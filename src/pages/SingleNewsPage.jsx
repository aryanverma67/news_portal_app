import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleNewsPage = () => {
  const location = useLocation();
  const { news } = location.state;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-6 group overflow-hidden rounded-lg ">
        <img 
          src={news.urlToImage} 
          alt="Article" 
          className="absolute rounded-xl inset-0 w-full h-full object-contain "
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-0">{news.title}</h1>
      </div>
      <h4 className="text-xl md:text-2xl text-gray-700 mb-4">{news.description}</h4>
      <div className="text-gray-600 mb-6">
        <span className="block mb-2"><strong>Author:</strong> {news.author || 'Unknown'}</span>
      </div>
      <p className="text-lg md:text-xl leading-7 md:leading-8 mb-6">{news.content}</p>
      <div className="text-blue-600 mb-4">
        <a 
          href={news.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:text-blue-800 transition-colors duration-300"
        >
          Read full article
        </a>
      </div>
      <div className="text-gray-500 flex justify-between items-center">
        <span className="block">
          <strong>Source:</strong>
          <span className='text-red-600 text-md font-sans font-semibold'> {news.source.name}</span>
        </span>
                <span className="text-gray-600">{new Date(news.publishedAt).toLocaleDateString()}</span>

        
      </div>

    </div>
  );
};

export default SingleNewsPage;
