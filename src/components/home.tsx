import aws from "../assets/aws.png";
import electron from "../assets/electron.png";
import go from "../assets/go.png";
import graphql from "../assets/graphql.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import reactnative from "../assets/react-native.png";
import reactjs from "../assets/reactjs.png";
import serverless from "../assets/serverless.png";
import typescript from "../assets/typescript.png";
import Icons from "./icons/linkedin";

import { useEffect } from "react";
import { generateProjectRedirectLink } from "./projects/projects";
import { useParams } from "react-router-dom";

export const GithubLink = ({
  link = "https://github.com/mwelwankuta",
}: {
  link?: string;
}) => (
  <a href={link} target="_blank">
    <div className="items-center gap-2 flex">
      <Icons icon="github" />
      <p className="font-semibold">@mwelwankuta</p>
    </div>
  </a>
);

export const Home = () => {
  const params = useParams();
  const pathname = params.project ?? '';

  useEffect(() => {
    if (pathname.length) {
      const project = generateProjectRedirectLink(pathname);
      window.location.href = project.redirect;
    }
  }, [pathname]);

  return (
    <div className="flex flex-row container mx-auto px-5">
      <div className="flex flex-col max-w-md">
        <div className="flex items-end mb-4">
          <h1 className="font-black text-6xl lg:text-8xl text-teal-950">
            Software Engineer
          </h1>
          <h1 className="font-black text-6xl lg:text-8xl hidden lg:flex">👋🏽</h1>
        </div>
        <p className="text-slate-900 mb-4">
          Hello, I'm <span className="font-black text-xl ">Mwelwa Nkuta</span>, A passionate Software Engineer with interest in building and scaling web applications and devloper tools.
        </p>

        <div className="flex items-center gap-9 mb-4">
          <GithubLink />

          <a href="https://linkedin.com/in/mwelwa" target="_blank">
            <div className="items-center flex gap-2">
              <Icons icon="linkedin" />
              <p className="font-semibold">in/mwelwa</p>
            </div>
          </a>
        </div>

        <h1 className="font-bold text-xl mt-6 ">Tech Stack</h1>
        <p className="text-xs text-slate-600 mb-4">
          NOTE: click on logos to visit technology's website{" "}
          <span className="hidden lg:flex">or hover for the name</span>{" "}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="https://react.dev/" title="React.js">
            <img
              src={reactjs}
              className="size-11 object-contain"
              alt="react.js logo"
            />
          </a>

          <a href="https://www.typescriptlang.org/" title="TypeScript">
            <img
              src={typescript}
              className="size-11 object-contain"
              alt="typescript logo"
            />
          </a>

          <a href="https://go.dev/" title="Go Lang">
            <img
              src={go}
              className="size-11 object-contain"
              alt="golang logo"
            />
          </a>

          <a href="https://reactnative.dev/" title="React Native">
            <img
              src={reactnative}
              className="w-[80px] object-contain"
              alt="react native logo"
            />
          </a>

          <a href="https://electronjs.org/" title="Electron.js">
            <img
              src={electron}
              className="size-11 object-contain"
              alt="electron.js logo"
            />
          </a>

          <a href="https://nodejs.org" title="Node.js">
            <img
              src={nodejs}
              className="size-11 object-contain"
              alt="node.js logo"
            />
          </a>

          <a href="https://graphql.org/" title="GraphQL">
            <img
              src={graphql}
              className="size-11 object-contain"
              alt="graphql logo"
            />
          </a>

          <a href="https://serverless.com/" title="Serverless">
            <img
              src={serverless}
              className="size-11 object-contain"
              alt="serverless logo"
            />
          </a>

          <a href="https://www.mongodb.com/" title="Mongo DB">
            <img
              src={mongodb}
              className="size-11 object-contain"
              alt="mongodb logo"
            />
          </a>

          <a href="https://www.mysql.com/" title="MySQL">
            <img
              src={mysql}
              className="size-11 object-contain"
              alt="mysql logo"
            />
          </a>

          <a href="https://aws.amazon.com/" title="Amazon Web Services">
            <img src={aws} className="size-11 object-contain" alt="aws logo" />
          </a>
        </div>

        <a
          href="#projects"
          className="tracking-widest font-black text- mt-10 lg:block hidden text-center px-3 py-4 text-white letter shadow-xl rounded-md bg-orange-700"
        >
          Go to Projects
        </a>
      </div>

    </div>
  );
};
