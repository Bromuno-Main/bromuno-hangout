import { DocIcon, PaymentIcon, SettingIcon } from "./icons";

export interface Offer {
  title: string;
  index: number;
  description: string;
  image: string;
}

export const offers: Offer[] = [
  {
    title: "Static Website",
    index: 0,
    description: "For showing information that dont require regular update",
    image: "/protype.png",
  },
  {
    title: "Dynamic Website",
    index: 1,
    description:
      "For online publishing and media websites with a CMS that collect and manage user data",
    image: "/protype.png",
  },
  {
    title: "Web Applications",
    index: 2,
    description:
      "Website with user generated content or enterprise apps that are used to manage systems",
    image: "/protype.png",
  },
  {
    title: "Mobile Applications",
    index: 3,
    description: "All products that work from within a mobile phone",
    image: "/protype.png",
  },
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
    email: "brian.kim@example.com",
    status: "active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/7.png",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/8.png",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/8.png",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/9.png",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/9.png",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/11.png",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/11.png",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/12.png",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/12.png",
    email: "mia.robinson@example.com",
  },
];
export const nameTitle = [
  {
    id: 1,
    sector: "Mr",
  },
  {
    id: 2,
    sector: "Mrs",
  },
  {
    id: 3,
    sector: "King",
  },
  {
    id: 4,
    sector: "Engr",
  },
  {
    id: 5,
    sector: "Bar",
  },
  {
    id: 6,
    sector: "Dr",
  },
  {
    id: 7,
    sector: "Queen",
  },
  {
    id: 8,
    sector: "Chief",
  },
  {
    id: 9,
    sector: "Comdr",
  },
  {
    id: 10,
    sector: "Comrade",
  },
  
];
export const businessSectors = [
  {
    id: 1,
    sector: "Marketing",
  },
  {
    id: 2,
    sector: "Information Technology (IT)",
  },
  {
    id: 3,
    sector: "Real Estate",
  },
  {
    id: 4,
    sector: "Finance",
  },
  {
    id: 5,
    sector: "Human Resource",
  },
  {
    id: 6,
    sector: "Fashion",
  },
  {
    id: 7,
    sector: "Supply Chain and Logistics",
  },
  {
    id: 8,
    sector: "E-commerce",
  },
  {
    id: 9,
    sector: "Retail and Consumer Goods",
  },
  {
    id: 10,
    sector: "Agriculture",
  },
  {
    id: 11,
    sector: "Public sector and Government",
  },
  {
    id: 12,
    sector: "Media and Entertainment",
  },
  {
    id: 13,
    sector: "Education",
  },
  {
    id: 14,
    sector: "Transportation",
  },
  {
    id: 15,
    sector: "Natural resources",
  },
  {
    id: 16,
    sector: "Consulting and Professional Services",
  },
  {
    id: 17,
    sector: "Operations",
  },
  {
    id: 18,
    sector: "Tourism and Hospitality",
  },
  {
    id: 19,
    sector: "Healthcare and Pharmaceuticals",
  },
  {
    id: 20,
    sector: "Gaming and Sports",
  },
  {
    id: 21,
    sector: "Automobile",
  },
  {
    id: 22,
    sector: "Telecommunications",
  },
  {
    id: 23,
    sector: "Art and Culture",
  },
  {
    id: 24,
    sector: "Social Services and Non-profits",
  },
  {
    id: 25,
    sector: "Others",
  },
];

export const servicesList: Subscription[] = [
  {
    title: "BASIC",
    index: 0,
    description: "Best for individuals and small businesses.",
    price: "$1000",
    textColor: "#188268",
    package: ["Up to 3 revisions"],
  },
  {
    title: "PRO",
    index: 1,
    description: "Best for individual and teams looking for more flexibility.",
    price: "$2500",
    textColor: "#9747FF",
    package: ["Product Branding", "Up to 5 revisions", "1 Month IT Support", "UX improvements"],
  },
  {
    title: "ELITE",
    index: 2,
    description: "Best for inidividuals and teams seeking more flexibilty.",
    price: "$4000",
    textColor: "#FF4546",
    package: [
      "Product Branding",
      "Up to 5 Revisions",
      "3 months IT Support",
      "Product Marketing",
      "Customer support"
    ],
  },
];

