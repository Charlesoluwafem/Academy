import { useState } from "react";
import { LayoutDashboard, Bell, User, BookOpen, CheckCircle } from "lucide-react";
import Footer from './footer'
import Image from 'next/image'
export default function AdminPanel() {
  const [tab, setTab] = useState("dashboard");
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      {/* Navbar */}
      <header className="bg-[#c4a589] p-4 flex justify-between items-center text-white">

        <Image src='/images/logo-2.svg' className="ml-5"
        width='200'
        height='200'
        
        />

        <nav className="space-x-6">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Users</a>
          <a href="#" className="text-white">Courses</a>
          <a href="#" className="text-white">Payments</a>
        </nav>
        <div className="bg-white text-black p-2 rounded-full">JD</div>
      </header>
      
      {/* Actions */}
      <div className="bg-white p-4 flex justify-center space-x-4 shadow-md">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Course</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Demo</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Users</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Review Data</button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 grid grid-cols-3 gap-8 ml-20">
        {/* Left Column */}
        <div className="col-span-2">
          <h2 className="text-3xl font-bold">WELCOME BACK, JOHN.</h2>
          <div className="mt-6 flex space-x-4">
            {['200 Active Demos', '200 Total Companies', '200 Total Users', '200 Total Admin'].map((text, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white shadow-md">{text}</div>
            ))}
          </div>
          <section className="mt-8">
            <h3 className="text-xl font-bold">Course Notifications</h3>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mt-4">
                <p className="font-bold">Design</p>
                <p>UI/UX For Beginners</p>
                <p>I was stuck on this course and had an issue restarting it: <a href="#" className="text-blue-600">Chapter 1 - Creating Layout in Figma/Sketch</a></p>
                <p className="text-gray-600">Active - 14 December 09:00 - 10:30</p>
              </div>
            ))}
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-bold">Course Comments</h3>
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              {["Amanda Smith", "John Doe", "Will Smith", "Anthony Bucket"].map((name, index) => (
                <div key={index} className="mb-4 border-b pb-2">
                  <p className="font-bold">{name}</p>
                  <p>University Student</p>
                  <p>It’s a really nice course. I feel like the way it was taught really helped my comprehension.</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        {/* Right Column */}
        <div>
          <h3 className="text-xl font-bold">Updates</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">15 February 2025</p>
            {["09:00 - New Query from John Smith - Company: Water Smith", "10:30 - New Query from John Smith - Company: Water Smith", "12:30 - New Query from John Smith - Company: Water Smith"].map((update, index) => (
              <p key={index}>{update}</p>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
