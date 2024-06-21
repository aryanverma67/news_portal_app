import React, { useState } from 'react';
import { toast } from 'react-toastify';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or email
    toast('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl underline hover:text-blue-600 transition-all duration-500 font-bold text-center mb-10">About Us</h1>
      
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-7 mb-4">
          At <span className="font-bold"><span className='text-blue-600'>News</span> Portal</span>, our mission is to deliver timely, accurate, and engaging news that informs and inspires our readers. We believe in the power of journalism to foster understanding, spark conversations, and drive change in our communities and the world.
        </p>
        <p className="text-lg leading-7">
          We are committed to upholding the highest standards of integrity, objectivity, and fairness in our reporting. Our dedicated team of journalists, editors, and contributors work tirelessly to bring you the stories that matter most.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg leading-7 mb-4">
          Our team is composed of experienced journalists, skilled editors, and talented contributors who are passionate about storytelling and committed to excellence. We come from diverse backgrounds and bring a wealth of knowledge and expertise to our work.
        </p>
        <p className="text-lg leading-7">
          Together, we strive to provide our readers with comprehensive, insightful, and engaging content that keeps them informed and inspired.
        </p>
      </section>

      <section className="mb-10 rounded-lg ">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg leading-7 mb-4">
          We value our readers' feedback and welcome your questions, comments, and suggestions. Feel free to reach out to us using the contact form below or follow us on social media for the latest updates and behind-the-scenes content.
        </p>

        <form onSubmit={handleSubmit} className="bg-transparent border p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border bg-gray-100  text-black rounded-md focus:outline-none focus:border-blue-500"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-3 py-2 bg-gray-100  text-black border  rounded-md focus:outline-none focus:border-blue-500"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full px-3 py-2 bg-gray-100  text-black border  rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
              required  
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default About;
