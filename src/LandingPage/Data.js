// import tour1 from "./images/tour-1.jpeg";
// import tour2 from "./images/tour-2.jpeg";
// import tour3 from "./images/tour-3.jpeg";
// import tour4 from "./images/tour-4.jpeg";
import pic from "./images/pop.jpeg";

export const Pagelink = [
  {
    id: 1,
    href: "#home",
    text: "Membership",
  },
  {
    id: 2,
    href: "#about",
    text: "Learn more",
  },
  {
    id: 3,
    href: "#Service",
    text: "Join the club",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.facebook.com",
    icon: "fab fa-squarespace",
  },
];

export const body = [
  {
    id: 1,
    image: pic,
  },
];

export const inputs = [
  {
    id: 1,
    name: "Name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "name should be 3-16 characters and shouldn't include any special character!",
    label: "Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },

  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];
