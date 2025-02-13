import React from 'react';

const Dashboard = ({ user, courses }) => {
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">Please log in to access your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Welcome, {user.firstName}!</span>
            <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        {/* Profile Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Name:</span> {user.firstName} {user.lastName}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Email:</span> {user.email}
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Phone:</span> {user.phone || 'N/A'}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Company:</span> {user.company || 'N/A'}
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Courses</h2>
          <ul className="space-y-4">
            {courses.length > 0 ? (
              courses.map((course) => (
                <li
                  key={course.id}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-md hover:shadow-lg transition"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                    View Course
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-600">No courses available at the moment.</p>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
