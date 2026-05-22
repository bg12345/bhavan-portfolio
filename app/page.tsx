import Image from "next/image";

const skills = [
  "Python",
  "Golang",
  "Django",
  "Flask",
  "Gin",
  "GORM",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS EC2",
  "AWS S3",
  "AWS Lambda",
  "REST APIs",
  "Microservices",
  "Razorpay",
  "WebSocket",
];

const experience = [
  {
    role: "Software Engineer",
    company: "Invsify Technologies Private Limited",
    period: "Apr 2025 - Apr 2026",
    bullets: [
      "Built and optimized Go microservices for fixed deposit, stock transaction, and SIP workflows.",
      "Improved API response times by 20-25% through SQL tuning, indexing, and backend optimization.",
      "Integrated Razorpay mandate creation, payment initiation, and automated transaction processing.",
      "Engineered eKYC onboarding services that reduced turnaround time by 25-30%.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Almondz Global Securities Ltd.",
    period: "May 2024 - Apr 2025",
    bullets: [
      "Developed Django eKYC workflows for PAN validation, document parsing, biometric verification, and exchange submissions.",
      "Built onboarding logic aligned with SEBI, NSE, and BSE compliance requirements.",
      "Created back-office modules for profile updates, bank management, account closure, and segment activation.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "BeGig Pvt. Ltd.",
    period: "Jun 2022 - Nov 2022",
    bullets: [
      "Developed a content-based recommendation system to match freelancers with projects.",
      "Built a real-time Flask and WebSocket chat backend that improved user engagement by 30%.",
    ],
  },
];

const projects = [
  {
    name: "Climate Trends Visualization",
    description:
      "Interactive Go and JavaScript app for climate data visualization with dynamic filters, charts, Docker packaging, and AWS EC2 deployment.",
    tags: ["Go", "JavaScript", "Docker", "AWS EC2"],
    repo: "https://github.com/bg12345/climate-visualization",
  },
  {
    name: "OCR System",
    description:
      "Python OCR pipeline using OpenCV and Tesseract to extract text from scanned documents.",
    tags: ["Python", "OpenCV", "Tesseract"],
    repo: "https://github.com/bg12345/OCR",
  },
];

const stats = [
  ["25-30%", "faster eKYC onboarding"],
  ["20-25%", "API response improvement"],
  ["70%", "less manual invoice work"],
  ["10-12%", "fewer transaction failures"],
];

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.4 4.6 6.8 6.2c-.8.8-.8 2-.2 3.1a22 22 0 0 0 8.1 8.1c1.1.6 2.3.6 3.1-.2l1.6-1.6-3.4-3.4-1.6 1.6a14.8 14.8 0 0 1-4.2-4.2L11.8 8 8.4 4.6Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 8.8h3.1V19H5zM6.6 5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10.2 8.8h3v1.4c.6-.9 1.6-1.6 3.1-1.6 2.3 0 3.7 1.5 3.7 4.5V19h-3.1v-5.4c0-1.5-.5-2.3-1.7-2.3-1.3 0-1.9.9-1.9 2.3V19h-3.1z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 1 2.4.8.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-3.8 0-.8.3-1.5.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 2.9-1.8 3.6-3.6 3.8.3.3.6.8.6 1.6v2c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Bhavan Gupta home">
          BG
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <Image
          className="heroImage"
          src="/images/backend-fintech-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="heroOverlay" />
        <div className="heroInner">
          <div className="heroContent">
            <p className="eyebrow">Backend Software Engineer</p>
            <h1>Bhavan Gupta</h1>
            <p className="lede">
              I build reliable fintech backends across eKYC, payments, trading workflows,
              microservices, and database-heavy systems.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#projects">
                View Work
              </a>
              <a className="button secondary" href="/documents/Bhavan_Gupta_Resume.pdf">
                Resume
              </a>
            </div>
          </div>
          <div className="portraitPanel" aria-label="Portrait of Bhavan Gupta">
            <Image
              className="portraitImage"
              src="/images/bhavan-gupta.jpeg"
              alt="Bhavan Gupta"
              width={420}
              height={420}
              priority
            />
            <div className="portraitCaption">
              <span>New Delhi, India</span>
              <strong>Backend Engineer</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="sectionLabel">Profile</p>
          <h2>Python-first backend engineer with Go microservice experience.</h2>
        </div>
        <p>
          My work sits where accuracy matters: onboarding, identity verification,
          transaction processing, payment mandates, search, scheduling, and reporting.
          I like systems that are easy to reason about, observable in production, and
          fast enough to stay invisible to users.
        </p>
      </section>

      <section className="statsBand" aria-label="Selected impact">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="work" className="section">
        <div className="sectionHeader">
          <p className="sectionLabel">Experience</p>
          <h2>Recent backend work</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={`${item.company}-${item.role}`}>
              <div className="timelineMeta">
                <span>{item.period}</span>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection">
        <div className="sectionHeader">
          <p className="sectionLabel">Stack</p>
          <h2>Tools I use to ship backend systems</h2>
        </div>
        <div className="skillsGrid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section projectsSection">
        <div className="sectionHeader">
          <p className="sectionLabel">Projects</p>
          <h2>Selected builds</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tagRow">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="repoLink" href={project.repo}>
                View GitHub repo
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Let&apos;s build dependable backend systems.</h2>
        </div>
        <div className="contactLinks">
          <a href="mailto:bhavangupta@gmail.com">
            <span className="contactIcon">
              <MailIcon />
            </span>
            <span>bhavangupta@gmail.com</span>
          </a>
          <a href="tel:+919971639333">
            <span className="contactIcon">
              <PhoneIcon />
            </span>
            <span>+91 99716 39333</span>
          </a>
          <a href="https://linkedin.com/in/bhavangupta-dev">
            <span className="contactIcon">
              <LinkedinIcon />
            </span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/bg12345">
            <span className="contactIcon">
              <GithubIcon />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </main>
  );
}
