import { useEffect } from 'react';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import './ContactPage.css';

const contactItems = [
  { label: 'Name', value: 'Youssef Elkawas' },
  { label: 'Location', value: 'Alexandria, Egypt' },
  {
    label: 'GitHub',
    link: { href: 'https://github.com/Youssef-Elkawas', siteName: 'GitHub', text: 'Visit Profile' },
  },
  {
    label: 'LinkedIn',
    link: {
      href: 'https://www.linkedin.com/in/youssef-elkawas/',
      siteName: 'LinkedIn',
      text: 'Visit Profile',
    },
  },
  {
    label: 'Email',
    link: {
      href: 'mailto:youssef.elkawas.dev@gmail.com',
      siteName: 'Gmail',
      text: 'youssef.elkawas.dev@gmail.com',
    },
  },
  {
    label: 'WhatsApp',
    link: {
      href: 'https://wa.me/201550202828',
      siteName: 'WhatsApp',
      text: '+20 155 020 2828',
      title: 'Feel free to message me on WhatsApp',
    },
  },
];

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Elkawas.Dev - Contact';
  }, []);

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-header">
            <p className="section-label">Get In Touch</p>
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-description">
              Thank you for visiting my website. If you&apos;d like to connect with me, follow
              my journey, collaborate on a project, or simply say hello, you can find all my
              contact information below.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-card">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item card">
                <h3>{item.label}</h3>
                {item.link ? (
                  <ExternalLink
                    href={item.link.href}
                    siteName={item.link.siteName}
                    title={item.link.title}
                  >
                    {item.link.text}
                  </ExternalLink>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
