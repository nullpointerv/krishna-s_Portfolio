'use client'

import React from 'react'
import { Linkedin, Mail, Phone, Globe, Box, Book, Briefcase, Cpu, Rocket, Star, Trophy, Hexagon, Circle, Square } from 'lucide-react'
import Image from 'next/image'

interface FloatingElementProps {
  children: React.ReactNode;
  delay: number;
  initialPosition: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const FloatingElement = ({ children, delay, initialPosition }: FloatingElementProps) => {
  return (
    <div 
      
      className="absolute transform transition-all animate-float"
      style={{
        ...initialPosition,
        transitionDuration: `${delay}ms`,
        animation: `float ${delay}ms infinite alternate ease-in-out`,
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  //const [scrolled, setScrolled] = useState(false)

  //useEffect(() => {
   // const handleScroll = () => {
    // setScrolled(window.scrollY > 50)
    //}
    //window.addEventListener('scroll', handleScroll)
    //return () => window.removeEventListener('scroll', handleScroll)
  //}, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <style>
          {`
            @keyframes float {
              0% { transform: translate(0, 0) rotate(0deg); }
              100% { transform: translate(10px, -10px) rotate(5deg); }
            }
            
            @keyframes floatReverse {
              0% { transform: translate(0, 0) rotate(0deg); }
              100% { transform: translate(-10px, 10px) rotate(-5deg); }
            }

            .animate-float {
              animation: float 3s infinite alternate ease-in-out;
            }

            .animate-float-reverse {
              animation: floatReverse 4s infinite alternate ease-in-out;
            }

            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .gradient-animate {
              background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
              background-size: 400% 400%;
              animation: gradient 15s ease infinite;
            }

            .hover-float {
              transition: all 0.3s ease;
            }

            .hover-float:hover {
              transform: translateY(-10px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }

            @media (max-width: 768px) {
              .responsive-grid {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>
        <FloatingElement delay={3000} initialPosition={{ top: '10%', left: '10%' }}>
          <Hexagon className="text-blue-500/20" size={60} />
        </FloatingElement>
        <FloatingElement delay={4000} initialPosition={{ top: '20%', right: '10%' }}>
          <Circle className="text-purple-500/20" size={40} />
        </FloatingElement>
        <FloatingElement delay={5000} initialPosition={{ bottom: '20%', left: '15%' }}>
          <Square className="text-green-500/20" size={50} />
        </FloatingElement>
        <FloatingElement delay={3500} initialPosition={{ bottom: '15%', right: '15%' }}>
          <Box className="text-yellow-500/20" size={45} />
        </FloatingElement>
        <FloatingElement delay={4500} initialPosition={{ top: '50%', right: '5%' }}>
          <Cpu className="text-red-500/20" size={35} />
        </FloatingElement>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative">
  <div className="text-center transform transition-transform duration-500 hover:scale-105 space-y-6">
    {/* Responsive Profile Image */}
    <div className="mb-8">
  <Image 
    src="/krishhna.jpg"
    alt="Krishna Kumar"
    width={192} // 48px * 4 (for md:w-48)
    height={192}
    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto 
             border-4 border-blue-500 shadow-lg hover:border-purple-500 
             transition-all duration-300"
    style={{
      objectFit: 'cover'
    }}
  />
</div>
    {/* Responsive Name */}
    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent"
      style={{
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
      }}>
      Krishna Kumar
    </h1>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-400 transform hover:scale-105 transition-transform">
              Founder & CEO
            </h2>
            <p className="text-xl sm:text-2xl text-blue-300">
              PICRAFT TECHNOLOGY  PVT LTD
            </p>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Leading innovation in 3D printing technology with Made in India solutions
          </p>
        </div>
      </section>

      {/* Achievement Cards with Float Effect */}
      <section id="achievements" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket size={40} />,
                title: "Startup India Seed Fund",
                desc: "Received a Funding of 10 Lakh INR",
                color: "blue"
              },
              {
                icon: <Rocket size={40} />,
                title: "Department of Science and Technology Dehradun",
                desc: "Received a Funding of 5 Lakh INR",
                color: "purple"
              },
              {
                icon: <Rocket size={40} />,
                title: "Runway Incubater Dehradun",
                desc: "Received a Funding of 1 Lakh INR",
                color: "green"
              },
              {
                icon: <Trophy size={40} className="text-amber-400" />,
                title: "IIT Roorkee Cognizance",
                desc: "Runners Up at ROBOWARS",
                color: "yellow"
              },
              {
                icon: <Trophy size={40} className="text-amber-400" />,
                title: "IIT Patna Celesta",
                desc: "Runners Up at ROBOWARS",
                color: "indigo"
              },
              {
                icon: <Star size={40} className="text-amber-400"/>,
                title: "Dev Bhoomi Uttarakhand University (DBUU)",
                desc: "Won 1 Lakh prize money at Science Exhibition Fair",
                color: "red"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="hover-float bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:bg-gray-700 group"
              >
                <div className={`text-${item.color}-500 mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:text-${item.color}-400 transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "3D Printing Technology",
              "Open CV",
              "Product Development",
              "Drone Building",
              "Internet of Things",
              "Computer Numerical Control",
              "PCB Design",
              "AutoCAD",
            ].map((skill, index) => (
              <div
                key={index}
                className="hover-float bg-gray-700 p-4 rounded-lg text-center cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
          
          {/* Work Experience */}
          <div className="mb-12">
  <h3 className="text-2xl font-bold mb-6 text-blue-500">Work Experience</h3>
  <div className="hover-float bg-gray-800 p-6 rounded-lg mb-6">
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <Briefcase className="text-blue-500 mt-1" />
      <div>
        <h4 className="text-xl font-bold">Founder & CEO</h4>
        <a 
          href="https://picraft.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:text-blue-400 underline transition-colors"
        >
          Picraft Technology Pvt Ltd
        </a>
        <p className="text-gray-400">2020 - Present</p>
        <p className="mt-2">Leading the company&apos;s vision and strategy in 3D printing innovation</p>
      </div>
    </div>
  </div>
</div>

          {/* Internships */}
          <div className="mb-12">
  <h3 className="text-2xl font-bold mb-6 text-purple-500">Internships</h3>
  <div className="space-y-6">
    {[
      {
        title: "Tech Fellow ",
        company: "Tech Counsellor (R2E Technologies Pvt Ltd)",
        period: "Feb 2023 - May 2023",
        link: ""  // Add link if available
      },
      {
        title: "R&D and Tech Engineer Intern",
        company: "Alien Versions",
        period: "Dec 2023 - Jan 2024",
        link: "https://alienversions.com/team/"  // Replace with actual URL
      }
    ].map((internship, index) => (
      <div
        key={index}
        className="hover-float bg-gray-800 p-6 rounded-lg"
      >
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Star className="text-purple-500 mt-1" />
          <div>
            <h4 className="text-xl font-bold">{internship.title}</h4>
            {internship.link ? (
              <a 
                href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 underline transition-colors"
              >
                {internship.company}
              </a>
            ) : (
              <p className="text-purple-500">{internship.company}</p>
            )}
            <p className="text-gray-400">{internship.period}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>                

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-500">Education</h3>
            <div className="hover-float bg-gray-800 p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Book className="text-green-500 mt-1" />
                <div>
                  <h4 className="text-xl font-bold">B.Tech in Electronics and Computers Science</h4>
                  <p className="text-green-500">UPES Dehradun</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="py-20 px-4 sm:px-6 bg-gray-800/50">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        { 
          icon: <Mail />, 
          title: "Email", 
          content: "Kk1211114@gmail.com",
          href: "mailto:Kk1211114@gmail.com"
        },
        { 
          icon: <Phone />, 
          title: "Phone", 
          content: "+91 87891 39682",
          href: "tel:+918789139682"
        },
        { 
          icon: <Globe />, 
          title: "Website", 
          content: "picraft.in",
          href: "https://picraft.in/"
        },
        { 
          icon: <Linkedin />, 
          title: "LinkedIn", 
          content: "Krishna Kumar",
          href: "https://www.linkedin.com/in/krishna-singh-89047b1b3/"
        }
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-float bg-gray-700 p-6 rounded-lg group hover:bg-gray-600 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="text-blue-500 group-hover:text-blue-400">{item.icon}</div>
            <div>
              <h3 className="font-bold group-hover:text-blue-400">{item.title}</h3>
              <p className="text-gray-300 group-hover:text-gray-100">{item.content}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 px-4 sm:px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 Krishna Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}