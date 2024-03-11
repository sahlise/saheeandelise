'use client'
import Navbar from "@/app/wedding/components/Navbar";
import {NextUIProvider} from "@nextui-org/system";

export default function WeddingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
    <section>
      <div className="flex flex-col h-screen">
        <div className="h-24"><Navbar/></div>
        <div className="bg-white h-full">{children}</div>
      </div>
    </section>
    </NextUIProvider>
  );
}

// style={{ height: 'calc(100vh - 24px)'}}