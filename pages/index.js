import Image from "next/image";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="relative bg-green-900 min-h-screen flex flex-col items-center justify-center overflow-hidden">

       {/* Add Navbar Here */}
       <div className="relative min-h-[110vh] bg-green-700 overflow-hidden">
  {/* Navbar */}
  <div className="absolute w-full top-0 z-40">
    <Navbar />
  </div>

  {/* Hero Section */}
  <div className="relative w-screen min-h-[150vh] flex flex-col justify-center overflow-hidden">
  {/* Cover Deep Green Area */}
  <div 
    className="absolute top-0 left-0 w-full h-[200px] z-10"
    style={{ backgroundColor: '#398D66' }} 
  ></div>

  {/* Image Section */}
  <Image
    src="/images/image.png" 
    alt="Upskilling Platform" 
    className="w-full h-full object-cover object-left scale-x-[1] z-0"
  />
</div>

  {/* Cover White Space on Right Side */}
  <div 
    className="absolute top-0 right-0 w-[10%] h-full"
    style={{ backgroundColor: '#398D66' }} 
  ></div>

  {/* Blend into #CDBAA7 at the Bottom */}
  <div 
    className="absolute bottom-[11.7rem] right-0 w-[10%] h-[10vh] ml-100"
    style={{ backgroundColor: '#CDBAA7' }}
  ></div>

</div>









    




      {/* Shared Background Wrapper */}
      <div className="relative w-full">
  {/* Why Academy Section */}
  <section 
    className="relative w-full flex justify-center py-16 px-6 text-white -mt-[11.7rem]"
    style={{ 
     background: "linear-gradient(to right, #CDBAA7 150px, #398D66 150px)",
      minHeight: "100vh"
    }}
  >
    <div className="w-full flex flex-col md:flex-row items-center gap-10 max-w-6xl">
      {/* Left Side: Image */}
      <div className="relative w-full md:w-[45%] flex justify-center ml-10">
        <Image 
          src="/images/section2.png" 
          width={600} 
          height={400} 
          alt="Academy Devices" 
          className="object-contain"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-[55%]">
        <h2 className="text-5xl font-extrabold mb-20">Why Academy?</h2>
        <ul className="space-y-4 text-lg">
  {[
    "Invite-only bespoke opportunities to kickstart your career.",
    "Take industry-leading digital courses to advance your skills.",
    "Join a growing community of young leaders and professionals.",
    "Receive support to get promoted or change careers.",
  ].map((text, index) => (
    <li key={index} className="flex items-center">
      <span className="bg-green-500 text-white rounded-full p-2 flex items-center justify-center w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19l12-12-1.4-1.4z" />
        </svg>
      </span>
      <span className="ml-2">{text}</span>
    </li>
  ))}
</ul>


      </div>
    </div>
  </section>



        {/* Who Is Academy For? Section */}
        <section  
  className="relative w-full flex flex-col items-center py-16 px-6 text-white"
  style={{ backgroundColor: "#398D66" }}
>
  <h2 className="text-4xl font-bold text-center mb-8">Who Is Academy For?</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
    {[
      { text: "Early Career Recruitment", icon: "📋" },
      { text: "Digital Branding & Attraction", icon: "📢" },
      { text: "D&I Consultation", icon: "🤝" },
      { text: "General Recruitment", icon: "🧑‍💼" },
      { text: "Research", icon: "🔬" },
      { text: "Industry Specific and Company Events", icon: "📅" },
    ].map((item, index) => (
      <div 
        key={index} 
        className="p-6 bg-white text-gray-900 rounded-xl shadow-xl shadow-green-500/50 flex flex-col items-center"
      >
        <div className="bg-yellow-400 p-4 rounded-full mb-4 flex items-center justify-center w-14 h-14">
          <span className="text-2xl">{item.icon}</span>
        </div>
        <p className="text-center font-medium">{item.text}</p>
      </div>
    ))}
  </div>
</section>


      </div>

      {/* ✅ Young Leaders Section */}
      {/* ✅ Young Leaders Section */}
 {/* ✅ Young Leaders Section */}
 <div className="relative bg-[#1b6e42] text-white h-screen w-full">
      <Image 
        src="/images/image3.png" 
        alt="Full Content Display" 
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
    </div>
      {/* Footer */}
      <footer>
        
      </footer>
    </div>
  );
}
