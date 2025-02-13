import Image from 'next/image';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-gray-100 h-52 flex justify-center items-center">
        {/* You can add a background image or content here if needed */}
      </div>

      <div className="px-5 lg:px-20 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <div className="mx-auto mt-2 w-24 h-1 bg-indigo-600"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700">
              Academy - Powered by The Young Leaders Network
            </h2>
            <p className="text-lg mt-4 text-gray-600">
              is a black-owned organization formed to up-skill Black university students and equip them with core skills needed to improve their graduate outcomes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {["/images/checkbox.svg", "/images/checkbox.svg", "/images/checkbox.svg"].map((icon, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img src={icon} alt="Checkbox icon" className="w-6 h-6" />
                  <p className="text-gray-600">
                    Up-skill Black university students and equip them with core skills needed to improve their graduate outcomes.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 text-center">
            <Image
              src="/images/top man@2x.png"
              alt="Top Man"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        <p className="mt-8 text-gray-600 leading-relaxed">
          We are proud to embody innovation to reach our community and provide support for universities determined to improve opportunities for black students. Since 2017, we have supported young people with online education to engage future leaders. While supporting black students and young professionals, we also provide resources to underrepresented backgrounds, low socioeconomic groups, carers, and disabled students.
        </p>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="px-5 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
            <div className="mx-auto mt-2 w-16 h-1 bg-indigo-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Community", img: "/images/aboutus-icons/community.svg" },
              { title: "Marketing", img: "/images/aboutus-icons/marketing.svg" },
              { title: "Progressing", img: "/images/aboutus-icons/progressing.svg" },
              { title: "Courses", img: "/images/aboutus-icons/courses.svg" },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={value.img} alt={value.title} className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">{value.title}</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum is placeholder text commonly used in the graphic, print.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-20 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
          <div className="mx-auto mt-2 w-16 h-1 bg-indigo-600"></div>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-4">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </h3>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image src="/images/vision 1@2x.png" alt="Vision" width={500} height={500} className="rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
