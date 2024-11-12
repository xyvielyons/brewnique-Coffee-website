import Navbar from "@/components/shared/Navbar";
import Home from "@/components/shared/Home";
import About from "@/components/shared/About";
export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </div>
  );
}
