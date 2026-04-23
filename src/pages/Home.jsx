import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript / ES6+</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Vite</li>
              <li>VS Code</li>
              <li>Browser DevTools</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>¡Hablemos! Puedes contactarme en:</p>
        <a href="mailto:tu@email.com" className="email-link">tu@email.com</a>
      </section>
    </main>
  )
}
