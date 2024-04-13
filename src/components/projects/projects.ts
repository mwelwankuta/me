import merlee from "../../assets/merlee.png";
import pdfycode from "../../assets/pdfycode.gif";

export const projects = [
  {
    title: "Merlee.js",
    description:
      "I built a Node.js API framework that includes support for embedded JavaScript (EJS), making it possible to create APIs and EJS applications effortlessly. Offering a smooth experience to access HTTP methods and set up HTTP servers. Compared to the standard HTTP package in Node.js, my framework simplifies the process and enhances ease of use. And guess what? I developed this entire project using just JavaScript, showcasing my ability to create robust and user-friendly solutions. here is an app built with merlee.js: https://github.com/mwelwankuta/my-repos",

    techStack: "JavaScript, Node Package Manager",
    link: "https://github.com/mwelwankuta/merlee.js",
    preview: "https://www.npmjs.com/package/merlee.js",
    image: merlee,
  },
  {
    title: "PDFyCode",
    description:
      "A visual studio code extension that converts code snippets into a PDF preview with ease. My lecturer had this quirky requirement of submitting code as a PDF printed on paper (weird, right?). But instead of wrestling with CodeBlocks for my C++ code, I decided to take matters into my own hands and whip up this extension for VSCode for anyone who's in a similar situation. This project is a testament to my ability to think outside the box and create innovative solutions to everyday problems.",
    techStack: "JavaScript, Visual Studio Code API",
    link: "https://github.com/mwelwanKuta/pdfy-code",
    preview:
      "https://marketplace.visualstudio.com/items?itemName=mwelwankuta.pdfycode",
    image: pdfycode,
  },
  {
    title: "Noogle Search",
    description:
      "a search engine designed to cater specifically to user queries in the form of questions. This project utilizes its built-in web crawler to explore and index the web pages on popular question forums such as wikihow.com, quora etc and/or reddit then indexes them.",
    techStack: "Python, Flask, SQLite",
    link: "https://github.com/mwelwankuta/noogle",
    preview: "",
    image: "",
  },
  {
    title: "Busy File Indicator",
    description: `this is a Visual Studio Code extension allows developers to mark files as "busy" to prevent accidental edits and deletions minimizing the number merge conflicts due to making changes to a file that is busy at the moment and ensuring smoother collaboration among team members.`,
    techStack:
      "TypeScript, Visual Studio Code API, Node.js, Express.js, MongoDB",
    link: "https://github.com/mwelwankuta/busy-file-indicator",
    preview: "",
    image: "",
  },
  {
    title: "FiveBay",
    description: `"This Chrome extension helps users keep track of auction sales ending soon. It notifies you when auctions are about to end within the next 10 minutes, so you can place your bids in time. This prevents you from missing out on great deals and ensures that you stay on top of your bidding game. With this extension, you'll never miss the chance to snag that item you've been eyeing before the auction closes`,
    techStack: "JavaScript, Ebay API, Node.js, Express.js",
    link: "https://github.com/mwelwankuta/fivebay",
    preview: "",
    image: "",
  },
];
