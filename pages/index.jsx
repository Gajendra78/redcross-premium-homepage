import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-redcross-dark via-redcross to-red-700 text-gray-900 font-sans">
      <header className="bg-white/95 shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src="/images/logo-left.png" alt="RedCross" className="h-14 w-14 object-contain" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-redcross">Indian Red Cross Society</h1>
                <p className="text-sm text-gray-500">Uttarakhand State Branch</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#home" className="hover:text-redcross-light transition">Home</a>
              <a href="#about" className="hover:text-redcross-light transition">About</a>
              <a href="#programs" className="hover:text-redcross-light transition">Programs</a>
              <a href="#gallery" className="hover:text-redcross-light transition">Gallery</a>
              <a href="#notifications" className="hover:text-redcross-light transition">Notifications</a>
              <a href="#contact" className="bg-gradient-to-r from-red-600 to-redcross-dark text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Through Humanity to Peace</h2>
            <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">Preventing and alleviating human suffering with impartiality — improving lives of vulnerable people across Uttarakhand.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#programs" className="px-6 py-3 bg-white text-redcross font-semibold rounded-lg shadow hover:shadow-lg transition">Our Programs</a>
              <a href="#contact" className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
            <section id="about">
              <h3 className="text-2xl font-bold text-redcross">Introduction</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">The Indian Red Cross Society Uttarakhand State Branch is committed to prevent and alleviate suffering without discrimination — working across communities to build resilience, deliver humanitarian services, and promote health & safety education.</p>
            </section>
            <section id="programs" className="mt-10">
              <h4 className="text-xl font-semibold text-redcross">Key Programs</h4>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <ProgramCard title="Disaster Relief" desc="Emergency response & relief" icon="/images/icon-disaster.svg" />
                <ProgramCard title="Health Camps" desc="Community health & immunisation" icon="/images/icon-health.svg" />
                <ProgramCard title="Youth Red Cross" desc="Youth engagement & training" icon="/images/icon-youth.svg" />
              </div>
            </section>
            <section id="notifications" className="mt-10">
              <h4 className="text-xl font-semibold text-redcross">Recent Notifications</h4>
              <ul className="mt-4 space-y-3">
                <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">Notification title 1 — <span className="text-xs text-gray-500">10 Sep 2025</span></li>
                <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">Notification title 2 — <span className="text-xs text-gray-500">01 Sep 2025</span></li>
              </ul>
            </section>
          </div>
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h5 className="font-semibold text-redcross">Quick Actions</h5>
              <div className="mt-4 space-y-3">
                <a href="#" className="block text-center px-4 py-2 border rounded-lg hover:bg-redcross hover:text-white transition">Register Youth Red Cross</a>
                <a href="#" className="block text-center px-4 py-2 border rounded-lg hover:bg-redcross hover:text-white transition">Verify Training Certificate</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h5 className="font-semibold text-redcross">Leadership</h5>
              <div className="mt-4 space-y-4">
                <PersonCard name="Lt. Gen. Gurmit Singh" role="President" img="/images/leader1.jpg" />
                <PersonCard name="Dr. Naresh Chaudhari" role="Chairman" img="/images/leader2.jpg" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h5 className="font-semibold text-redcross">Helpline</h5>
              <p className="mt-2 text-sm">Call: <a href="tel:+919411188121" className="text-redcross font-semibold">+91 94111 88121</a></p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function ProgramCard({ title, desc, icon }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg text-center shadow hover:shadow-lg transition">
      <img src={icon} alt="icon" className="h-12 mx-auto" />
      <h5 className="mt-4 font-bold text-redcross">{title}</h5>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  )
}

function PersonCard({ name, role, img }) {
  return (
    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="h-14 w-14 rounded-full object-cover shadow" />
      <div>
        <div className="text-sm font-bold text-gray-800">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
    </div>
  )
}