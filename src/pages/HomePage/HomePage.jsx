import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/laptop.png';
import './HomePage.css';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Elkawas.Dev';
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-intro">Hi, I&apos;m</p>

            <h1 className="hero-title">
              Youssef <br />
              Elkawas
            </h1>

            <h2 className="hero-subtitle">Aspiring Full-Stack Developer</h2>

            <p className="hero-description">
              Hello, I&apos;m Youssef, a 17-year-old passionate full-stack developer and a
              high school student from Egypt (Alexandria). I am building my skills step by
              step through projects, practice and real learning. My goal is to become a
              senior technical builder and create real systems and SaaS products in the
              future.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary view">
                View My Work
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <img src={heroImage} alt="Laptop Setup" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">What I am doing</h2>

          <p className="section-text">
            Right now, I am focused on learning web development fundamentals. I started with
            the CS50x course from Harvard and am building my first HTML projects. I believe
            that small steps day by day create incredible accumulation.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">My Goals</h2>

          <div className="goals-grid">
            <div className="card">Become a Full-Stack Developer</div>
            <div className="card">Build Real Projects &amp; Systems</div>
            <div className="card">Create Software That Solves Problems</div>
            <div className="card">Share My Journey Honestly</div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>

          <p className="section-text">
            Elkawas.Dev is my main long-term project. It started with HTML and will continue
            evolving as I learn CSS, JavaScript, React and backend technologies.
          </p>
        </div>
      </section>
    </>
  );
}
