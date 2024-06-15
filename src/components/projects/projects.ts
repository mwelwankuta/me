export const projects = [
  {
    title: "Merlee.js",
    description:
      "I built a Node.js API framework that includes support for embedded JavaScript (EJS), making it possible to create APIs and EJS applications effortlessly. Offering a smooth experience to access HTTP methods and set up HTTP servers. Compared to the standard HTTP package in Node.js, my framework simplifies the process and enhances ease of use. And guess what? I developed this entire project using just JavaScript, showcasing my ability to create robust and user-friendly solutions. here is an app built with merlee.js: https://github.com/mwelwankuta/my-repos",

    techStack: "JavaScript, Node Package Manager",
    link: "https://github.com/mwelwankuta/merlee.js",
    previews: [
      { link: "https://www.npmjs.com/package/merlee.js", title: "Deployment" },
      { link: "https://my-repos-merlee-demo.onrender.com", title: "Demo" },
    ],
    image: "",
    video: `
    <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/dziaRMibtTFMB7p135FX" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
  },
  {
    title: "PDFyCode",
    description:
      "A visual studio code extension that converts code snippets into a PDF preview with ease. My lecturer had this quirky requirement of submitting code as a PDF printed on paper (weird, right?). But instead of wrestling with CodeBlocks for my C++ code, I decided to take matters into my own hands and whip up this extension for VSCode for anyone who's in a similar situation. This project is a testament to my ability to think outside the box and create innovative solutions to everyday problems.",
    techStack: "JavaScript, Visual Studio Code API",
    link: "https://github.com/mwelwanKuta/pdfy-code",
    previews: [
      {
        link: "https://marketplace.visualstudio.com/items?itemName=mwelwankuta.pdfycode",
        title: "Deployment",
      },
    ],
    image: "",
    video: `<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/vnxpXfpVj1rMBSWGnK94" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
  },
  {
    title: "FiveBay",
    description: `"This Chrome extension helps users keep track of auction sales ending soon. It notifies you when auctions are about to end within the next 10 minutes, so you can place your bids in time. This prevents you from missing out on great deals and ensures that you stay on top of your bidding game. With this extension, you'll never miss the chance to snag that item you've been eyeing before the auction closes`,
    techStack: "JavaScript, Ebay API, Node.js, Express.js",
    link: "https://github.com/mwelwankuta/fivebay",
    previews: [],
    image: "",
    video: `
    <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/G7Jf7XhnCPsUeoZEJuZn" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
    `,
  },
  {
    title: "Noogle Search",
    description:
      "a search engine designed to cater specifically to user queries in the form of questions. This project utilizes its built-in web crawler to explore and index the web pages on popular question forums such as wikihow.com, quora etc and/or reddit then indexes them.",
    techStack: "Python, Flask, SQLite",
    link: "https://github.com/mwelwankuta/noogle",
    previews: [],
    image: "",
    video: `<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/GD3dPtMQiJrnenTesrAg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
  },
  {
    title: "moodpick",
    description: `MoodPick is a social media platform designed to help users capture and share their moments, express their feelings, and connect with friends. Whether you're sharing photos or videos, MoodPick makes it easy to keep your followers engaged and stay in touch with what's happening in their lives.`,
    techStack: "Flutter, Dart, Google OAuth, Supabase",
    link: "https://github.com/mwelwankuta/moodpick",
    previews: [],
    image: "",
    video: `<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/sBJolwIPBO4osJuo4kAr" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
  },
];

/**
 * Generates a redirect link and title based on the provided pathname.
 * @param pathname - The pathname to generate the redirect link and title from.
 * @returns An object containing the redirect link and title.
 */
export const generateProjectRedirectLink = (pathname: string) => {
  const project = projects.find(
    (project) =>
      project.title.toLowerCase().replace(/ /g, "-") === pathname.slice(1)
  );

  if (!project) {
    return {
      redirect: "/",
      title: "home",
    };
  }

  return {
    redirect: project.link,
    title: project.title.toLowerCase().replace(/ /g, "-"), // Convert title to lowercase and replace spaces with hyphens
  };
};
