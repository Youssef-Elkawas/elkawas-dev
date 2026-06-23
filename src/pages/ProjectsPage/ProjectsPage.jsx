import { useEffect } from 'react';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import './ProjectsPage.css';

const projects = [
  {
    title: 'Elkawas.Dev',
    description:
      'This is my main personal developer project. It started as a simple HTML website and will continue evolving as I learn new technologies.',
    status: 'In Progress',
    technology: 'HTML, CSS & JavaScript',
    url: 'https://github.com/Youssef-Elkawas/elkawas-dev.git',
    siteName: 'GitHub',
    buttonClass: 'btn btn-primary view',
  },
  {
    title: 'HTML Multi-Page Website',
    description:
      'My first practice project built with HTML. It helped me understand semantic HTML, navigation, forms and page linking.',
    status: 'Completed',
    technology: 'HTML',
    url: 'https://github.com/Youssef-Elkawas/html-multi-page-website.git',
    siteName: 'GitHub',
    buttonClass: 'btn btn-secondary',
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Elkawas.Dev - Projects';
  }, []);

  return (
    <>
      <section className="projects-hero">
        <div className="container">
          <div className="projects-header">
            <p className="section-label">Portfolio</p>
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-description">
              This page includes the projects I am building as I grow as a developer. Each
              project represents a step forward in my journey.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="project-details">
                  <li>Status: {project.status}</li>
                  <li>Technology: {project.technology}</li>
                </ul>
                <ExternalLink
                  href={project.url}
                  siteName={project.siteName}
                  className={project.buttonClass}
                >
                  View Project
                </ExternalLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="upcoming-projects">
            <h2 className="section-title">More Projects Coming Soon...</h2>
            <p className="section-text">
              JavaScript, React, Backend and Full-Stack projects are on the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
