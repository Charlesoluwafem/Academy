import Head from 'next/head';
import Image from "next/image";

const LearnersPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Head>
        {/* Add Google Fonts link */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        />
      </Head>

      {/* Header Section */}
      <div className="w-full px-4 py-8 md:py-12" style={{ background: '#8CC7E3' }}>
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-serif">
            Hello,<br />Welcome to ACADEMY
          </h1>
          <p className="text-white mt-4 md:mt-6 max-w-lg font-light">
            Empowering minds and building future leaders through high-quality education. Join us on a journey to unlock your potential!
          </p>
          
          {/* Image Section */}
          <div className="mt-6 md:mt-10 w-full max-w-sm">
            <Image
              src="/images/learners/top img@3x.png"
              alt="Academy"
              height={500}
              width={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Future Proofing Section */}
      <div className="w-full px-4 py-10 text-white"  style={{ background: '#8CC7E3' }}>
        <div className="container mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-serif">
            Future-Proofing the Careers of Future Leaders
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed font-light">
            Our curriculum is crafted to equip you with the skills and knowledge that last a lifetime, preparing you to excel in a fast-evolving world.
          </p>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border rounded-lg shadow-lg bg-blue-200 font-medium">
              <img src="/images/learners/design.svg" alt="Design" className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Design</h3>
              <p className="text-gray-800 text-sm md:text-base">
                Dive into the world of design with hands-on projects that let your creativity thrive.
              </p>
              <a href="#" className="text-blue-800 mt-2 block">Know more</a>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-yellow-300 font-medium">
              <img src="/images/learners/business.svg" alt="Business" className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Business</h3>
              <p className="text-gray-800 text-sm md:text-base">
                Master the art of business with courses designed to foster leadership skills.
              </p>
              <a href="#" className="text-yellow-800 mt-2 block">Know more</a>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-red-200 font-medium">
              <img src="/images/learners/enterpenuership.svg" alt="Entrepreneurship" className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Entrepreneurship</h3>
              <p className="text-gray-800 text-sm md:text-base">
                From idea to execution, learn what it takes to build and grow a successful startup.
              </p>
              <a href="#" className="text-red-800 mt-2 block">Know more</a>
            </div>
          </div>
        </div>
      </div>

      {/* About Our Courses Section */}
      <div className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-10 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white font-serif">About Our Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-500 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold">200+</h3>
              <p>Years of industry experience collectively</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold">10+</h3>
              <p>Industry-specific areas</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold">20+</h3>
              <p>Nationwide recognized achievements</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold">10+</h3>
              <p>Hours of fun</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
     {/* Featured Courses Section */}
<div className="w-full bg-gradient-to-r from-indigo-300 to-indigo-500 px-4 py-10 text-white">
  <div className="container mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 font-serif">Featured Courses</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Course 1 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="How to launch a product"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">How to Launch a Product</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Learn the essential steps of product launch, from market research to execution.
        </p>
      </div>

      {/* Course 2 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="How to generate leads"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">How to Generate Leads</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Master lead generation strategies to boost business growth and sales.
        </p>
      </div>

      {/* Course 3 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="Effective Team Management"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">Effective Team Management</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Learn how to lead teams effectively to reach goals and increase productivity.
        </p>
      </div>

      {/* Course 4 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="Mastering Marketing Strategies"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">Mastering Marketing Strategies</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Explore advanced marketing tactics to boost your brand's visibility and success.
        </p>
      </div>

      {/* Course 5 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="Financial Planning for Entrepreneurs"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">Financial Planning for Entrepreneurs</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Learn how to manage finances and grow your startup efficiently.
        </p>
      </div>

      {/* Course 6 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="Building a Personal Brand"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">Building a Personal Brand</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Discover how to create and grow a strong personal brand that stands out.
        </p>
      </div>

      {/* Course 7 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="Business Communication Skills"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">Business Communication Skills</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Master professional communication skills to succeed in the business world.
        </p>
      </div>

      {/* Course 8 */}
      <div className="bg-indigo-400 rounded-lg p-6 shadow-lg font-light">
        <Image
          src="/images/learners/vision 1@2x.png"
          alt="Digital Marketing Fundamentals"
          height={500}
          width={500}
          className="mx-auto rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">Digital Marketing Fundamentals</h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
          Learn the essential tools and strategies for effective digital marketing campaigns.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default LearnersPage;


