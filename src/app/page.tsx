import Hero from "@/components/Hero";
import "./page.module.css";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Product from "@/components/Product";
import Order from "@/components/Order";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <Product />
      <Services />
      <Order />
    </>
  );
};
export default Home;
