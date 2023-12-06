import Book from "../../assets/BookSVG.svg";
import Money from "../../assets/MoneySVG.svg"
import Badge from "../../assets/BadgeSVG.svg"
import Apple from "../../assets/AppleSVG.svg"

export const offers = [
  {
    image: Book,
    label: "Highly-Qualified",
    textOne: "TEACHER &",
    textTwo: "STAFF",
    paragraph:
      "Our learning style stands out, offering a truly distinctive experience...",
    headerOne: "EMPOWERING KIDS TO REACH THEIR FULL POTENTIAL",
    bulletPoints: [
      "Tailored curriculum for each age group",
      "Enrollment flexibility with convenient hours",
      "Stringent safety guidelines, staff CPR/First Aid certified",
    ],
    linkText: "Discover more about our staff",
    link: "/curriculum",
  },
  {
    image: Money,
    label: "Quality Care &",
    textOne: "COMPETITIVE",
    textTwo: "RATES",
    paragraph:
      "Providing unmatched child care solutions with exceptional value...",
    headerOne: "AFFORDABLE TUITION WITH EASY PAYMENT PLANS",
    bulletPoints: [
      "Budget-Friendly Fees, Seamless Payment Solutions",
      "Sibling Savings for Multiple Children",
      "Comprehensive Tuition Packages, Covering All Fees",
    ],
    linkText: "Discover more about tuition",
    link: "/contact",
  },
  {
    image: Badge,
    label: "State",
    textOne: "LICENSED &",
    textTwo: "CERTIFIED",
    paragraph:
      "Exceptional learning in a caring space, ensuring parents' peace of mind...",
    headerOne: "WHY CHOOSE US FOR LEARNING",
    bulletPoints: [
      "Customized Learning Paths for Different Age Groups",
      "Flexible Enrollment with Hours That Suit You Best",
      "We Prioritize Safety: Team CPR/First Aid Certified",
    ],
    linkText: "Discover more about us",
    link: "/about",
  },
  {
    image: Apple,
    label: "Nutritious",
    textOne: "MEALS &",
    textTwo: "SNACKS",
    paragraph:
      "Smart Snacking, Smarter Learning for Kids...",
    headerOne: "DELICIOUS NUTRITION FOR YOUR TINY TOT",
    bulletPoints: [
      "Breakfast, lunch & snacks included",
      "Delicious and Nutrient-Packed",
      "Simple meal plans",
    ],
    linkText: "Discover more about Nutrition & Meals",
    link: "/contact",
  },
];
