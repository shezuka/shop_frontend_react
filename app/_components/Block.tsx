export default function Block({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="rounded-md shadow-2xl flex flex-1 flex-col justify-center">
      {children}
    </div>
  );
}
