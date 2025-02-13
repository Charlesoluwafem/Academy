import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState({
    companyName: 'Your Company',
    logo: null,
    theme: 'blue', // Default theme
  });
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ title: '', description: '', logo: null });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Fetch user courses from the API
  useEffect(() => {
    axios.get('/api/courses')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  // Handle theme change
  const handleThemeChange = (theme) => {
    setUser({ ...user, theme });
  };

  // Handle changes for course and company logo
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setCourse({ ...course, logo: files[0] });
    } else if (name === 'companyLogo') {
      setUser({ ...user, logo: files[0] });
    } else {
      setCourse({ ...course, [name]: value });
    }
  };

  // Handle course creation or updating
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedCourses = [...courses];
      updatedCourses[editingIndex] = course;
      setCourses(updatedCourses);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      axios.post('/api/courses', course)
        .then((response) => {
          setCourses([...courses, response.data]);
        })
        .catch((error) => console.error('Error creating course:', error));
    }
    setCourse({ title: '', description: '', logo: null });
  };

  // Edit and delete course actions
  const handleEdit = (index) => {
    setCourse(courses[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const courseToDelete = courses[index];
    axios.delete(`/api/courses/${courseToDelete.id}`)
      .then(() => {
        setCourses(courses.filter((_, i) => i !== index));
      })
      .catch((error) => console.error('Error deleting course:', error));
  };

  // Theme colors
  const themeColors = {
    blue: 'bg-blue-700 text-blue-100',
    green: 'bg-green-700 text-green-100',
    gray: 'bg-gray-800 text-gray-100',
  };

  return (
    <div className={`min-h-screen ${themeColors[user.theme]} py-10 px-6`}>
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 shadow-lg">
        <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
        {user.logo && (
          <img
            src={URL.createObjectURL(user.logo)}
            alt="Company Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
      </header>

      <div className="container mx-auto mt-6">
        {/* Theme Selector */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Dashboard Theme</h2>
          <div className="flex space-x-4">
            {['blue', 'green', 'gray'].map((color) => (
              <button
                key={color}
                onClick={() => handleThemeChange(color)}
                className={`w-12 h-12 rounded-full ${
                  color === 'blue' ? 'bg-blue-700' : color === 'green' ? 'bg-green-700' : 'bg-gray-700'
                } ${
                  user.theme === color ? 'ring-4 ring-offset-2 ring-white' : ''
                } transition`}
                title={`Set ${color} theme`}
              ></button>
            ))}
          </div>
        </section>

        {/* Course Management */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {isEditing ? 'Edit Course' : 'Create a New Course'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-600 font-medium mb-1">
                Course Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={course.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course title"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-600 font-medium mb-1">
                Course Description
              </label>
              <textarea
                id="description"
                name="description"
                value={course.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write a brief description"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="logo" className="block text-gray-600 font-medium mb-1">
                Course Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-gray-500 border rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              {isEditing ? 'Update Course' : 'Create Course'}
            </button>
          </form>
        </section>

        {/* Created Courses */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Courses</h2>
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow hover:shadow-md transition"
                >
                  {course.logo && (
                    <img
                      src={URL.createObjectURL(course.logo)}
                      alt={course.title}
                      className="w-full h-32 object-cover rounded-md mb-4"
                    />
                  )}
                  <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No courses created yet. Start by adding one!</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
