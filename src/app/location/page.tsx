import Navbar from "@/components/shared/Navbar";
import Title from "@/components/ui/lines/Title";
import PathView from "@/components/shared/PathView";
import ItalicLine from "@/components/ui/lines/ItalicLine";

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <PathView />
      <ItalicLine />
      <Title title="Location" />
      <div className="max-w-3xl mx-auto p-4 x-border space-y-4">
        <p className="text-sm text-muted-foreground">Odisha, India.</p>
        <div className="aspect-video s-border rounded-md overflow-hidden">
          <iframe
            title="Google Maps - Odisha, India"
            src="https://www.google.com/maps?q=Odisha,India&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
