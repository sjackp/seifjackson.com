export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <img
        src={"https://img.youtube.com/vi/SpDNGq5H0VE/sddefault.jpg"} 
        alt={project?.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{project?.title}</h3>
      <p className="text-gray-600 mb-4">{project?.description}</p>
      <a
  href="https://github.com/sjackp/J_Captioneer_v2.release"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-600 hover:text-red-800 transition-colors duration-300"
>
        View on GitHub
      </a>
    </div>
  );
}
