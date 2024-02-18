import Navbar from "@/app/wedding/components/Navbar";

export default function WeddingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col h-screen">
        <div className="h-24"><Navbar/></div>
        <div style={{ height: 'calc(100vh - 24px)'}} className="bg-orange-50">{children}</div>
      </div>
    </section>
  );
}