import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
