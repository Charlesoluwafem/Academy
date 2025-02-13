import Navbar from '../components/Navbar';
import { useState } from 'react';
import Head from 'next/head';
import Modal from '../components/requestDemoModal';
import Image from 'next/image'

export default function Home() {
  const [showScheduler, setShowScheduler] = useState(false); // State to control visibility of the scheduler
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleClick = () => {
    setShowScheduler(!showScheduler); // Toggle the scheduler visibility
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCloseModal = () => {
    setShowScheduler(false); // Close the scheduler modal
  };

  return (
    <>

<div
  className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center pt-16 md:pt-24"
  style={{
    backgroundImage: "url('/images/backgroundtop@2x.png')", // Replace with the actual background image if needed
  }}
>
  {/* Optional overlay for better text contrast */}
  <div className="absolute inset-0 bg-cover bg-center opacity-60"></div>

  {/* Main Heading with added spacing */}
  <div className="relative z-10 text-center mb-8 px-4 md:px-8">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
      Education Reimagined
    </h1>
  </div>

  {/* Centered content container */}
  <div className="relative z-10 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-8 space-y-6 md:space-y-0">
    <div className="mb-8 md:mb-0">
      {/* Subheading */}
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
        Upskilling The Nation
      </h2>
    </div>

    {/* Banner Image */}
    <Image
      src="/images/womantopbanner@2x.png" // Ensure this path is correct
      alt="Banner Image"
      className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" // Responsive image sizing
      width={700}
      height={700}
      quality={100}
    />
  </div>
</div>


<div className="header-demo-card bg-gradient-to-r from-blue-300 to-blue-500 relative p-8 rounded-lg shadow-lg text-white overflow-hidden">
      {/* Background patterns/icons */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="bg-[url('/images/logo-2.svg')] bg-cover h-full"></div>
        {/* You could use SVG or custom icons here, adjusted as needed */}
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 relative z-10">
        <div className="lg:w-2/3 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Are you a university that would like to try us out?
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Experience our platform and see how it can transform your university.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <button 
            onClick={openModal} // Open modal when clicked
            className="demo-btn bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-800 font-semibold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            Request a Demo
          </button>
        </div>
        {/* Modal Component */}
        <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>

<div className="bg-gray-100 py-12">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">Next Generation Online Learning</h1>
  </div>

  <div className="flex flex-wrap gap-8 justify-center">
    {/* First Column - Top Left Card */}
    <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col items-center w-full sm:w-72">
      <Image
        src="/images/checkbox white.svg"
        alt="Video content trusted by over 100k students"
        width={200}
        height={200}
        className="w-28 h-auto"
      />
      <p className="text-lg font-semibold mt-4 text-center">Video content trusted <br /> by over 100k students</p>
      <p className="text-center mt-2">Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
    </div>

    {/* Second Column - Bottom Left Card */}
    <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center w-full sm:w-72">
      <Image
        src="/images/checkbox.svg"
        alt="Researched and produced by experts"
        width={200}
        height={200}
        className="w-28 h-auto"
      />
      <p className="text-lg font-semibold mt-4 text-center">Researched and <br /> produced by experts</p>
      <p className="text-center mt-2">Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
    </div>

    {/* Third Column - Top Right Card */}
    <div className="bg-yellow-400 text-gray-900 p-6 rounded-lg flex flex-col items-center w-full sm:w-72">
      <Image
        src="/images/checkbox white (1).svg"
        alt="Approved by grads and industry experts"
        width={200}
        height={200}
        className="w-28 h-auto"
      />
      <p className="text-lg font-semibold mt-4 text-center">Approved by grads <br /> and industry experts</p>
      <p className="text-center mt-2">Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
    </div>

    {/* Fourth Column - Bottom Right Card */}
    <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col items-center w-full sm:w-72">
      <Image
        src="/images/checkbox white.svg"
        alt="Build on community and transparency"
        width={200}
        height={200}
        className="w-28 h-auto"
      />
      <p className="text-lg font-semibold mt-4 text-center">Build on community <br /> and transparency</p>
      <p className="text-center mt-2">Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
    </div>
  </div>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 mt-6 md:mt-10 relative">
  {/* Decorative Dots Images */}
  <div className="flex space-x-4">
    <Image 
      src="/images/dots.svg" 
      className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28" 
      alt="Decorative Dots" 
      width={500} 
      height={500} 
    />
    <Image 
      src="/images/dots.svg" 
      className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28" 
      alt="Decorative Dots" 
      width={500} 
      height={500} 
    />
    <Image 
      src="/images/dots.svg" 
      className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28" 
      alt="Decorative Dots" 
      width={500} 
      height={500} 
    />
  </div>

  {/* Main Banner Section */}
  <div className="w-full min-h-screen bg-[#F0F4F6] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
    <div className="relative w-full h-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
      <Image 
        src="/images/man2.png" 
        className="object-cover w-full h-full" 
        alt="Banner Image" 
        width={800} 
        height={500} 
        quality={100} 
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 px-6 sm:px-8 md:px-10 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Step Into a World of Endless Learning
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-blue-200">
          Unlock your potential with expertly crafted courses designed for every stage of your journey. Join a community of curious minds shaping tomorrow.
        </p>
        <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-lg font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300">
          Start Your Journey Today
        </button>
      </div>
    </div>
  </div>
</div>

<div 
  className="relative bg-cover bg-center py-16" 
  style={{ 
    backgroundColor: '#8CC7E3', // Setting the background color directly
    backgroundSize: 'cover', // Ensures the background image covers the entire container (no longer needed since we are using color)
    backgroundPosition: 'center', // Centers the background (removed since we're not using an image)
  }}
>
  {/* Overlay for text readability */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="max-w-screen-xl mx-auto px-4 relative z-10">
    <div className="text-center pt-5 pb-10">
      <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
        Education That Matters
      </h1>
    </div>
    <h2 className="text-3xl font-semibold text-center text-white mb-10 drop-shadow-md">
      Some of Our Top Courses
    </h2>

    {/* Grid layout for all screen sizes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[ 
        { src: '/images/design.svg', title: 'Design', description: 'Learn the fundamentals of design and creativity that shape the world around us.' },
        { src: '/images/development.svg', title: 'Development', description: 'Master coding and web development to build robust, scalable applications.' },
        { src: '/images/it_software.svg', title: 'IT & Software', description: 'Gain expertise in IT solutions and software development, the backbone of today’s tech-driven world.' },
        { src: '/images/dbusiness.svg', title: 'Business', description: 'Explore business strategies and practices that make companies thrive in a competitive landscape.' },
        { src: '/images/marketing.svg', title: 'Marketing', description: 'Learn digital marketing strategies to help businesses expand their reach and grow.' },
        { src: '/images/photo.svg', title: 'Photography', description: 'Unlock your creative potential with photography techniques and the art of visual storytelling.' },
        { src: '/images/heathcare.svg', title: 'Health & Care', description: 'Become a healthcare expert and make a positive impact on people’s lives through knowledge and care.' },
        { src: '/images/technology.svg', title: 'Technology', description: 'Dive deep into emerging technologies and trends shaping the future of our digital world.' },
      ].map((course, index) => (
        <div key={index} className="bg-white shadow-xl rounded-xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src={course.src} 
            alt={course.title} 
            className="w-full h-auto max-w-xs mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

 
<div className="container mx-auto px-5 py-10" style={{ background: '#8CC7E3' }}>
  <div className="text-center mb-8">
    <h1 className="text-4xl font-extrabold text-indigo-600">Contact Us</h1>
    <div className="h-1 w-24 mx-auto bg-indigo-500 mt-2"></div> {/* Decorative line */}
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex justify-center items-center">
      <Image 
        src="/images/contact img 1@2x.png"
        alt="Contact Image 1"
        width={500}
        height={500}
        className="img-fluid rounded-xl shadow-lg"
      />
    </div>
    <div className="flex justify-center items-center">
      <Image
        src="/images/contact img 2@2x.png"
        alt="Contact Image 2"
        width={500}
        height={500}
        className="img-fluid rounded-xl shadow-lg"
      />
    </div>
    <div className="flex justify-center items-center">
      <Image 
        src="/images/contact img 3@2x.png"
        alt="Contact Image 3"
        width={800}
        height={800}
        className="img-fluid rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>

<div className="d-flex justify-content-center align-items-center min-vh-100 bg-[#8CC7E3]">
  <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4">
    <form className="form-container bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-center mb-4 text-primary">Contact Us</h3>

      <div className="form-group mb-3">
        <textarea
          className="form-control form-control-lg border-0 shadow-sm p-3"
          rows="5"
          placeholder="Your message"
          style={{ resize: 'none', minHeight: '120px', fontSize: '16px' }}
          required
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="form-control form-control-lg border-0 shadow-sm p-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group mb-3">
        <input
          type="password"
          className="form-control form-control-lg border-0 shadow-sm p-3"
          id="exampleInputPassword1"
          placeholder="Enter password"
          required
        />
      </div>

      <div className="form-group text-center mt-4">
        <button type="submit" className="btn btn-primary w-100 py-2 shadow-sm">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

        
</>
);
}
