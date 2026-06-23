import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ExternalLinkModal from './components/ExternalLinkModal/ExternalLinkModal';
import { ThemeProvider } from './context/ThemeContext';
import { ExternalLinkProvider } from './context/ExternalLinkContext';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import './styles/App.css';

export default function App() {
  return (
    <ThemeProvider>
      <ExternalLinkProvider>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <ExternalLinkModal />
      </ExternalLinkProvider>
    </ThemeProvider>
  );
}
