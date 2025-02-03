import React from 'react';
import { 
  Flask,
  Microscope,
  Dna,
  Brain,
  ChartBar,
  Users,
  Building2,
  ArrowRight
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
            alt="Laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Advancing Drug Discovery Through Innovation
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Leveraging cutting-edge technology and expertise to develop 
              life-changing therapeutics for tomorrow's healthcare challenges.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg 
              font-semibold flex items-center gap-2 transition-colors">
              Explore Our Platform
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Our Drug Discovery Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Flask className="w-8 h-8 text-blue-500" />,
                title: "Target Identification",
                description: "Identifying and validating molecular targets for therapeutic intervention"
              },
              {
                icon: <Microscope className="w-8 h-8 text-blue-500" />,
                title: "Lead Discovery",
                description: "Screening compound libraries to identify promising drug candidates"
              },
              {
                icon: <Dna className="w-8 h-8 text-blue-500" />,
                title: "Optimization",
                description: "Refining molecular structures for optimal therapeutic properties"
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-500" />,
                title: "AI-Powered Analysis",
                description: "Using machine learning to accelerate discovery and development"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBar className="w-8 h-8 text-blue-300" />,
                number: "1M+",
                label: "Compounds Screened"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-300" />,
                number: "200+",
                label: "Research Scientists"
              },
              {
                icon: <Building2 className="w-8 h-8 text-blue-300" />,
                number: "50+",
                label: "Global Partners"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-gray-600 mb-8">
              Join us in our mission to develop innovative therapeutic solutions. 
              Whether you're a research institution, pharmaceutical company, or potential collaborator, 
              we'd love to explore opportunities together.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg 
              font-semibold inline-flex items-center gap-2 transition-colors">
              Get in Touch
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Leading the way in innovative drug discovery and development through 
                advanced technology and expertise.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>info@drugdiscovery.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Science Park Drive</li>
                <li>Cambridge, MA 02142</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 Drug Discovery Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;