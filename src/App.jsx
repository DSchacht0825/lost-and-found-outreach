import { useState } from 'react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#board', label: 'Board' },
    { href: '#youth', label: 'Youth' },
    { href: '#homelessness', label: 'Outreach' },
    { href: '#recovery', label: 'Recovery' },
    { href: '#support', label: 'Support Us' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900 backdrop-blur-sm border-b border-gold-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#" className="flex items-center">
            <img src="/logoheader.jpg" alt="Lost & Found Outreach" className="h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal-200 hover:text-gold-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-200 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-charcoal-700">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-charcoal-200 hover:text-gold-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal-950 pt-16 overflow-hidden">
      {/* Background Logo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/logo.jpg)' }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal-950/75"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-transparent to-charcoal-950"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Text Content with semi-transparent background */}
        <div className="bg-charcoal-950/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gold-600/20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gold-500">LOST</span>
            <span className="text-charcoal-300 mx-2">&</span>
            <span className="text-gold-400">FOUND</span>
          </h1>
          <p className="text-xl sm:text-2xl text-charcoal-200 font-bold tracking-widest mb-6">
            OUTREACH, INC.
          </p>

          <p className="text-gold-500 text-lg sm:text-xl font-semibold mb-4 tracking-wide">
            FROM LOST TO LEADER | FROM THE STREETS TO SERVICE
          </p>

          <p className="text-charcoal-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Restoring hope, building community, and providing support for youth, individuals experiencing homelessness,
            and people struggling with addiction or life challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#support"
              className="bg-gold-600 hover:bg-gold-500 text-charcoal-900 font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Support Our Mission
            </a>
            <a
              href="#about"
              className="border-2 border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-charcoal-900 font-bold px-8 py-3 rounded-lg transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

function About() {
  const focusAreas = [
    'Youth mentorship and leadership development',
    'Homeless outreach and resource navigation',
    'Addiction recovery support and meetings',
    'Community awareness and outreach events',
    'Life skills and vocational guidance',
    'Partnerships with local organizations and programs',
    'Building safer and healthier communities',
  ]

  return (
    <section id="about" className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-charcoal-200 text-lg leading-relaxed">
              Lost & Found Outreach, Inc. exists to restore hope, build community, and provide support for youth,
              individuals experiencing homelessness, and people struggling with addiction or life challenges.
            </p>
            <p className="text-charcoal-300 leading-relaxed">
              Our mission is to meet people where they are through outreach, mentorship, recovery support,
              resource events, and community programs that create opportunities for transformation and stability.
            </p>
            <p className="text-charcoal-300 leading-relaxed">
              We believe outreach is more than handing out resources — it is building relationships, trust,
              and pathways toward change. Through mentorship, life skills, recovery meetings, vocational guidance,
              community events, and partnerships with local organizations, we strive to help individuals move
              from survival to purpose.
            </p>
            <p className="text-charcoal-300 leading-relaxed">
              Our goal is to create safe environments where youth can grow, families can heal, and individuals
              can connect to housing resources, recovery programs, education, employment opportunities, and
              healthy community support.
            </p>
            <p className="text-gold-400 font-semibold text-lg italic">
              "Every person has value, every story matters, and every community becomes stronger when people
              are given support, direction, and the opportunity to rebuild their lives."
            </p>
          </div>

          <div className="bg-charcoal-800 rounded-2xl p-8 border border-gold-600/30">
            <h3 className="text-2xl font-bold text-gold-500 mb-6">Core Focus Areas</h3>
            <ul className="space-y-4">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-charcoal-200">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-charcoal-700">
              <h4 className="text-xl font-bold text-gold-400 mb-3">Our Vision</h4>
              <p className="text-charcoal-300">
                To build communities where youth are empowered, individuals experiencing homelessness are supported,
                recovery is possible, and every person has access to hope, resources, and opportunities for a better future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BoardMembers() {
  const members = [
    { name: 'Mario Moreno', title: 'President', image: '/mario.PNG' },
    { name: 'James Thomson', title: 'Vice President', image: '/jamesthomson.jpeg' },
    { name: 'Edward Gonzales', title: 'Secretary', image: '/Edwardgonzales.PNG' },
    { name: 'Robert Vasquez', title: 'Director of Housing', image: '/robertvasquez.PNG' },
    { name: 'Aurora Ramirez', title: 'Treasurer', image: '/auroraramirez.PNG' },
    { name: 'Aaron Zuniga', title: 'Director of Prison Outreach', image: '/aaronziniga.PNG' },
    { name: 'Fernando Sosa', title: 'Director of Outreach', image: '/fernandososa.PNG' },
  ]

  return (
    <section id="board" className="py-20 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Our Board Members</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="text-charcoal-300 max-w-3xl mx-auto text-lg">
            Meet the dedicated leaders guiding Lost & Found Outreach, Inc. in our mission to serve the community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-charcoal-900 rounded-2xl overflow-hidden border border-charcoal-700 hover:border-gold-600/50 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gold-400 mb-1">{member.name}</h3>
                <p className="text-charcoal-300">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Youth() {
  const programs = [
    { icon: '🔧', title: 'Welding', desc: 'Learn welding and fabrication skills' },
    { icon: '🚗', title: 'Auto Body & Paint', desc: 'Custom paint and body work' },
    { icon: '🎨', title: 'Lowrider Restoration', desc: 'Classic car restoration and fabrication' },
    { icon: '🖌️', title: 'Mural Art', desc: 'Graffiti-style mural and legal street art' },
    { icon: '🎙️', title: 'Podcasting', desc: 'Media production and podcasting' },
    { icon: '🎧', title: 'DJ & Music', desc: 'DJ and music production classes' },
    { icon: '☕', title: 'Coffee Shop Training', desc: 'Customer service and barista skills' },
    { icon: '💼', title: 'Entrepreneurship', desc: 'Business and clothing brand development' },
  ]

  const nightPrograms = [
    'Drug awareness',
    'Gang awareness',
    'Relapse prevention',
    'Coping skills',
    'Mental health awareness',
    'Peer pressure',
    'Goal setting',
    'Community responsibility',
  ]

  return (
    <section id="youth" className="py-20 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Youth Mentorship Program</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="text-charcoal-300 max-w-3xl mx-auto text-lg">
            A community-based mentorship and outreach program designed to guide youth, teens, and young adults
            toward purpose, leadership, recovery, and opportunity.
          </p>
        </div>

        <div className="bg-charcoal-900 rounded-2xl p-8 mb-12 border border-gold-600/20">
          <p className="text-charcoal-200 text-lg leading-relaxed mb-6">
            Our mission is to educate, mentor, and equip the next generation with life skills, vocational training,
            recovery support, and positive community involvement to help prevent addiction, gang involvement,
            violence, homelessness, and hopelessness.
          </p>
          <p className="text-charcoal-300 leading-relaxed">
            The program focuses on both young men and young women by teaching principles, respect, accountability,
            leadership, safety awareness, healthy relationships, and decision-making skills. We aim to create a
            safe environment where youth can grow mentally, emotionally, socially, and professionally while being
            surrounded by mentors and positive role models.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gold-400 mb-8 text-center">Vocational Training Programs</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-charcoal-800 rounded-xl p-6 border border-charcoal-700 hover:border-gold-600/50 transition-all hover:transform hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{program.icon}</span>
              <h4 className="text-gold-400 font-bold text-lg mb-2">{program.title}</h4>
              <p className="text-charcoal-400 text-sm">{program.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-charcoal-900 rounded-2xl p-8 border border-gold-600/20">
            <h3 className="text-2xl font-bold text-gold-500 mb-6">Project-Based Learning</h3>
            <p className="text-charcoal-300 leading-relaxed mb-4">
              One of the major goals of the program is to involve youth in project-based learning by rebuilding
              and restoring project cars and lowriders. Students will learn teamwork, mechanics, fabrication,
              painting, detailing, and business skills while helping transform donated vehicles into community projects.
            </p>
            <p className="text-charcoal-400 text-sm">
              These vehicles may later be sold to help fund future mentorship projects and provide more
              opportunities for youth involvement.
            </p>
          </div>

          <div className="bg-charcoal-900 rounded-2xl p-8 border border-gold-600/20">
            <h3 className="text-2xl font-bold text-gold-500 mb-6">Evening Recovery Programs</h3>
            <p className="text-charcoal-300 mb-6">
              At night, the program transitions into a recovery-focused environment with support groups,
              recovery mentorship, life coaching, and educational discussions:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {nightPrograms.map((program, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span className="text-charcoal-300 text-sm">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gold-400 text-xl font-semibold italic max-w-4xl mx-auto">
            "Outreach is more than just speaking to people — it is creating opportunities, building trust,
            restoring purpose, and helping young people discover their value before the streets define it for them."
          </p>
        </div>
      </div>
    </section>
  )
}

function Homelessness() {
  const resources = [
    'Emergency shelters',
    'Drug and alcohol recovery programs',
    'Transitional housing',
    'Permanent housing resources',
    'Food and hygiene support',
    'Case management and referrals',
    'Employment and vocational opportunities',
  ]

  const events = [
    'Resource fairs',
    'Community outreach events',
    'Food distributions',
    'Clothing giveaways',
    'Recovery awareness events',
    'Youth and family support events',
    'Community car shows and fundraisers',
    'Educational workshops and mentorship programs',
  ]

  return (
    <section id="homelessness" className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Homelessness Outreach</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="text-charcoal-300 max-w-3xl mx-auto text-lg">
            Stepping into communities and helping individuals and families struggling with homelessness,
            addiction, and life instability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gold-400 mb-6">Resource Navigation</h3>
            <p className="text-charcoal-300 mb-6 leading-relaxed">
              Through direct outreach, community engagement, and strong partnerships, our mission is to
              connect people to real solutions, resources, and opportunities for restoration. We work
              closely with individuals experiencing homelessness by helping connect them to:
            </p>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0"></span>
                  <span className="text-charcoal-200">{resource}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal-400 mt-6 text-sm">
              Our outreach team specializes in housing navigation, outreach support, shelter connections,
              and helping individuals navigate available programs and resources.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gold-400 mb-6">Community Events</h3>
            <p className="text-charcoal-300 mb-6 leading-relaxed">
              Beyond street outreach, Lost & Found Outreach, Inc. organizes large community events that
              support unhoused individuals and struggling families throughout different communities:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-charcoal-800 rounded-lg px-4 py-3 border border-charcoal-700 flex items-center gap-3"
                >
                  <span className="text-gold-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </span>
                  <span className="text-charcoal-200">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-charcoal-800 rounded-2xl p-8 border border-gold-600/30 text-center">
          <p className="text-charcoal-200 text-lg mb-4">
            We believe collaboration creates greater impact, which is why we love partnering with other
            nonprofit organizations, churches, businesses, recovery programs, schools, and community leaders
            who share the same passion for helping people and strengthening communities.
          </p>
          <p className="text-gold-400 font-semibold text-xl">
            "Outreach is about building relationships, restoring dignity, and creating pathways for people
            to move from survival to purpose."
          </p>
        </div>
      </div>
    </section>
  )
}

function Recovery() {
  const programs = [
    '12-Step Programs',
    'Narcotics Anonymous (NA)',
    'Alcoholics Anonymous (AA)',
    'Gambling Anonymous',
    'Recovery meetings and mentorship',
    'Sober living environments',
    'Drug and alcohol treatment programs',
    'Relapse prevention support',
    'Peer support and accountability',
  ]

  const awareness = [
    'Drug addiction',
    'Fentanyl awareness',
    'Alcohol abuse',
    'Gambling addiction',
    'Gang involvement',
    'Mental health challenges',
    'Trauma and recovery',
    'Community violence and prevention',
  ]

  return (
    <section id="recovery" className="py-20 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Recovery Support</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="text-charcoal-300 max-w-3xl mx-auto text-lg">
            Helping individuals struggling with addiction, trauma, mental health challenges, and life struggles
            through recovery support, mentorship, and community outreach.
          </p>
        </div>

        <div className="bg-charcoal-900 rounded-2xl p-8 mb-12 border border-gold-600/20">
          <p className="text-charcoal-200 text-lg leading-relaxed">
            We understand that recovery looks different for every person, and our mission is to help individuals
            find hope, healing, stability, and long-term support on their journey. Whether someone is beginning
            recovery for the first time or trying again after setbacks, we are committed to walking alongside
            them and supporting them through the process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-charcoal-800 rounded-2xl p-8 border border-charcoal-700">
            <h3 className="text-2xl font-bold text-gold-400 mb-6">Recovery Resources</h3>
            <p className="text-charcoal-300 mb-6">
              We support and help individuals connect with recovery resources such as:
            </p>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-gold-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-charcoal-200">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-charcoal-800 rounded-2xl p-8 border border-charcoal-700">
            <h3 className="text-2xl font-bold text-gold-400 mb-6">Education & Awareness</h3>
            <p className="text-charcoal-300 mb-6">
              We host and participate in community events focused on education, prevention, and recovery
              awareness covering:
            </p>
            <ul className="space-y-3">
              {awareness.map((topic, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-gold-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-charcoal-200">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gold-400 text-xl font-semibold italic max-w-4xl mx-auto">
            "Our goal is not only to help people get sober, but to help them rediscover purpose, rebuild their lives,
            restore relationships, and eventually become leaders who can help others find recovery and hope as well."
          </p>
        </div>
      </div>
    </section>
  )
}

function Support() {
  const impacts = [
    'Community outreach events',
    'Youth mentorship programs',
    'Drug and gang awareness education',
    'Recovery support and resources',
    'Food and clothing assistance',
    'Transportation support',
    'Vocational and trade training opportunities',
    'Community resource fairs and family events',
    'Supplies for outreach and mentorship activities',
  ]

  return (
    <section id="support" className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Support Our Mission</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="text-charcoal-300 max-w-3xl mx-auto text-lg">
            Lost & Found Outreach, Inc. is a growing nonprofit organization with a big vision and a heart
            to serve the community. We are just getting started, but our mission is to make a lasting impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-charcoal-200 text-lg leading-relaxed mb-6">
              Our goal is to create mentorship programs, outreach events, recovery support services,
              vocational training opportunities, community resource events, and safe environments where
              people can find hope, purpose, guidance, and support.
            </p>
            <p className="text-charcoal-300 leading-relaxed mb-8">
              If your heart desires to partner with us and support what we are building, donations are
              greatly appreciated. Every donation helps us continue our local missions and outreach
              efforts throughout the community.
            </p>

            <h3 className="text-xl font-bold text-gold-400 mb-4">Your Support Helps Provide:</h3>
            <ul className="space-y-2 mb-8">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-gold-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-charcoal-300 text-sm">{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gold-600/20 to-charcoal-800 rounded-2xl p-8 border border-gold-600/30 text-center">
            <div className="bg-charcoal-900 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Make a Difference</h3>
              <p className="text-charcoal-300 mb-6">
                Every contribution, big or small, helps us continue reaching people in need and creating
                opportunities for restoration, growth, and positive change in our communities.
              </p>
              <button className="bg-gold-600 hover:bg-gold-500 text-charcoal-900 font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg w-full">
                Donate Now
              </button>
            </div>

            <p className="text-charcoal-400 text-sm">
              Lost & Found Outreach, Inc. is a 501(c)(3) nonprofit organization.
              All donations are tax-deductible.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gold-400 text-xl font-semibold italic max-w-3xl mx-auto">
            "When communities come together, lives can be changed. Thank you for believing in our vision
            and helping us make a difference."
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-gold-600/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-10 h-10 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3zm0 10a2 2 0 110 4 2 2 0 010-4z"/>
              </svg>
              <div>
                <span className="text-gold-500 font-bold text-lg block">Lost & Found</span>
                <span className="text-charcoal-400 text-sm">Outreach, Inc.</span>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm">
              San Diego, CA<br />
              Est. 2024
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-charcoal-400 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#youth" className="text-charcoal-400 hover:text-gold-400 transition-colors">Youth Programs</a></li>
              <li><a href="#homelessness" className="text-charcoal-400 hover:text-gold-400 transition-colors">Outreach</a></li>
              <li><a href="#recovery" className="text-charcoal-400 hover:text-gold-400 transition-colors">Recovery Support</a></li>
              <li><a href="#support" className="text-charcoal-400 hover:text-gold-400 transition-colors">Support Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold mb-4">Our Mission</h4>
            <p className="text-charcoal-400 text-sm leading-relaxed">
              Mentorship | Education | Job Training | Community Service
            </p>
            <p className="text-charcoal-500 text-sm mt-4">
              Every person matters. Every story counts. Every life can change.
            </p>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 text-center">
          <p className="text-charcoal-500 text-sm">
            &copy; {new Date().getFullYear()} Lost & Found Outreach, Inc. All rights reserved.
          </p>
          <p className="text-gold-600 text-xs mt-2">
            From Lost to Leader | From the Streets to Service
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="bg-charcoal-950 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BoardMembers />
      <Youth />
      <Homelessness />
      <Recovery />
      <Support />
      <Footer />
    </div>
  )
}

export default App
