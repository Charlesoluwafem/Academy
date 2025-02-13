import Head from 'next/head';


export default function Candidates() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Head>
        <title>Candidates</title>
        <meta name="description" content="Explore opportunities for candidates." />
      </Head>

      <main className="container mx-auto px-6 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Opportunities for Candidates</h2>
          <p className="text-gray-600 leading-relaxed">
            Discover exciting career opportunities tailored for you. Whether you're a recent graduate or an experienced professional, we have something for everyone.
          </p>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Browse Jobs
            </button>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Job Listings</h3>
            <p className="text-gray-600 mt-2">Explore our latest job openings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Career Advice</h3>
            <p className="text-gray-600 mt-2">Get tips and advice to advance your career.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Resume Builder</h3>
            <p className="text-gray-600 mt-2">Create a professional resume in minutes.</p>
          </div>
        </section>
      </main>

   
    </div>
  );
}