import Navbar from "@/components/shared/Navbar";
import Title from "@/components/ui/lines/Title";
import DoubleBoxLine from "@/components/ui/lines/DoubleBoxLine";
import PathView from "@/components/shared/PathView";
import { chunkProjectArray } from "@/lib/arrayUtils";
import { projects } from "@/data/projects";
import PairProject from "@/components/ui/PairProject";

export default function ProjectsPage() {
  const chunkedProjects = chunkProjectArray(projects, 2);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PathView />
      <Title title="Projects" />
      <DoubleBoxLine />
      {chunkedProjects.map((pair, idx) => (
        <div key={idx}>
          <PairProject pair={pair} idx={idx} />
          <DoubleBoxLine />
        </div>
      ))}
    </div>
  );
}
