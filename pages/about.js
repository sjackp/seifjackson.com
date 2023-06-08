import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About({ about }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-white mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 md:h-auto">
            <img
              src="https://i.ibb.co/dDyYv2R/001483-dae6e38e-1693809705.png"
              alt="Seif Jackson"
              className="w-half h-half object-cover rounded-md"
            />
          </div>
          <div>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Bio</h2>
              <p className="text-white mb-4">{about.bio}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap text-white">
                {about.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-500 p-1 m-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
              {about.experience.map((job, index) => (
                <div key={index} className="mb-4 text-white">
                  <p className="font-semibold">{job.position}</p>
                  <p>{job.company}</p>
                  <p>{job.duration}</p>
                </div>
              ))}
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
              {about.education.map((school, index) => (
                <div key={index} className="mb-4 text-white">
                  <p className="font-semibold">{school.degree}</p>
                  <p>{school.school}</p>
                  <p>{school.duration}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const about = require('../data/about.json');
  return { props: { about } };
}
