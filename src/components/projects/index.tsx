import { GithubLink } from "../home";
import { projects } from "./projects";

export const Projects = () => {
  return (
    <div className="container mx-auto px-5 mt-20">
      <h1 className="font-bold text-2xl mt-6" id="projects">
        Projects
      </h1>

      <div className="flex items-center gap-2 mt-2">
        <p className="text-slate-700">View my other projects on</p>{" "}
        <GithubLink link="https://github.com/mwelwankuta?tab=repositories" />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
};

const Project: React.FC<{
  title: string;
  description: string;
  techStack: string;
  link: string;
  previews: { link: string; title: string }[];
  image: string;
  video?: string;
}> = ({ title, description, techStack, link, previews, image, video }) => {
  return (
    <div className="py-2 shadow-sm border rounded-md bg-white z-10">
      <div className="px-2 ">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="font-light">{techStack}</p>
      </div>
      <div className="bg-slate-400">
        {image && (
          <img
            src={image}
            className="my-4 aspect-video w-full object-contain"
          />
        )}
        {video && (
          <div className="my-4 " dangerouslySetInnerHTML={{ __html: video }} />
        )}
      </div>

      <div className="px-2 flex flex-col">
        <p className="text-slate-700 flex-1">{description}</p>

        <div className="flex items-center gap-2 flex-1  mt-2">
          {previews &&
            previews.map(({ link, title }) => (
              <a
                href={link}
                target="_blank"
                className="px-3 py-2 border-2 border-slate-200 rounded-md text-slate-600 bg-transparent"
              >
                {title}
              </a>
            ))}

          {link && (
            <a
              href={link}
              target="_blank"
              className="px-3 py-2 bg-orange-600 rounded-md text-white hover:bg-orange-500 duration-300"
            >
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
