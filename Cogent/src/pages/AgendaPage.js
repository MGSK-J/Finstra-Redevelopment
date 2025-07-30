import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AgendaPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Agenda data
  const agendaItems = [
    {
      time: "09:30 AM",
      title: "Registration & Welcome Coffee",
      description: "Start your day with networking and refreshments",
      speaker: "",
      type: "break"
    },
    {
      time: "10:00 AM",
      title: "Opening Remarks",
      description: "Welcome address and introduction to the day's agenda",
      speaker: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
      type: "keynote"
    },
    {
      time: "10:10 AM",
      title: "Keynote session: Digital Transformation in a Gen AI World",
      description: "Exploring the impact of generative AI on banking transformation",
      speaker: "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking",
      type: "keynote"
    },
    {
      time: "10:30 AM",
      title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
      description: "Strategic insights on banking transformation imperatives",
      speaker: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
      type: "presentation"
    },
    {
      time: "11:00 AM",
      title: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
      description: "Strategies for customer acquisition in today's competitive landscape",
      speaker: "Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking; Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. 'Incolease'; Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR",
      type: "panel"
    },
    {
      time: "11:30 AM",
      title: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
      description: "Innovative approaches to customer retention in the digital age",
      speaker: "Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking; Heba Yehia, Head of Digital Products, Arab African International Bank; Ismail Ali, Co-Founder and CEO of CARTech; Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt",
      type: "panel"
    },
    {
      time: "12:00 PM",
      title: "Lunch & Networking",
      description: "Enjoy a delicious lunch while networking with peers",
      speaker: "",
      type: "break"
    },
    {
      time: "1:00 PM",
      title: "Workshop: Building a Digital-First Banking Strategy",
      description: "Interactive session on developing effective digital strategies",
      speaker: "Digital transformation experts",
      type: "workshop"
    },
    {
      time: "1:45 PM",
      title: "Closing Remarks & Next Steps",
      description: "Summary of key takeaways and future opportunities",
      speaker: "Finastra leadership team",
      type: "keynote"
    }
  ];
  
  // Featured speakers data
  const featuredSpeakers = [
    {
      name: "Ms. Heba Yehia",
      title: "Head of Digital Products",
      company: "Arab African International Bank",
      image: "/speakers/placeholder.svg",
      bio: "Leading digital product innovation and customer experience transformation"
    },
    {
      name: "Mr. Hamid Nirouzad",
      title: "Managing Director - Africa",
      company: "Finastra Universal",
      image: "/speakers/placeholder.svg",
      bio: "Driving Finastra's growth strategy across the African continent"
    },
    {
      name: "Mr. Rudy Kawmi",
      title: "Managing Director - Middle East, Africa & Asia-Pacific",
      company: "Finastra Universal Banking",
      image: "/speakers/business-meeting.svg",
      bio: "Leading Finastra's business across MEA and APAC regions"
    },
    {
      name: "Mr. Matthew Hughes",
      title: "Head of FS&I, International Markets",
      company: "Atos",
      image: "/speakers/placeholder.svg",
      bio: "Expert in financial services technology and digital transformation"
    },
    {
      name: "Mr. Daragh O'Byrne",
      title: "Senior Director, Marketing, Universal Banking",
      company: "Finastra",
      image: "/speakers/placeholder.svg",
      bio: "Strategic marketing leader for Finastra's Universal Banking solutions"
    },
    {
      name: "Dr. Ismail Ali",
      title: "Co-Founder and CEO",
      company: "CARTech",
      image: "/speakers/placeholder.svg",
      bio: "Innovator in financial technology and digital banking solutions"
    },
    {
      name: "Ms. Riham Muhammad",
      title: "Corporate CEX Senior Analyst",
      company: "FABMISR",
      image: "/speakers/placeholder.svg",
      bio: "Expert in corporate customer experience and digital banking"
    },
    {
      name: "Ms. Siobhan Byron",
      title: "Executive Vice President, Universal Banking",
      company: "Finastra",
      image: "/speakers/smartwatch.svg",
      bio: "Leading Finastra's Universal Banking business globally"
    },
    {
      name: "Mr. Narendra Mistry",
      title: "Chief Product and Technology Officer, Universal Banking",
      company: "Finastra",
      image: "/speakers/placeholder.svg",
      bio: "Driving product innovation and technology strategy"
    },
    {
      name: "Mr. Ahmed Hamdy Bahey El Din",
      title: "Head of Information Technology",
      company: "Incolease",
      image: "/speakers/placeholder.svg",
      bio: "Technology leader specializing in financial services solutions"
    },
    {
      name: "Mr. Emad Shawky Habib Hanna",
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
      image: "/speakers/placeholder.svg",
      bio: "Expert in data analytics and digital transformation in banking"
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: "Al-Baraka Bank Egypt",
      image: "/speakers/placeholder.svg",
      bio: "Specialist in IT governance and digital transformation"
    },
    {
      name: "Mr. Shehab Moustafa",
      title: "Country Center of Excellence Director",
      company: "Money Fellows",
      image: "/speakers/placeholder.svg",
      bio: "Fintech innovation leader and digital banking expert"
    },
    {
      name: "Mr. Marwan Abouzeid",
      title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
      company: "Finastra",
      image: "/speakers/placeholder.svg",
      bio: "Solutions expert helping financial institutions achieve digital transformation"
    },
    {
      name: "Mr. Karim El Mourabet",
      title: "Solution Consulting Director - MEA",
      company: "Finastra",
      image: "/speakers/placeholder.svg",
      bio: "Leading solution consulting for Middle East and Africa region"
    }
  ];
  
  // We're using the featuredSpeakers array defined above

  // Function to get session type style
  const getSessionTypeStyle = (type) => {
    switch (type) {
      case 'keynote':
        return 'border-primary';
      case 'panel':
        return 'border-blue-500';
      case 'workshop':
        return 'border-green-500';
      case 'case-study':
        return 'border-yellow-500';
      case 'break':
        return 'border-gray-500';
      default:
        return 'border-gray-700';
    }
  };

  return (
    <div className="pt-20 pb-16 bg-dark-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Agenda
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join us on June 15th, 2023 for a day of insights, networking, and innovation in financial services
          </p>
        </motion.div>

        <div className="mb-12 bg-dark-light/20 p-6 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Finastra's Universal Banking Forum</h2>
              <p className="text-gray-300 mt-1">June 15th, 2023 | 8:30 AM - 6:30 PM BST</p>
              <p className="text-gray-300">The Landmark London, 222 Marylebone Rd, London, UK</p>
            </div>
            <Link to="/register" className="btn-primary whitespace-nowrap">
              Register Now
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
              <span className="text-sm text-gray-300">Keynote</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm text-gray-300">Panel Discussion</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm text-gray-300">Workshop</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              <span className="text-sm text-gray-300">Case Study</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
              <span className="text-sm text-gray-300">Break</span>
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[7.5rem] top-0 bottom-0 w-px bg-gray-700 ml-4 md:ml-0"></div>
          
          {/* Agenda items */}
          <div className="space-y-8">
            {agendaItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Time */}
                  <div className="md:w-32 mb-2 md:mb-0 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary z-10 mr-4 md:hidden"></div>
                    <span className="text-primary font-medium">{item.time}</span>
                  </div>
                  
                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:block absolute left-[7.5rem] -ml-1.5 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary z-10"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:ml-12 pl-6 md:pl-0">
                    <div className={`bg-dark-light/30 p-5 rounded-lg border-l-4 ${getSessionTypeStyle(item.type)}`}>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                      {item.speaker && (
                        <p className="text-primary mt-3 font-medium">{item.speaker}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Speakers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Speakers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-dark-light/30 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300"
              >
                <div className="aspect-square bg-gray-800 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
                  <p className="text-primary mt-1">{speaker.title}</p>
                  <p className="text-gray-400 text-sm">{speaker.company}</p>
                  <p className="text-gray-300 mt-3 text-sm">{speaker.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Don't Miss This Opportunity
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure your place at this must-attend event and join banking professionals from across the region.
          </p>
          <Link to="/register" className="btn-primary text-lg px-8 py-4">
            Register Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AgendaPage;