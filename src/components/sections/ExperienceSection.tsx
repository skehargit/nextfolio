import { experiences } from "@/data/experience";
import Experience from "../Experience";
import SectionItemFrame from "@/components/ui/lines/SectionItemFrame";

export default function ExperienceSection() {
  return (
    <>
      {experiences.map((exp, idx) => (
        <SectionItemFrame
          key={idx}
          isFirst={idx === 0}
          isLast={idx === experiences.length - 1}
        >
          <Experience {...exp} />
        </SectionItemFrame>
      ))}
    </>
  );
}