export interface Subscription {
  title: string;
  index: number;
  description: string;
  price: string;
  textColor: string;
  package: string[]; // list of services provided by this plan  (ex: UI/UX Design, Product and cooperate branding Service)  // TODO: define the structure of this field  // TODO: consider making it a more complex type to allow for more customization of plans (e.g., features, pricing, etc.)  // TODO: consider adding a field for a discount code or promotional offer for this plan  // TODO: consider adding a field for a
}

export const subscriptionList: Subscription[] = [
  {
    title: "BASIC",
    index: 0,
    description: "Covers the folowing:",
    price: "$500",
    textColor: "#188268",
    package: ["UI/UX Design", "Product and cooperate branding Service"],
  },
  {
    title: "PRO",
    index: 1,
    description: "Covers the following:",
    price: "$1000",
    textColor: "#9747FF",
    package: [
      "UI/UX design",
      "Product and cooperate branding",
      "All Frontend Service",
      "All Backend Service",
      "IT Support",
      "UX improvements",
    ],
  },
  {
    title: "ENTERPRISE",
    index: 2,
    description: "Covers the following",
    price: "$2500",
    textColor: "text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    package: [
      "UI/UX design",
      "Product and cooperate branding",
      "All Frontend Service",
      "All Backend Service",
      "IT Support",
      "UX improvements",
      "Digital marketing",
      "Product growth service",
      "Customer Support",
    ],
  },
];

export const tabList = [
  {
    title: "Our Services",
    index: 0,
  },
  // {
  //   title: "Mode of Operation",
  //   index: 1,
  // },
  // {
  //   title: "Payment Model",
  //   index: 2,
  // },
];
export const faqsList = [
  {
    title: "What kind of digital products does Bromuno create?",
    subtitle:
      "Bromuno typically creates dynamic websites and mobile applications, but occasionally creates static websites. In creating these products, Bromuno may take on different projects for the purpose of delivering high-quality services and meeting specific needs.",
    index: 0,
  },
  {
    title: "What is your development process like?",
    subtitle:
      "The development process at Bromuno typically follows the stages of ideation, design, strategy, development, business, and production management.",
    index: 1,
  },
  {
    title: "How much does a project typically cost?",
    subtitle:
      "The cost of a project or product may vary, depending on several factors. Your choice of Product Package or Subscription Plan also matters with the former starting at $1000 and the later at $500. To know the cost of each project, click on Get Started. ",
    index: 2,
  },
  {
    title: "Which is better for between Product Package and Subscription Plan?",
    subtitle:
      "Both services are made for your convenience and preferences. Product Package is great for one product or for a person/entity who desires a more flexible payment plan, while Subscription Plan is great for multiple products or for a person who is able to pay monthly or one-off. The Product Package starts at $1000 and the Subscription Plan at $500.",
    index: 3,
  },
  {
    title: "What is Bromuno Community?",
    subtitle:
      "Bromuno Community is a hub for tech and digital product lovers to learn, share, and collaborate. From designing and development to managing and marketing, members connect and grow together. Whether you’re looking for training, internships, jobs, or partnerships, Bromuno Community opens doors to exciting career and business opportunities.",
    index: 4,
  },
  {
    title: "Is there a cost to join the Bromuno Community",
    subtitle: "The cost of joining the Bromuno Community is free.",
    index: 5,
  },
  {
    title: "How Do I join the Bromuno Community?",
    subtitle:
      "To join the Bromuno Community, click on “Join our Community” anywhere on this platform.",
    index: 6,
  },
];

