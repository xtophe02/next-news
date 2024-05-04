export default function ArchiveLayout({ latest, archive }) {
  return (
    <div>
      <section>{archive}</section>
      <hr className="border-gray-800 dark:border-white" />
      <section>{latest}</section>
    </div>
  );
}
