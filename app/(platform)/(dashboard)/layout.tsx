import Navbar from "./_components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full fixed w-full">
      <Navbar />
      {children}
    </div>
  );
}
