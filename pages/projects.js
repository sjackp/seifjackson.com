import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ projects }) {
    console.log(projects);
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black">

          <Header />
          <main className="container mx-auto py-8">
            <h1 className="text-4xl font-semibold text-white mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
    const projectsData = require('../data/projects.json');
    const { projects } = projectsData; // Destructure the projects array from the object
    return { props: { projects } };
  }
  