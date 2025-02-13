import Image from "next/image";

const SchoolsPage = () => {
    return (
        <div>
            <header className="bg-gray-100 py-10">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">
                            Hello,<br /> Welcome to ACADEMY
                        </h1>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <Image
                            src="/images/school/top img@2x.png"
                            alt="Academy"
                            width={500}
                            height={500}
                            className="w-80 lg:w-96"
                        />
                    </div>
                </div>
            </header>

            <section className="bg-yellow-100 py-10">
                <div className="container mx-auto px-4 lg:px-20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-semibold mb-4">
                            Future proofing the careers of future leaders
                        </h1>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {[
                            { title: "Design", image: "/images/learners/design.svg" },
                            { title: "Business", image: "/images/learners/business.svg" },
                            { title: "Entrepreneurship", image: "/images/learners/enterpenuership.svg" },
                        ].map((course, index) => (
                            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                                <Image src={course.image} alt={course.title} width={500} height={500} className="w-full h-40 object-cover" />
                                <h2 className="text-2xl font-semibold mt-4">{course.title}</h2>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum is placeholder text commonly used in the graphic, print
                                    <br /><br />
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <a href="#" className="text-blue-500 mt-4 inline-flex items-center">
                                    Know more <i className="fas fa-chevron-circle-right ml-2"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-10">
                <div className="container mx-auto px-4 lg:px-20 text-center">
                    <h1 className="text-3xl font-semibold mb-8">About Our Courses</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { title: "200+", description: "Years of industry experience collectively" },
                            { title: "10+", description: "Industry-specific areas" },
                            { title: "20+", description: "Nationwide recognized achievements" },
                            { title: "10+", description: "Hours of fun" },
                        ].map((info, index) => (
                            <div key={index} className="bg-blue-600 text-white p-6 rounded-lg">
                                <h2 className="text-4xl font-bold">{info.title}</h2>
                                <p>{info.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-10">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="text-3xl font-semibold text-center mb-8">Featured Courses</h1>
                    <div className="grid gap-8 md:grid-cols-2">
                        {[
                            { title: "How to launch a product", image: "/images/learners/vision 1@2x.png" },
                            { title: "How to launch a product", image: "/images/learners/vision 2@2x.png" },
                            { title: "How to launch a product", image: "/images/learners/vision 3@2x.png" },
                            { title: "How to launch a product", image: "/images/learners/vision 4@2x.png" },
                        ].map((course, index) => (
                            <div key={index}>
                                <Image src={course.image} alt={course.title} width={500} height={500} className="w-full h-48 object-cover rounded-lg" />
                                <h2 className="text-2xl font-semibold mt-4 text-gray-800">{course.title}</h2>
                                <p className="text-gray-600 mt-2">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-800 py-16 text-white">
                <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <Image
                            src="/images/school/bottom img@2x.png"
                            alt="Request a Demo"
                            width={500}
                            height={500}
                            className="w-full lg:w-80 rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl font-semibold mb-4">Request a Demo</h2>
                        <p className="mb-6">
                            Take a closer look at what our platform can do to enhance your learning experience and career development.
                        </p>
                        <a href="#" className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-lg font-bold">Request a demo</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SchoolsPage;

