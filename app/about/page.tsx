import Image from 'next/image'
import Link from 'next/link'
import { FiTarget, FiEye, FiCheckCircle, FiUsers, FiArrowRight, FiChevronRight, FiStar, FiHeart, FiGlobe, FiZap, FiTrendingUp } from 'react-icons/fi'

export default function AboutPage() {
  const brandOverview = {
    name: "Pulse Strategy Group (PULSE)",
    description: "Pulse Strategy Group (PULSE) is a brand strategy, partnerships, and experience design firm that helps companies translate vision into influence and impact. We work at the intersection of culture, commerce, and connection.",
    services: "Helping brands clarify their message, build meaningful partnerships, and design experiences that leave lasting impact.",
    audience: "We support founders, brands, organizations, and cultural leaders who want to grow with intention, create relevance, and execute at a higher level."
  }

  const missionVisionGoals = {
    mission: "To help brands turn intention into impact by aligning strategy, partnerships, and experiences that connect meaningfully with people and cultures.",
    vision: "To be a trusted strategic partner for our clients shaping culture — known for clarity, creativity, and execution that moves audiences and builds long-term value.",
    goals: [
      'Help brands articulate clear positioning and strategic direction that amplifies their call to action and drives engagement',
      'Create partnership ecosystems that generate revenue and alignment',
      'Design and execute elevated brand experiences from concept to completion',
      'Serve as a long-term strategic partner, not just a service provider',
      'Build a reputation for thoughtful, culture-forward work across industries'
    ]
  }

  const founder = {
    name: "Tiara Womack",
    title: "Founder & Principal Strategist",
    bio: [
      "Tiara Womack is a brand strategist, partnerships consultant, and experience architect blending marketing, PR, and large-scale event production. Her work translates ideas into fully realized, impactful experiences by sitting at the intersection of strategy, storytelling, and execution.",
      "With a rare ability to manage both the big picture and the details, Tiara leads end-to-end projects across brand strategy, partnerships, and live experiences, blending structure, intuition, creativity, and discipline.",
      "She founded Pulse Strategy Group to help brands achieve clarity, alignment, and cultural relevance beyond simple visibility. Through strategic thinking and hands-on execution, she builds intentional, elevated, and impactful partnerships, campaigns, and experiences for clients.",
      "A Georgia Southern University graduate (Public Relations) with a master's from Georgia State University (Marketing, focused on CRM), Tiara has a 10-year proven track record overseeing multi-million-dollar projects and high-profile events. She excels at leading high-performing teams, streamlining operations, and achieving measurable outcomes in fast-paced environments, using cultivated partnerships to drive efficiency, enhance productivity, and deliver exceptional value with a passion for connecting people."
    ],
    expertise: [
      "Brand Strategy & Positioning",
      "Partnership Architecture",
      "Experience Design & Production",
      "Strategic Planning & Execution",
      "Team Leadership & Development"
    ]
  }

  const business = {
    whoWeAre: [
      "Pulse Strategy Group is a strategic advisory and execution partner for brands looking to grow through clarity, collaboration, and experience-driven storytelling.",
      "We operate as an extension of our clients' teams, offering strategic insight, creative direction, and operational support across brand strategy, partnerships, and experiential execution.",
      "Our work bridges vision and logistics, ensuring that ideas don't just sound good — they actually work."
    ],
    beliefs: [
      { 
        title: "Strategy should be", 
        description: "clear, actionable, and human",
        icon: <FiTarget className="w-6 h-6" />
      },
      { 
        title: "Partnerships should feel", 
        description: "aligned, not transactional",
        icon: <FiUsers className="w-6 h-6" />
      },
      { 
        title: "Experiences should", 
        description: "tell a story and serve a purpose",
        icon: <FiGlobe className="w-6 h-6" />
      },
      { 
        title: "Good design supports", 
        description: "function, emotion, and flow",
        icon: <FiZap className="w-6 h-6" />
      }
    ]
  }

  const values = [
    {
      title: 'Clarity over chaos',
      description: 'Clear, actionable strategies that provide direction and focus.',
      icon: '✨'
    },
    {
      title: 'Strategy before execution',
      description: 'Thoughtful strategic planning precedes every great execution.',
      icon: '🎯'
    },
    {
      title: 'Relationships over transactions',
      description: 'Building lasting partnerships based on mutual value and trust.',
      icon: '🤝'
    },
    {
      title: 'Culture as a growth driver',
      description: 'Understanding cultural trends is key to creating relevant, impactful work.',
      icon: '🌱'
    },
    {
      title: 'Intention in every detail',
      description: 'From big picture strategy to execution details, everything is deliberate.',
      icon: '⚡'
    }
  ]

  const stats = [
    { label: "Projects Delivered", value: "100+" },
    { label: "Partnership Value Generated", value: "$10M+" },
    { label: "Brands Transformed", value: "50+" },
    { label: "Years Experience", value: "10+" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
            alt="Strategy planning and creative thinking"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-primary/80 to-dark/90" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/30 to-transparent rounded-full -translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-white text-sm font-medium">About Pulse Strategy Group</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Where Vision Meets <span className="gradient-text">Impact</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              We're a brand strategy, partnerships, and experience design firm that helps companies translate vision into influence and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-secondary">Brand Overview</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{brandOverview.name}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {brandOverview.description}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-700 font-medium mb-3">
                      {brandOverview.services}
                    </p>
                    <p className="text-gray-600">
                      {brandOverview.audience}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration at Pulse Strategy Group"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-light to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Guiding Principles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The foundation of everything we do is built on clear purpose, strategic vision, and measurable goals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Mission Card */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-secondary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-tertiary rounded-xl flex items-center justify-center mb-6">
                  <FiTarget className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  {missionVisionGoals.mission}
                </p>
              </div>
              
              {/* Vision Card */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-tertiary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-tertiary to-accent rounded-xl flex items-center justify-center mb-6">
                  <FiEye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  {missionVisionGoals.vision}
                </p>
              </div>
              
              {/* Goals Card */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-6">
                  <FiTrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Goals</h3>
                <ul className="space-y-4">
                  {missionVisionGoals.goals.map((goal, index) => (
                    <li key={index} className="flex items-start group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-50 to-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-secondary" />
                      </div>
                      <span className="text-gray-600 group-hover/item:text-primary transition-colors">
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Stats */}
            <div className="bg-gradient-to-r from-primary to-dark text-white rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The visionary behind Pulse Strategy Group — combining strategic insight with creative execution.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{founder.name}</h3>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-full mb-6">
                      <span className="text-sm font-semibold text-primary">{founder.title}</span>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none space-y-6">
                    {founder.bio.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Expertise */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold mb-6 text-primary">Areas of Expertise</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {founder.expertise.map((skill, index) => (
                        <div key={index} className="flex items-center group">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FiCheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Founder Sidebar */}
              <div className="space-y-8">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg mb-8">
                    <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400"
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-xl mb-2">{founder.name}</h4>
                      <p className="text-gray-600 mb-6">{founder.title}</p>
                      
                      <div className="space-y-3">
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-full">
                          <FiStar className="w-4 h-4 text-secondary mr-2" />
                          <span className="text-sm font-medium text-primary">Brand Strategy</span>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-tertiary/10 to-accent/10 rounded-full">
                          <FiUsers className="w-4 h-4 text-tertiary mr-2" />
                          <span className="text-sm font-medium text-primary">Partnerships</span>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full">
                          <FiGlobe className="w-4 h-4 text-accent mr-2" />
                          <span className="text-sm font-medium text-primary">Experience Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="group block w-full bg-gradient-to-r from-secondary to-tertiary text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    <span>Work With Tiara</span>
                    <FiArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Business */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-light to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">About Our Business</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How we work and what drives our approach to creating impact.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Who We Are</h3>
                {business.whoWeAre.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="relative">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration and strategy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl -z-10"></div>
              </div>
            </div>
            
            {/* What We Believe */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">What We Believe</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Core principles that guide our approach to strategy, partnerships, and experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {business.beliefs.map((belief, index) => (
                  <div 
                    key={index} 
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-secondary">
                        {belief.icon}
                      </div>
                    </div>
                    <h4 className="font-bold mb-2 text-gray-900">{belief.title}</h4>
                    <p className="text-gray-600">{belief.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that shape every decision, partnership, and outcome at Pulse Strategy Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-secondary hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}