import { educations } from "@/data/education";
import Education from "../Education";
import SectionItemFrame from "@/components/ui/lines/SectionItemFrame";

export default function EducationSection() {
  return (
    <>
      {educations.map((edu, idx) => (
        <SectionItemFrame
          key={idx}
          isFirst={idx === 0}
          isLast={idx === educations.length - 1}
        >
          <Education {...edu} />
        </SectionItemFrame>
      ))}
    </>
  );
}
