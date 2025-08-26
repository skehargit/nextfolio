export type HeroData = {
  name: string;
  titles: string[];
  firstImageSrc: string;
  secondImageSrc: string;
};

const hero: HeroData = {
  name: "Sudhansu Sekhar Behera",
  titles: [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "ReactJs Developer",
    "ReactJs Game Developer",
  ],
  firstImageSrc: "/images/profile-ghibli.jpg",
  secondImageSrc: "/images/profile.jpg",
};

export default hero;
