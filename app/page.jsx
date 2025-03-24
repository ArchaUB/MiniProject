"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center text-black">
      {/* Navbar */}
     {/* Navbar */}
<nav className="fixed top-0 left-0 w-full bg-blue bg-opacity-10 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center text-lg text-white z-50">
  <h1 className="text-2xl font-bold">SAPT</h1>
  <ul className="flex space-x-6">
    <li onClick={() => scrollToSection("home")} className="hover:text-[#72b7e3] cursor-pointer">Home</li>
    <li onClick={() => scrollToSection("about")} className="hover:text-[#72b7e3] cursor-pointer">About Us</li>
    <li onClick={() => scrollToSection("contact")} className="hover:text-[#72b7e3] cursor-pointer">Contact</li>
  </ul>
  <button
    onClick={() => router.push("/login")}
    className="bg-[#4a8bbf] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#2a4f76] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#e5c7a1]"
  >
    Sign In
  </button>
</nav>


      {/* Main Content */}
      <div id="home" className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-yellow bg-opacity-10 p-10 rounded-2xl shadow-2xl shadow-gray-500 backdrop-blur-md">
          <h1 className="text-4xl text-white font-extrabold mb-4">Welcome to Skill Assessment and Placement Training Platform</h1>
          <p className="text-lg text-white mb-6">Your gateway to acing interviews and landing your dream job</p>
          <button
            onClick={() => router.push("/login")}
            className="bg-[#4a8bbf] text-white font-semibold px-8 py-3 rounded-lg text-lg hover:bg-[#2a4f76] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#e5c7a1]"
          >
            Get Started
          </button>

          <p className="mt-6 text-white">
            Are you a teacher?{" "}
            <button
              onClick={() => router.push("/teacherlogin")}
              className="text-[#72b7e3] focus:outline-none"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>

      {/* About Us Section */}
      {/* About Us Section */}
<div id="about" className="pt-20 py-20 px-8 bg-opacity-20 backdrop-blur-md text-white text-center">
  <h2 className="text-3xl font-bold mb-4">About Us</h2>
  <p className="text-lg mb-6 max-w-4xl mx-auto">
    At SAPT, we believe in empowering students to confidently face interviews and secure their dream jobs.
    Our platform is designed to provide comprehensive training and skill assessment through real-world 
    scenarios and practical challenges.
  </p>
  <p className="text-lg mb-6 max-w-4xl mx-auto">
    We are a team of passionate students who have experienced the challenges of placement preparation firsthand. 
    Our goal is to simplify the process for fellow students by offering well-structured training modules, 
    practice tests, and insightful guidance.
  </p>
</div>

{/* Contact Section */}
<div id="contact" className="pt-20 py-20 px-8 bg-opacity-20 backdrop-blur-md text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
  <p className="text-lg mb-6 max-w-4xl mx-auto">
    Got questions, feedback, or just want to say hello? We’d love to hear from you!
  </p>
  <p className="text-lg mb-4">
    <span className="font-semibold">Email:</span> support@sapt.com
  </p>
  <p className="text-lg mb-4">
    <span className="font-semibold">Phone:</span> +1 234 567 8901
  </p>
  <p className="text-lg mb-4">
    <span className="font-semibold">Follow us on:</span>
    <br />
    - Facebook: <a href="#" className="hover:text-[#82b1ff]">facebook.com/sapt</a>
    <br />
    - Twitter: <a href="#" className="hover:text-[#82b1ff]">twitter.com/sapt</a>
    <br />
    - LinkedIn: <a href="#" className="hover:text-[#82b1ff]">linkedin.com/company/sapt</a>
  </p>
</div>

    </div>
  );
}
