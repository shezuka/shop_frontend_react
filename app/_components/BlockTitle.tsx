export default function BlockTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <h2 className="bg-violet-800 py-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
      {children}
    </h2>
  );
}
