export default function BlockBody({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="px-6 py-6 bg-gray-200 flex flex-1 flex-col justify-center">
      {children}
    </div>
  );
}
