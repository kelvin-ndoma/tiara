import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  href: string
  icon?: React.ReactNode
  cta?: string
}

const ServiceCard = ({ title, description, features, href, icon, cta = 'Learn more' }: ServiceCardProps) => {
  // Assign different gradient based on service type
  const getGradient = (title: string) => {
    if (title.includes('Brand')) return 'from-secondary to-tertiary'
    if (title.includes('Partnership')) return 'from-tertiary to-accent'
    return 'from-accent to-secondary'
  }

  const gradient = getGradient(title)

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 hover:border-secondary/30 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-6">
        {icon && (
          <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start group/feature">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${gradient}`} />
            </div>
            <span className="text-gray-700 group-hover/feature:text-primary transition-colors">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        href={href}
        className="inline-flex items-center font-medium transition-colors"
      >
        <span className={`text-gradient bg-gradient-to-r ${gradient}`}>
          {cta || `Learn more about ${title}`}
        </span>
        <FiArrowRight className={`ml-2 w-5 h-5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform`} />
      </Link>
    </div>
  )
}

export default ServiceCard