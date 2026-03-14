import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'

const categories = [
  { name: 'Cosmetics', sub: 'Skincare, Makeup, Perfume', bg: 'bg-pink-100', text: 'text-pink-500', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Fashion', sub: 'Apparel, Accessories, Footwear', bg: 'bg-orange-100', text: 'text-orange-500', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { name: 'Electronics', sub: 'Consumer Tech, Components', bg: 'bg-blue-100', text: 'text-blue-500', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Home & Living', sub: 'Furniture, Decor, Kitchen', bg: 'bg-green-100', text: 'text-green-500', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Chemicals', sub: 'Industrial, Cleaning', bg: 'bg-purple-100', text: 'text-purple-500', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { name: 'Packaging', sub: 'Boxes, Bottles, Labels', bg: 'bg-yellow-100', text: 'text-yellow-600', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
]

export default function ProductCategories() {
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />

      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="bg-white py-16 border-b border-gray-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Production Capabilities</h1>
            <p className="text-slate-500 text-lg">From niche artisan goods to mass-market electronics, find the right partner for your category.</p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <a key={i} href="#" className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                  <div className={`h-40 ${cat.bg} flex items-center justify-center ${cat.text}`}>
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cat.icon}></path></svg>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                    <p className="text-xs text-slate-500">{cat.sub}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-slate-500 mb-4">Don't see your category?</p>
              <a href="#" className="text-blue-600 font-bold hover:underline">Contact sales to request a new category</a>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