export const ourServiceList = [
  {
    title: "Ideation",

    subtitle:
      "Ideation is the process of discovery. It is where we understand and define the problem and solution the product we are about to build is solving; what kind of product it is and who will use this product. We always begin every project by going through ideation. This is often times what the client has already done, but we have to go through it so that the team and everyone else involved can be in sync with what we are trying to achieve.",
    intro: "The stage of ideation includes the following:",
    list: [
      "Review and Analysis",
      "Market Research",
      "Product Specification",
      "Brainstorming",
      "Definitions",
      "Documentation",
    ],
    image: "backdrop.png",
    index: 0,
  },
  {
    title: "Design",
    subtitle:
      "This is the stage where we create visual cues that will help both the client that the team understand the problem and how to solve it. In this stage we are able to see what the product will look like before we start building. Depending on the scale of the project, this stage can take a lot of time as it requires accuracy and a lot of attention to detail.",
    intro: "This service includes:",
    list: [
      "UI/UX Design",
      "User Research",
      "Product and Brand Identity Design",
    ],
    image: "backdrop.png",
    index: 1,
  },
  {
    title: "Strategy",
    subtitle:
      "Depending on the design and the type of product we want to build, we must come up with a strategy that will make the job achievable with minimal cost and optimized results.",
    intro: "This service includes:",
    list: [
      "Creative Direction",
      "Team Management",
      "Project Planning",
      "Business Analysis.",
    ],
    image: "backdrop.png",
    index: 2,
  },
  {
    title: "Development",
    subtitle:
      "This is the most exciting part. It is where we start laying down the first blocks of code that will eventually make up our product. It is the stage where all our plans actually turns into something real.",
    intro: "This service includes:",
    list: [
      "Coding",
      "Version Control",
      "Iteration",
      "System management",
      "Testing",
    ],
    image: "backdrop.png",
    index: 3,
  },
  {
    title: "Business",
    subtitle:
      "At the stage the product is already ready to be pushed to the market. However, this is where the real journey of digital product begins. It is likened to a successful individual that is ready for marriage. Just as a man will be joined with his bride, the product will be introduced to the market or it’s users and a new journey is unfolded. The business of digital products is what a lot of Product owners and founders often neglect. A good product if not managed properly will become stale and abandoned in no time. Product management is the lifeforce of a digital product. It is what ensures that the product remains relevant and stands the test of time.",
    intro: "This service includes:",
    list: ["Advisory", "Coaching", "Marketing", "Training"],
    image: "backdrop.png",
    index: 3,
  },
  {
    title: "Product Management",
    subtitle:
      "The section is separate because it is part of the service we render. It involves a constant practice of all the stages of product design and development with a higher emphasis on usage tracking, system improvements and updates.This is the part that ensures that a product grows and remains relevant to it’s users. It is the biggest reason why some products like Whatsapp have been able to sit at the top of the market, ahead of iMessenger, telegram and the likes of them",
    intro: "This service includes:",
    list: [
      "Usability studies",
      "Market Analysis",
      "Cyber Security",
      "Bug fixing",
      "Maintenance",
      "Community development and management",
    ],
    image: "backdrop.png",
    index: 3,
  },
];

interface ProductTypeProp {
  image: string;
  title: string;
  description: string;
}

export const ProductType: ProductTypeProp[] = [
  {
    image: "learn-1-1.png",
    title: "Dynamic Websties",
    description:
      "This is the stage where we create visual cues that will help both the client that the team",
  },
  {
    image: "learn-1-2.png",
    title: "Mobile Applications",
    description:
      "This is the stage where we create visual cues that will help both the client that the team",
  },
];

interface ReadMoreProp {
  image: React.FC;
  title: string;
}

export const ReadMore: ReadMoreProp[] = [
  {
    image: SettingIcon,
    title: "Our mode of operation",
  },
  {
    image: PaymentIcon,
    title: "Payment model",
  },
  {
    image: DocIcon,
    title: "Terms of service",
  },
];

