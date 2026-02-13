import { useEffect, useMemo, useState } from 'react'
import './App.css'
import portraitImage from './assets/1.png'
const imageBase = 'https://images.unsplash.com'
const imageParams = 'auto=format&fit=crop&w=900&q=70'

const projects = [
  {
    title: 'نظام إدارة مكتبة',
    description:
      'تنظيم الفهرسة والإعارات والمتابعة الذكية للمقتنيات مع لوحة تحكم سهلة للموظفين.',
    stack: ['React', 'Laravel', 'REST', 'Dashboards'],
    image: `${imageBase}/photo-1507842217343-583bb7270b66?${imageParams}`,
  },
  {
    title: 'نظام حجز عقارات (الأقصر)',
    description:
      'حجوزات العقارات مع خرائط تفاعلية، تقويمات توفر، وتجربة مناسبة لعملاء الأقصر.',
    stack: ['React', 'Maps', 'Calendar', 'Payments'],
    image: `${imageBase}/photo-1560518883-ce09059eeffa?${imageParams}`,
  },
  {
    title: 'نظام إدارة عيادة',
    description:
      'إدارة المواعيد والملفات الطبية والفوترة في تجربة موحدة للأطباء والاستقبال.',
    stack: ['React', 'Laravel', 'Auth', 'Reports'],
    image: `${imageBase}/photo-1504813184591-01572f98c85f?${imageParams}`,
  },
  {
    title: 'E-commerce Admin Panel',
    description:
      'لوحة تحكم للتجارة الالكترونية مع إدارة المنتجات والمخزون والطلبات بشكل لحظي.',
    stack: ['React', 'Node', 'Analytics', 'RBAC'],
    image: `${imageBase}/photo-1519389950473-47ba0277781c?${imageParams}`,
  },
  {
    title: 'Booking System',
    description:
      'نظام حجوزات متعدد الخدمات مع تدفقات دفع، إشعارات، وتقارير تشغيلية.',
    stack: ['React', 'Laravel', 'Payments', 'Notifications'],
    image: `${imageBase}/photo-1504384308090-c894fdcc538d?${imageParams}`,
  },
  {
    title: 'tourguide website',
    description:
      'واجهة سياحية ملهمة تعرض البرامج والجولات مع تجربة مرئية مريحة للمسافرين.',
    stack: ['React', 'CMS', 'SEO', 'UX'],
    image: `${imageBase}/photo-1469474968028-56623f02e42e?${imageParams}`,
  },
]

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const heroStats = useMemo(
    () => [
      { label: 'Years Experience', value: '6+' },
      { label: 'Projects Delivered', value: '30+' },
      { label: 'Primary Focus', value: 'React + Laravel' },
    ],
    [],
  )

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">MK Portfolio</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme(nextTheme)}
        >
          <span className="theme-indicator" aria-hidden="true" />
          {nextTheme} mode
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content reveal" style={{ '--delay': '0.1s' }}>
            <p className="eyebrow">Hello, I am</p>
            <h1 className="hero-name">Mohamed Khalel</h1>
            <p className="role">Fullstack Software Engineer</p>
            <p className="intro">
              I design and build modern web experiences with a focus on React
              frontends and Laravel-powered backends. I enjoy shaping products
              that feel polished, fast, and human.
            </p>
            <div className="cta-group">
              <a className="btn primary" href="#contact">
                Let&apos;s collaborate
              </a>
              <a className="btn ghost" href="#projects">
                View projects
              </a>
            </div>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual reveal" style={{ '--delay': '0.2s' }}>
            <div className="portrait">
              <div className="portrait-ring" />
              <div className="portrait-core">
                <img
                  className="portrait-image"
                  src={portraitImage}
                  alt="Portrait of Mohamed Khalel"
                  decoding="async"
                />
              </div>
            </div>
            <div className="hero-card">
              <h3>React + Laravel</h3>
              <p>
                Building responsive UIs, scalable APIs, and end-to-end solutions
                that ship fast.
              </p>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-heading reveal" style={{ '--delay': '0.1s' }}>
            <p className="eyebrow">About</p>
            <h2>Crafting products with clarity, speed, and care.</h2>
          </div>
          <div className="about-grid">
            <div className="about-card reveal" style={{ '--delay': '0.2s' }}>
              <h3>Fullstack Software Engineer</h3>
              <p>
                I bring ideas to life by pairing React frontends with Laravel
                backends. From concept to deployment, I focus on clean
                architecture and delightful UX.
              </p>
            </div>
            <div className="about-card reveal" style={{ '--delay': '0.3s' }}>
              <h3>What I deliver</h3>
              <ul>
                <li>Interface design systems and component libraries</li>
                <li>API design, authentication, and performance tuning</li>
                <li>Collaborative product delivery with agile teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-heading reveal" style={{ '--delay': '0.1s' }}>
            <p className="eyebrow">Projects</p>
            <h2>Selected work with a focus on impact.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card reveal"
                style={{ '--delay': `${0.15 + index * 0.1}s` }}
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href="#" aria-label="Open live demo">
                      <span className="icon" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                    <a href="#" aria-label="View GitHub repository">
                      <span className="icon" aria-hidden="true">
                        {'</>'}
                      </span>
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card reveal" style={{ '--delay': '0.1s' }}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something people remember.</h2>
              <p>
                Tell me about your product vision, timeline, and goals. I&apos;ll
                respond with a clear plan and next steps.
              </p>
            </div>
            <div className="contact-actions">
              <div className="contact-detail">
                <span>Phone</span>
                <strong>01000965504</strong>
              </div>
              <a className="btn primary" href="tel:01000965504">
                Call now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
