import React from 'react';
import Image from 'next/image';
import { FaChevronCircleRight } from 'react-icons/fa';

export default function AcademyPage() {
  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">
              Hello,<br /> Welcome to ACADEMY
            </h1>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/university/top img@2x.png"
              alt="Academy Welcome"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Future Proofing Section */}
      <div className="bg-yellow-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Future proofing the careers of future leaders</h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="flex flex-wrap justify-center mt-8">
            {[
              { title: "Design", image: "/images/learners/design.svg" },
              { title: "Business", image: "/images/learners/business.svg" },
              { title: "Entrepreneurship", image: "/images/learners/entrepreneurship.svg" },
            ].map((course, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 w-72">
                <Image src={course.image} alt={course.title} width={50} height={50} />
                <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
                <p className="text-gray-600 mt-2">Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
                <a href="#" className="text-blue-600 flex justify-between items-center mt-4">
                  Know more <FaChevronCircleRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Our Courses Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">About Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {[
              { number: "200+", text: "Years of industry experience collectively" },
              { number: "10+", text: "Industry specific areas" },
              { number: "20+", text: "Nationwide recognized achievements" },
              { number: "10+", text: "Hours of fun" },
            ].map((stat, index) => (
              <div key={index} className="bg-blue-600 text-white p-8 rounded-lg text-center">
                <h3 className="text-4xl font-bold">{stat.number}</h3>
                <p className="mt-2">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {Array(4).fill('').map((_, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded-lg">
                <Image
                  src={`/images/learners/vision ${i + 1}@2x.png`}
                  alt="Course Vision"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-semibold mt-4">How to launch a product</h3>
                <p className="text-gray-600 mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/university/bottom img@2x.png"
              alt="Membership"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold">ANNUAL university membership available</h2>
            <p className="text-lg mt-4">Contact our education team today</p>
            <a href="#" className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
