import Navbar from "@/components/shared/Navbar";
import Title from "@/components/ui/lines/Title";
import MainPjConWrapper from "@/components/ui/lines/MainPjConWrapper";
import DoubleBoxLine from "@/components/ui/lines/DoubleBoxLine";
import MainProjectContainer from "@/components/ui/MainProjectContainer";
import PathView from "@/components/shared/PathView";
import ItalicLine from "@/components/ui/lines/ItalicLine";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PathView />
      <ItalicLine />
      <Title title="Projects" />
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      
      <DoubleBoxLine />
    </div>
  );
}
