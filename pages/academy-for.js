import Head from "next/head";

export default function WhoIsAcademyFor() {
  return (
    <>
      <Head>
        <title>Who is Academy For? - Academy</title>
        <meta name="description" content="Discover who Academy is designed for and how it helps different professionals and organizations upskill effectively." />
      </Head>

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-green-800">
          Who is Academy for?
        </h1>

        <p className="text-lg text-gray-700 text-center mt-4">
          Academy is designed to empower a diverse range of professionals and organizations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Card 1: For Professionals */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700">For Professionals</h2>
            <p className="text-gray-600 mt-2">
              Whether you're an aspiring professional or an industry expert, Academy offers specialized courses to elevate your career.
            </p>
          </div>

          {/* Card 2: For Companies */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700">For Companies</h2>
            <p className="text-gray-600 mt-2">
              Businesses use Academy to upskill their teams, ensuring they stay competitive in a fast-changing market.
            </p>
          </div>

          {/* Card 3: For Students */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700">For Students</h2>
            <p className="text-gray-600 mt-2">
              Students gain industry-relevant knowledge, practical skills, and mentorship from industry leaders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
