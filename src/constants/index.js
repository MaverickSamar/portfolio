import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    singular,
    marketcube,
    pentair,
    neolen,
    threejs,
    marketcube_img,
    terminal_img,
    video_wiki,
    aws,
    python,
    java,
    solidity,
    web3,
    ipfs,
    polygon,
    eth
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Web3",
      icon: web3,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"AWS",
      icon: aws,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "eth",
      icon: eth,
    },
    {
      name: "polygon",
      icon: polygon,
    },
    {
      name: "ipfs",
      icon: ipfs,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "solidity",
      icon: solidity,
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Blockchain Developer",
      company_name: "Neolen Technologies",
      icon: neolen,
      iconBg: "#383E56",
      date: "April 2022 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js, Solidity and Nodejs.",
        "Built decentralized storage systems using IPFS and Web3.js, reducing latency by 75%.",
        "Worked upon ERC20, ERC721 and ERC1155 tokens for metaverse ecosystems.",
        "Implemented image classification algorithms over decentralized networks with +55% accuracy.",
        "Planned game economies for virtual worlds, enhancing engagement by 30%."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Marketcube",
      icon: marketcube,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Aug 2023",
      points: [
        "Developing and maintaining web applications using Shopify Liquid, ReactJs and GraphQL.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer - Full Stack",
      company_name: "Pentair",
      icon: pentair,
      iconBg: "#383E56",
      date: "Jul 2023 - Present",
      points: [
        "Designed scalable web applications using React and Node.js, improving user engagement by 25%.",
        "Attained proficiency in AWS services – Glue, Athena, Cognito, Lambda, S3, DynamoDB, Code Commit.",
        "Refactored APIs, reducing cognitive complexity from 150 to 10 & time complexity to O(n).",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Integrated test cases of services with 100% coverage.",
        "Managed AWS Glue Jobs for data analysis to transform live data from 100,000+ devices, enabling insights.", "Developed and deployed RESTful APIs with pre-signed URLs, facilitating secure video and image storage.",
        "Automated test case generation using LLMs, achieving 100% coverage.",
        "Coded elastic search bulk API for indexing or deleting more than 1m + entries in one call."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Singular",
      description:
        "Shopify based e-commerce store for Europe.",
      tags: [
        {
          name: "shopify",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: singular,
      source_code_link: "https://it.singular.shop/",
    },
    {
      name: "Marketcube",
      description:
        "A Multi-Vendor Marketplace. A self-service multi-seller management solution manages on-boarding, inventory, order splitting, shipping, fulfillment and payouts. The only thing they don’t do is make the product.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: marketcube_img,
      source_code_link: "https://www.marketcube.io/",
    },
    {
      name: "Portfolio Terminal",
      description:
        "A personal portfolio in a UNIX terminal. You can type commands to perform actions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: terminal_img,
      source_code_link: "https://portfolio-terminal-phi.vercel.app/",
    },
    {
      name: "Video.wiki",
      description:
        "A simple tool for teachers to create teaching content without any advance knowledge of a tool or code. They create by using various media and graphics from the open stock libraries and merging it with their own content to keep it engaging and diverse.",
      tags: [
        {
          name: "web3.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "ipfs",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: video_wiki,
      source_code_link: "https://video.wiki/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };