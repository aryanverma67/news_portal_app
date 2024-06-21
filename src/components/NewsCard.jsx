import React, { useState, useEffect } from 'react';
import NewsCategory from '../components/NewsCategory';
import { Link } from 'react-router-dom';

const NewsCard = ({ query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const perPage = 8; // Number of news articles per page
  const apiKey = "3182dee9568c6517e0634d3343c82520";

  const fetchData = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.articles || []);
      setFilteredData(result.articles || []);
      console.log(result.articles)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (query) {
      setFilteredData(
        data.filter(article =>
          article.title && article.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [query, data]);

  // Calculate total pages based on data length and perPage
  const totalPages = Math.ceil(filteredData.length / perPage);

  // Function to paginate data array
  const paginateData = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return filteredData.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle next page
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  // Handle previous page
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <NewsCategory selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="ml-6 mt-10 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredData.length > 0 ? (
          paginateData().map((news, index) => (
            <div key={index} className="max-w-sm h-[400px] rounded-lg ml-3 mr-3 overflow-hidden shadow-lg">
              <img src={news.image || "https://via.placeholder.com/150"} alt="not found" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {news.title || "No Title Available"}
                </div>
                <Link to={`/newspage/singlenews/${index}`} state={{ news: news }} className="text-left text-lg text-blue-600 hover:text-blue-900 hover:underline">Read more..</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No news articles found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className="mx-1 px-3 py-1 rounded-lg bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-1 rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="mx-1 px-3 py-1 rounded-lg bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default NewsCard;
