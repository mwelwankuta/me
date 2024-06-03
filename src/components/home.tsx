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
  return (
    <div className="flex flex-row items-center justify-between container mx-auto px-5">
      <div className="flex flex-col  max-w-md">
        <div className="flex items-end mb-4">
          <h1 className="font-black text-6xl lg:text-8xl text-teal-950">
            Software Engineer
          </h1>
          <h1 className="font-black text-6xl lg:text-8xl hidden lg:flex">👋🏽</h1>
          <img
            src="https://media.licdn.com/dms/image/D5603AQGzJ2JLlFhTgA/profile-displayphoto-shrink_800_800/0/1716413354755?e=1723075200&v=beta&t=3lSeRlXGK7qyI-E6UzcPkgT2h2N1P3gUIPeByoX0g74"
            alt="Picture of mwelwa"
            className="rounded-full h-[70px] w-[70px] object-cover self-end lg:hidden"
          />
        </div>
        <p className="text-slate-900 mb-4">
          Hello, I'm Mwelwa Nkuta, A passionate Software Engineer with 4 years
          of experience
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
          className="tracking-widest font-black text- mt-10 lg:block hidden text-center px-3 py-4 text-white letter shadow-xl shadow-orange-500 rounded-md bg-orange-600"
        >
          Go to Projects
        </a>
      </div>

      <div className="hidden lg:flex">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGEcWcZCYbSKA/profile-displayphoto-shrink_200_200/0/1705765898593?e=1718236800&v=beta&t=2Ag099kdHQ2fkRD7SPf2kVyCNAKkjDIRBPDTz_C9xpg"
          alt="picture of Mwelwa"
          className="rounded-full h-[300px] w-[300px] object-cover"
        />
      </div>
    </div>
  );
};
