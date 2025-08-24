export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project ID: {id}</p>
      {/* Project details will go here */}
    </div>
  );
}
