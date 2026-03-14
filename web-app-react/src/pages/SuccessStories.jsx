import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function SuccessStories() {
  const stories = [
    { category: 'Sustainable Fashion', color: 'green', title: 'Scaling Eco-Friendly Production by 300%', desc: '"DonauAI matched us with a certified manufacturer in Portugal who shared our values. We launched our new collection 2 months ahead of schedule."', name: 'Sarah Jenkins', role: 'Founder, EcoWear', img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000' },
    { category: 'Electronics', color: 'purple', title: 'Prototyping Complex IOT Devices', desc: '"The AI Brief Assistant helped us specify our complex PCB requirements. We got perfect prototypes in the first run, saving us thousands."', name: 'David Chen', role: 'CTO, SmartThings', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' }
  ]
  
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 border-b border-gray-800 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-400 font-bold tracking-wide uppercase text-xs mb-4">Customer Stories</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">See What&rsquo;s Possible</h1>
            <p className="text-slate-400 text-lg">Real brands, real results. Discover how companies are scaling their production with DonauAI.</p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {stories.map((story, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gray-200">
                    <div className="h-full min-h-[200px] w-full bg-cover bg-center" style={{ backgroundImage: `url('${story.img}')` }}></div>
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 bg-${story.color}-100 text-${story.color}-700 text-[10px] font-bold uppercase rounded`}>{story.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{story.title}</h3>
                    <p className="text-slate-500 mb-6 text-sm leading-relaxed">{story.desc}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-100 rounded-full"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{story.name}</p>
                        <p className="text-xs text-slate-500">{story.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <InfoFooter />
    </div>
  )
}
