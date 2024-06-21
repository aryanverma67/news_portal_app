import React from 'react'
import NewsCard from '../components/NewsCard'
import NewsCategory from '../components/NewsCategory'
import { useState } from 'react'
const Newspage = () => {
    const [selectedCategory, setSelectedCategory] = useState('general');

  return (
    <>

    <div>
        <NewsCard/>
        
    </div>
    </>
  )
}

export default Newspage