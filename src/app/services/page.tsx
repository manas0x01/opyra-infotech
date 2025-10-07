import StaticNavbar from '@/components/StaticNavbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: "Creative Design",
      description: "Our team of professional graphic and web designers will help you with unique and creative logo and website designs that will match your business.",
      features: [
        "Custom Logo Design",
        "Brand Identity Creation", 
        "Website UI/UX Design",
        "Print Design Materials",
        "Digital Graphics",
        "Responsive Web Design"
      ],
      icon: "🎨",
      color: "from-brown-500 to-brown-700"
    },
    {
      title: "Research & Development",
      description: "We help you develop the right website with a good user interface built after a lot of research in the industry to help you make the best out of it.",
      features: [
        "Market Research Analysis",
        "User Experience Research",
        "Competitor Analysis",
        "Technology Assessment",
        "Performance Optimization",
        "Industry Best Practices"
      ],
      icon: "�",
      color: "from-brown-600 to-brown-800"
    },
    {
      title: "Branding & Marketing",
      description: "Need help with branding and marketing to reach out to a larger audience? We can help you create a brand presence and marketing efforts.",
      features: [
        "Brand Strategy Development",
        "Social Media Marketing",
        "Content Marketing",
        "SEO Optimization",
        "Email Marketing Campaigns",
        "Digital Advertising"
      ],
      icon: "📈",
      color: "from-brown-700 to-brown-900"
    }
  ]

  const additionalServices = [
    {
      title: "Web Development",
      description: "Full-stack development solutions with modern technologies and frameworks.",
      icon: "💻"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management.",
      icon: "🛒"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies for business growth.",
      icon: "🎯"
    }
  ]

  const clients = [
    { name: "TechCorp Solutions", logo: "🏢" },
    { name: "Creative Industries", logo: "🎭" },
    { name: "Global Ventures", logo: "�" },
    { name: "Innovation Labs", logo: "⚡" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <StaticNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brown-50 via-brown-100 to-brown-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/5 to-brown-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-brown-900 mb-4 tracking-tight">
              Services
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-brown-700 mb-6">
              How can we help you?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions designed to elevate your business and create lasting impact in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-xl border border-brown-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="text-6xl mb-6 text-center">{service.icon}</div>
                    <h3 className="text-2xl font-black text-brown-900 mb-4 text-center tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-center">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-brown-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-brown-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-brown-800 transition-colors duration-300 transform hover:scale-105">
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brown-900 mb-4 tracking-tight">
              Additional Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expanding our capabilities to serve all your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-brown-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-brown-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brown-900 mb-4 tracking-tight">
              Clients We Worked With
            </h2>
            <p className="text-xl text-gray-700">
              Trusted by industry leaders and growing businesses
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="group">
                <div className="bg-brown-50 p-8 rounded-xl text-center hover:bg-brown-100 transition-all duration-300 border border-brown-200">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <h3 className="font-bold text-brown-800 text-sm">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brown-700 to-brown-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Have a Project on mind?
              </h2>
              <p className="text-xl text-brown-100 mb-8 leading-relaxed">
                We can help you bring your ideas to life. Let's talk about what we can build and raise together.
              </p>
              <button className="bg-white text-brown-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brown-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule a Call
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="CTA Image" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brown-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brown-900 mb-6 tracking-tight">
            Let us together build a flourishing business
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            When connected with us, you aren't growing your business alone. We have your back and put in our best 
            to contribute to the growth of your entire team and organization. So, if you are looking for the right agency 
            that'll help you build a good online presence and bring in more conversions and revenue, we are right here!
          </p>
          <button className="bg-brown-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brown-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}