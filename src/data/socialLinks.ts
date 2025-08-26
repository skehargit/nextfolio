export type SocialItem = {
  label: string;
  title: string;
  href: string;
  icon: "github" | "linkedin";
};

export const socialItems: SocialItem[] = [
  {
    label: "GitHub",
    title: "@skehargit",
    href: "https://github.com/skehargit",
    icon: "github",
  },
  {
    label: "LinkedIn",
    title: "Sudhansu Sekhar Behera",
    href: "https://www.linkedin.com/in/sudhansu-sekhar-behera-972210249/",
    icon: "linkedin",
  },
];
