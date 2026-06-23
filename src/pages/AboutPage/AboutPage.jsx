import { useEffect } from 'react';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Elkawas.Dev — About';
  }, []);

  return (
    <>
      <section className="about-hero">
        <div className="container about-container">
          <div className="about-content">
            <p className="section-label">Get To Know Me</p>

            <h1 className="about-title">About Me</h1>

            <p className="about-description">
              My name is{' '}
              <span className="highlight-text">Youssef Elkawas</span>, and I am a high
              school student focused on becoming a real technical builder. I don&apos;t
              just want to learn programming. I want to build products, solve meaningful
              problems, and create systems that carry real value.
            </p>

            <p className="about-description">
              For me, technology is not only about code or career opportunities. It is
              about creativity, ownership, leverage, and building things that can genuinely
              impact people.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Learning Journey</p>
            <h2 className="section-title">My Background</h2>
          </div>

          <p className="section-text">
            I completed Harvard&apos;s CS50x where I learned computer science fundamentals
            such as C, Python, SQL, Flask and problem-solving. After that, I decided to
            focus deeply on web development and started my journey toward full-stack
            engineering.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Mindset</p>
            <h2 className="section-title">My Philosophy</h2>
          </div>

          <div className="philosophy-grid">
            <article className="philosophy-card card">
              <h3 className="card-title">Build To Learn</h3>
              <p className="card-text">
                I believe building projects is the best way to truly understand technology.
                Real learning happens through application, mistakes and iteration.
              </p>
            </article>

            <article className="philosophy-card card">
              <h3 className="card-title">Consistency Wins</h3>
              <p className="card-text">
                Small daily progress compounds over time. My focus is consistency and
                long-term growth instead of shortcuts.
              </p>
            </article>

            <article className="philosophy-card card">
              <h3 className="card-title">Depth Over Hype</h3>
              <p className="card-text">
                I care more about understanding systems deeply than chasing trends without
                real skill.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Long-Term Direction</p>
            <h2 className="section-title">My Vision</h2>
          </div>

          <p className="section-text">
            My long-term vision is to grow from developer to builder to founder by creating
            real systems and SaaS products. Eventually, I want to build my own technology
            company and create products that solve meaningful problems.
          </p>

          <p className="section-text">
            I understand that this path requires years of learning, consistency,
            experimentation and patience. That is exactly why I am committed to it.
          </p>
        </div>
      </section>
    </>
  );
}
