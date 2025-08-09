import { Navbar } from "./Navbar";
// import { UploadModal } from "../modals";

interface InterfaceProps {
  children: React.ReactNode;
}

export const Interface = ({ children }: InterfaceProps) => {
  return (
    <>
      {/* <UploadModal /> */}
      <div className="flex h-screen flex-col text-theme">
        <Navbar />
        {/* margin spacing for sidebar and nav */}
        <main className="scroll-gutter flex-1 overflow-y-auto bg-primary px-sides-app pt-16">
          {children}
        </main>
      </div>
    </>
  );
};
