import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";
import { ServiceType } from "@/app/types/services";

export const Headerdata: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];


export const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: "images/companies/birdseye.svg",
  },
  {
    imgSrc: "images/companies/break.svg",
  },
  {
    imgSrc: "images/companies/keddar.svg",
  },
  {
    imgSrc: "images/companies/shield.svg",
  },
  {
    imgSrc: "images/companies/tandov.svg",
  },
  {
    imgSrc: "images/companies/tree.svg",
  },
];

export const workdata: WorkType[] = [
  {
    icon: "mdi:clipboard-text-outline",
    heading: "Share Your Requirements",
    subheading:
      "Tell us about your project needs and goals. Provide details about your business, target audience, and desired features to help our team understand your vision.",
  },
  {
    icon: "mdi:account-group-outline",
    heading: "Collaborate with Experts",
    subheading:
      "Work closely with our experienced developers, designers, and strategists to plan and execute your project efficiently. We ensure clear communication every step of the way.",
  },
  {
    icon: "mdi:rocket-launch-outline",
    heading: "Launch & Grow",
    subheading:
      "Once development is complete, launch your website, app, or software with confidence. We provide support and updates to help your digital solutions thrive and scale.",
  },
];

export const portfolioData = [
  {
    title: "E-commerce Website",
    image: "https://qlinkon.com/wp-content/uploads/2025/03/4-7-410x283.jpg",
    link: "#",
  },
  {
    title: "Corporate Website",
    image: "https://qlinkon.com/wp-content/uploads/2025/03/4-7-410x283.jpg",
    link: "#",
  },
  {
    title: "Mobile App Design",
    image: "https://qlinkon.com/wp-content/uploads/2025/03/4-7-410x283.jpg",
    link: "#",
  },
  {
    title: "Custom Web App",
    image: "https://qlinkon.com/wp-content/uploads/2025/03/4-7-410x283.jpg",
    link: "#",
  },
];

export const ServicesData: ServiceType[] = [
  {
    imgSrc: "/images/services/websitedevelopment-icon.webp",
    heading: "Website Development",
    subheading:
      "Build responsive, modern, and high-performance websites tailored to your brand and business goals.",
  },
  {
    imgSrc: "/images/services/mobileappdevelopment-icon.webp",
    heading: "Mobile Application Development",
    subheading:
      "Create user-friendly Android and iOS apps that deliver seamless performance and great user experience.",
  },
  {
    imgSrc: "/images/services/ecommercedevelopment-icon.webp",
    heading: "E-commerce Development",
    subheading:
      "Launch powerful online stores with secure payment gateways, product management, and easy scalability.",
  },
  {
    imgSrc: "/images/services/csw-icon.webp",
    heading: "Custom Software Development",
    subheading:
      "Develop tailored software solutions to automate workflows and boost business efficiency.",
  },
  {
    imgSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/finance-analysis-3d-icon-png-download-7656002.png",
    heading: "ERP Development",
    subheading:
      "Design and implement ERP systems that centralize business operations and improve productivity.",
  },
  {
    imgSrc: "/images/services/apiintegrations-icon.webp",
    heading: "API Integrations",
    subheading:
      "Connect your systems and apps smoothly with secure, efficient, and scalable API integrations.",
  },
  {
    imgSrc: "/images/services/socialmediamarketing-icon.webp",
    heading: "Social Media Marketing",
    subheading:
      "Grow your online presence with creative campaigns that connect your brand to the right audience.",
  },
  {
    imgSrc: "/images/services/emailmarketing-icon.webp",
    heading: "Email Marketing",
    subheading:
      "Engage customers and drive conversions with strategic, result-focused email campaigns.",
  },
];

export const testimonials = [
  {
    name: "Rahul Mehta",
    company: "BrightWave Technologies",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
    message:
      "Working with Trunox transformed our digital presence. Their attention to detail and timely delivery made our website a complete success.",
  },
  {
    name: "Sneha Patel",
    company: "CraftNest Studio",
    img: "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png",
    message:
      "The Trunox team was incredibly supportive and professional. They delivered beyond expectations and helped our brand stand out online.",
  },
  {
    name: "Vikram Singh",
    company: "NextEdge Solutions",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
    message:
      "From design to deployment, Trunox handled everything smoothly. Their expertise in modern technologies made our project a breeze.",
  },
  {
    name: "Anjali Shah",
    company: "Nova Retail",
    img: "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png",
    message:
      "Trunox Tech brought our vision to life. Their team is highly responsive and focused on quality from start to finish.",
  },
  {
    name: "Rahul Mehta",
    company: "BrightWave Technologies",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
    message:
      "Working with Trunox transformed our digital presence. Their attention to detail and timely delivery made our website a complete success.",
  },
  {
    name: "Sneha Patel",
    company: "CraftNest Studio",
    img: "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png",
    message:
      "The Trunox team was incredibly supportive and professional. They delivered beyond expectations and helped our brand stand out online.",
  },
  {
    name: "Vikram Singh",
    company: "NextEdge Solutions",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
    message:
      "From design to deployment, Trunox handled everything smoothly. Their expertise in modern technologies made our project a breeze.",
  },
  {
    name: "Anjali Shah",
    company: "Nova Retail",
    img: "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png",
    message:
      "Trunox Tech brought our vision to life. Their team is highly responsive and focused on quality from start to finish.",
  },
];

export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: "/images/footer/insta.svg",
    href: "https://instagram.com/",
  },
  {
    imgsrc: "/images/footer/dribble.svg",
    href: "https://dribble.com/",
  },
  {
    imgsrc: "/images/footer/twitter.svg",
    href: "https://twitter.com/",
  },
  {
    imgsrc: "/images/footer/youtube.svg",
    href: "https://youtube.com/",
  },
];

export const Footerlinkdata: FooterType[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];
