import Navbar from "@/components/Navbar";

export default function WeddingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col h-24"><Navbar/></div>
        <div className="flex flex-grow px-20">{children}</div>
      </div>
    </section>
  );
}