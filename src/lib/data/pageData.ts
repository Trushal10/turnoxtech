import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";
import { ServiceType } from "@/app/types/services"

export const Headerdata: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "services", href: "/#services-section" },
  { label: "FAQ", href: "/#faq-section" },
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
    imgSrc: "images/work/icon-one.svg",
    heading: "Share Your Requirements",
    subheading:
      "Tell us about your project needs and goals. Provide details about your business, target audience, and desired features to help our team understand your vision.",
  },
  {
    imgSrc: "images/work/icon-two.svg",
    heading: "Collaborate with Experts",
    subheading:
      "Work closely with our experienced developers, designers, and strategists to plan and execute your project efficiently. We ensure clear communication every step of the way.",
  },
  {
    imgSrc: "images/work/icon-three.svg",
    heading: "Launch & Grow",
    subheading:
      "Once development is complete, launch your website, app, or software with confidence. We provide support and updates to help your digital solutions thrive and scale.",
  },
];

export const Featuresdata: FeatureType[] = [
  {
    imgSrc: "images/features/featureOne.svg",
    heading: "Custom Software Solutions",
    subheading:
      "Get tailor-made web, mobile, and desktop applications designed to meet your business needs and drive growth.",
  },
  {
    imgSrc: "images/features/featureTwo.svg",
    heading: "Expert Team Support",
    subheading:
      "Work with our experienced developers, designers, and strategists who provide guidance and support throughout your project.",
  },
  {
    imgSrc: "images/features/featureThree.svg",
    heading: "Scalable & Reliable",
    subheading:
      "Our solutions are built for performance and scalability, ensuring your digital products grow seamlessly with your business.",
  },
];

export const ServicesData: ServiceType[] = [
  {
    imgSrc: "images/features/featureOne.svg",
    heading: "Laravel Development",
    subheading:
      "Build secure, fast, and scalable web applications using Laravel with clean architecture and powerful backend logic.",
  },
  {
    imgSrc: "images/services/node.svg",
    heading: "Node.js Development",
    subheading:
      "Develop high-performance APIs and real-time applications using Node.js for modern, scalable backend solutions.",
  },
  {
    imgSrc: "images/services/ecommerce.svg",
    heading: "E-commerce Development",
    subheading:
      "Create feature-rich online stores with seamless checkout, product management, and user-friendly designs.",
  },
  {
    imgSrc: "images/services/customweb.svg",
    heading: "Custom Web Application Development",
    subheading:
      "We craft fully customized web applications tailored to your business needs, ensuring flexibility and performance.",
  },
  {
    imgSrc: "images/services/erp.svg",
    heading: "ERP Development",
    subheading:
      "Design and develop ERP systems that streamline your operations, enhance productivity, and centralize your business data.",
  },
  {
    imgSrc: "images/services/maintenance.svg",
    heading: "Website Maintenance",
    subheading:
      "Keep your website secure, fast, and up to date with our ongoing maintenance and support services.",
  },
  {
    imgSrc: "images/services/website.svg",
    heading: "Website Creation",
    subheading:
      "Launch your online presence with a stunning, responsive, and SEO-friendly website tailored to your brand.",
  },
];

export const Faqdata: FaqType[] = [
  {
    heading: "1. What services does Trunox provide?",
    subheading:
      "We offer end-to-end IT solutions including Laravel and Node.js development, custom web applications, E-commerce platforms, ERP systems, and website maintenance — all designed to help your business grow digitally.",
  },
  {
    heading: "2. Do you provide custom web application development?",
    subheading:
      "Yes, we specialize in creating fully customized web applications that align with your business goals. From concept to deployment, we build scalable and secure apps tailored to your exact requirements.",
  },
  {
    heading: "3. Can you maintain and update our existing website?",
    subheading:
      "Absolutely! We provide ongoing website maintenance, updates, and performance optimization to keep your website secure, fast, and user-friendly at all times.",
  },
  {
    heading: "4. Do you develop E-commerce websites?",
    subheading:
      "Yes, our team builds modern and feature-rich E-commerce websites with secure payment gateways, inventory management, and a smooth user experience that drives sales.",
  },
  {
    heading: "5. How long does it take to build a website or application?",
    subheading:
      "The timeline depends on project complexity and features. A basic website can take 1–3 weeks, while large-scale web or ERP applications may take several months. We provide clear timelines after understanding your project scope.",
  },
  {
    heading: "6. Do you offer ongoing support after project delivery?",
    subheading:
      "Yes, Trunox provides post-launch support, maintenance, and updates to ensure your website or application runs smoothly and stays up-to-date with the latest technologies.",
  },
];

export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: "images/footer/insta.svg",
    href: "https://instagram.com/",
  },
  {
    imgsrc: "images/footer/dribble.svg",
    href: "https://dribble.com/",
  },
  {
    imgsrc: "images/footer/twitter.svg",
    href: "https://twitter.com/",
  },
  {
    imgsrc: "images/footer/youtube.svg",
    href: "https://youtube.com/",
  },
];

export const Footerlinkdata: FooterType[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "services", href: "/#services-section" },
  { label: "FAQ", href: "/#faq-section" },
  { label: "Contact Us", href: "/contact" },
];
