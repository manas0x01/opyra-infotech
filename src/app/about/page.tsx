import StaticNavbar from '@/components/StaticNavbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <StaticNavbar />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-brown-50 to-brown-100 relative overflow-hidden">
        {/* Background decorative text - Mobile friendly */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black creative-text select-none whitespace-nowrap">ABOUT</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <span className="diagonal-text bg-brown-600 text-white px-6 py-2 text-lg font-bold creative-text">
                WHO WE ARE
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-brown-800 mb-8 creative-text leading-tight">
              <span className="block">ABOUT</span>
              <span className="curved-text italic text-brown-600">Opyra Infotech</span>
            </h1>
            
            <div className="relative max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 creative-text italic leading-relaxed mb-6">
                "We are a team of 
                <span className="hidden sm:inline vertical-text mx-2 text-brown-700 font-bold">40</span>
                <span className="sm:hidden text-brown-700 font-bold">40</span> 
                web experts with over 
                <span className="diagonal-text bg-brown-100 px-2 font-bold">12 years</span> 
                of experience in website building and marketing to help businesses grow online."
              </p>
              
              <p className="text-lg text-gray-600 creative-text leading-relaxed">
                If you are looking for the 
                <span className="curved-text font-bold text-brown-700">best website design</span>, 
                development, and marketing services to grow your business online, we are here to help. 
                We are a team of 
                <span className="diagonal-text bg-brown-600 text-white px-2 font-bold">certified experts</span> 
                with tremendous experience who'll walk with you all through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Creative background element - Mobile friendly */}
              <div className="absolute -top-4 -left-2 sm:-top-8 sm:-left-8 outline-text text-6xl sm:text-8xl md:text-9xl font-black opacity-10 pointer-events-none">
                OUR
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-brown-800 mb-8 creative-text">
                  <span className="diagonal-text bg-brown-100 px-4 py-1">Our Story</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed creative-text">
                    Founded with a vision to 
                    <span className="curved-text font-bold text-brown-700">empower businesses</span> 
                    in the digital world, Opyra Infotech has been at the forefront of web design and 
                    digital marketing innovation for over a decade.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed creative-text italic">
                    Our team combines creativity with technical expertise to deliver solutions that 
                    not only look great but also drive real business results for our clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="floating-element bg-brown-100 rounded-lg p-8 sm:p-12 text-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">🚀</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brown-800 creative-text">
                  <span className="outline-text">12+</span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 font-bold creative-text tracking-wider">
                  YEARS OF EXCELLENCE
                </p>
              </div>
              
              {/* Decorative elements - Mobile safe */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-brown-600 opacity-20 transform rotate-45"></div>
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-brown-300 opacity-30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brown-50 relative overflow-hidden">
        {/* Background pattern - Mobile safe */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 hidden sm:block vertical-text text-brown-200 text-xl font-bold opacity-20">
            VALUES • PRINCIPLES • COMMITMENT
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Core Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brown-800 mb-12 creative-text">
              <span className="diagonal-text bg-brown-100 px-6 py-2">Our Core Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="group text-center">
              <div className="floating-element bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-brown-600 transform rotate-45 translate-x-8 -translate-y-8 opacity-10"></div>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-black text-brown-700 mb-3 creative-text">
                  <span className="curved-text">Committed to Excellence</span>
                </h3>
                <p className="text-gray-600 creative-text italic">
                  Delivering the best results for every project
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="floating-element bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-brown-300 rounded-full transform -translate-x-8 -translate-y-8 opacity-20"></div>
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-lg font-black text-brown-700 mb-3 creative-text">
                  <span className="curved-text">Honest & Transparent</span>
                </h3>
                <p className="text-gray-600 creative-text italic">
                  Building trust through transparent services
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="floating-element bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-brown-500 transform -rotate-12 translate-x-6 translate-y-6 opacity-15"></div>
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-lg font-black text-brown-700 mb-3 creative-text">
                  <span className="curved-text">We Care</span>
                </h3>
                <p className="text-gray-600 creative-text italic">
                  Your business matters to us like our own
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="floating-element bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brown-400 transform rotate-45 translate-x-10 -translate-y-10 opacity-10"></div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-black text-brown-700 mb-3 creative-text">
                  <span className="curved-text">Always Learning</span>
                </h3>
                <p className="text-gray-600 creative-text italic">
                  Adapting to new technologies constantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorative text - Mobile friendly */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] font-black creative-text select-none whitespace-nowrap">REVIEWS</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="diagonal-text bg-brown-600 text-white px-6 py-2 text-lg font-bold creative-text">
                TESTIMONIALS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-brown-800 mb-8 creative-text leading-tight">
              <span className="block">What Our</span>
              <span className="curved-text italic text-brown-600">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-brown-100 text-6xl font-black">"</div>
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">⭐</div>
                  <span className="text-2xl font-black text-brown-700 creative-text">4.5/5</span>
                </div>
                <p className="text-gray-700 italic mb-6 creative-text leading-relaxed">
                  "Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, 
                  donec nec tempus iaculis pellente."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brown-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-black text-brown-800 creative-text">Pricilia Doe</h4>
                    <p className="text-brown-600 text-sm">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-brown-100 text-6xl font-black">"</div>
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">⭐</div>
                  <span className="text-2xl font-black text-brown-700 creative-text">4.5/5</span>
                </div>
                <p className="text-gray-700 italic mb-6 creative-text leading-relaxed">
                  "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. 
                  Dapibus id interdum fusce sed odio massa tellus nibh consequat."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brown-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-black text-brown-800 creative-text">Daniel Johnson</h4>
                    <p className="text-brown-600 text-sm">Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-brown-100 text-6xl font-black">"</div>
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">⭐</div>
                  <span className="text-2xl font-black text-brown-700 creative-text">4.5/5</span>
                </div>
                <p className="text-gray-700 italic mb-6 creative-text leading-relaxed">
                  "Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, 
                  donec nec tempus iaculis pellente. Aenean sollicitudin, lorem quis bibendum."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brown-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-black text-brown-800 creative-text">Mark Hoffman</h4>
                    <p className="text-brown-600 text-sm">CEO</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-brown-100 text-6xl font-black">"</div>
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">⭐</div>
                  <span className="text-2xl font-black text-brown-700 creative-text">4.5/5</span>
                </div>
                <p className="text-gray-700 italic mb-6 creative-text leading-relaxed">
                  "Exceptional service and results! Their team helped us achieve remarkable 
                  growth in our online presence and conversions."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brown-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-black text-brown-800 creative-text">Sarah Chen</h4>
                    <p className="text-brown-600 text-sm">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brown-100 to-brown-50 relative overflow-hidden">
        {/* Background decorative elements - Mobile safe */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 hidden lg:block vertical-text text-brown-200 text-xl font-bold opacity-20">
            PROJECT • GROWTH • SUCCESS
          </div>
          <div className="absolute bottom-1/4 left-1/4 outline-text text-4xl sm:text-6xl md:text-8xl font-black opacity-5">
            CTA
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="diagonal-text bg-brown-600 text-white px-6 py-2 text-lg font-bold creative-text">
                  LET'S WORK TOGETHER
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-brown-800 mb-8 creative-text leading-tight">
                <span className="block">Have a</span>
                <span className="curved-text italic text-brown-600">Project in Mind?</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 creative-text italic leading-relaxed">
                We can help you bring your 
                <span className="diagonal-text bg-brown-100 px-2 font-bold">ideas to life</span>. 
                Let's talk about what we can build and raise together.
              </p>
              
              <p className="text-lg text-gray-600 mb-10 creative-text">
                When connected with us, you aren't growing your business alone. We have your back 
                and put in our best to contribute to the growth of your entire team and organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative overflow-hidden bg-brown-700 text-white px-10 py-4 text-xl font-bold creative-text transform -rotate-1 hover:rotate-0 transition-all duration-300 shadow-2xl">
                  <span className="relative z-10">SCHEDULE A CALL</span>
                  <div className="absolute inset-0 bg-brown-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brown-600 to-brown-800 rounded-lg blur opacity-25"></div>
                  <button className="relative bg-transparent border-2 border-brown-700 text-brown-700 px-10 py-4 text-xl font-bold creative-text transform rotate-1 hover:rotate-0 transition-all duration-300 hover:bg-brown-700 hover:text-white">
                    VIEW PORTFOLIO
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="floating-element">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🚀</div>
                    <h3 className="text-xl sm:text-2xl font-black text-brown-800 creative-text">
                      <span className="curved-text">Let's Build Something Great</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-brown-600 mr-2">✓</span>
                      <span className="creative-text font-bold text-sm sm:text-base">Free Consultation</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-brown-600 mr-2">✓</span>
                      <span className="creative-text font-bold text-sm sm:text-base">Custom Solutions</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-brown-600 mr-2">✓</span>
                      <span className="creative-text font-bold text-sm sm:text-base">Proven Results</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements - Mobile safe */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-brown-600 opacity-10 transform rotate-45"></div>
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-brown-300 opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}