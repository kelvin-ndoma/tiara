import { FiSearch, FiTarget, FiLayers, FiPlay, FiTrendingUp, FiBookOpen } from 'react-icons/fi'

const ProcessSteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Alignment',
      description: 'We begin by understanding your goals, challenges, and vision to ensure perfect alignment.',
      icon: <FiBookOpen className="w-6 h-6" />,
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Developing clear, actionable strategies that align with your business objectives.',
      icon: <FiTarget className="w-6 h-6" />,
    },
    {
      number: '03',
      title: 'Development & Design',
      description: 'Translating strategy into creative concepts and detailed execution plans.',
      icon: <FiLayers className="w-6 h-6" />,
    },
    {
      number: '04',
      title: 'Execution & Support',
      description: 'Hands-on implementation with attention to detail and continuous support.',
      icon: <FiPlay className="w-6 h-6" />,
    },
    {
      number: '05',
      title: 'Evaluation & Evolution',
      description: 'Measuring success and refining strategies for continuous improvement.',
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our collaborative, strategic, and intentional approach ensures every engagement delivers maximum impact.
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-tertiary to-accent transform -translate-x-1/2" />
        
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-tertiary rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
                  <div className="text-white font-bold">{step.number}</div>
                </div>
                
                {/* Step content */}
                <div className="px-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <div className="text-secondary">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessSteps