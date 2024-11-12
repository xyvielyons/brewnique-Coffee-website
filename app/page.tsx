import Navbar from "@/components/shared/Navbar";
import Home from "@/components/shared/Home";
import About from "@/components/shared/About";
import Menu from "@/components/shared/Menu";
import Facility from "@/components/shared/Facility";
export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Menu></Menu>
      <Facility></Facility>
    </div>
  );
}