interface ProjectForProp {
  title: string;
}

export const ProjectFor: ProjectForProp[] = [
  {
    title: "Individual",
  },
  {
    title: "An organisation",
  },
];

interface HeadersProp {
  label: string;
  route: string;
  icon: string;
  image: string;
}

export const Headers: HeadersProp[] = [
  {
    label: "Home",
    route: "/",
    icon: "HomeIcon",
    image:"/homeIcon.svg",
  },
  {
    label: "Learn",
    route: "/learn",
    icon: "WorksIcon",
    image:"/learnIcon.svg",
  },
  {
    label: "Events",
    route: "/events",
    icon: "EventsIcon",
    image:'/eventsIcon.svg'
  },
  {
    label: "Project",
    route: "/projects",
    icon: "ProjectIcon",
    image:'/projectsIcon.svg'
  },


];

interface WhyUsprop {
  title: string;
  description: string;
  stars: string;
}

export const WhyUsData: WhyUsprop[] = [
  {
    title: "Description",
    description:
      "“The Bromuno team is just breath-taking. I have not seen anything like them.”",
    stars:'/stars.svg'  
  },
  {
    title: "Description",
    description:
    "“The Bromuno team is absolutely remarkable. Their work is unlike anything I’ve ever encountered.”",
    stars:'/stars.svg'  
  },
  {
    title: "Description",
    description:
    "“The Bromuno team is awe-inspiring. Their approach is something you don’t see anywhere else.”",
    stars:'/stars.svg'  
  },
  {
    title: "Description",
    description:
    "“I’m blown away by the Bromuno team. They’re truly one of a kind.”",
    stars:'/stars.svg'  
  },
  {
    title: "Description",
    description:
    "“The Bromuno team is extraordinary. I’ve never experienced anything like their work before.”",
    stars:'/stars.svg'  
  },

];

export interface product {
  title: string;
  index: number;
  description: string;
  image: string;
}

export const create: product[] = [
  {
    title: "Mobile apps",
    index: 0,
    description: "User friendly and functional mobile apps.",
    image: "/mobileApp.svg",
  },
  {
    title: "Websites",
    index: 1,
    description:
      "Landing pages, E-commerce, CMS, social media etc.",
    image: "/website1.svg",
  },
  {
    title: "System designs",
    index: 2,
    description:
      "We design systems that help you manage your products by integrating automotive processes.",
    image: "/systemDesigns.svg",
  },
  {
    title: "Branding Identity design",
    index: 3,
    description: "Logo design, brand style, guides and more.",
    image: "/branding.svg",
  },
];

export interface item {
  title: string;
  index: number;
  description: string;
  image: string;
}

export const read: item[] = [
  {
    title: "The Product Design roadmap",
    index: 0,
    description: "A comprehensive guide on the a-b of product design.",
    image: '/green-bg.png',
  },
  {
    title: "Important Articles",
    index: 1,
    description:
      "Find out the dos and don’ts for launching your product.",
    image: '/yellow-bg.png',
  },
];

export interface prod {
  image: string;
}

export const ProdImage: prod[] = [
  {
    image: "/product1.svg"
  },
  {
    image: "/product2.svg"
  },
  {
    image: "/product3.svg"
  },
  {
    image: "/product4.svg"
  },
  {
    image: "/product5.svg"
  },
  {
    image: "/product6.svg"
  },
  {
    image: "/product7.svg"
  },
  {
    image: "/product8.svg"
  },
  {
    image: "/product9.svg"
  },
  {
    image: "/product10.svg"
  },
  {
    image: "/product11.svg"
  },
  {
    image: "/product12.svg"
  },
  {
    image: "/product13.svg"
  },
  {
    image: "/product14.svg"
  },
  {
    image: "/product15.svg"
  },
  {
    image: "/product16.svg"
  },
  {
    image: "/product17.svg"
  },
  
  
  
]