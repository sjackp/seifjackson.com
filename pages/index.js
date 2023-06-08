import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Home({ projects }) {
  const featuredProject = projects[0];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black">
      <Header />
      <main className="container mx-auto py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-semibold text-white mb-8">Featured Project</h1>
          <ProjectCard project={featuredProject} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const projects = require('../data/projects.json');
  return { props: { projects } };
}
