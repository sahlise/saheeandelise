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
        <div className="bg-weddingIvory">{children}</div>
      </div>
    </section>
  );
}

// style={{ height: 'calc(100vh - 24px)'}}