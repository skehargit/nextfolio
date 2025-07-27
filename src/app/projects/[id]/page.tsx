export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project ID: {params.id}</p>
      {/* Project details will go here */}
    </div>
  );
}
