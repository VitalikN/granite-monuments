import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import WakeUpBackend from "@/components/WakeUpBackend";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Product from "@/components/Product";
import Services from "@/components/Services";
import Order from "@/components/Order";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <Product />
      <Services />
      <Order />
      {/* <WakeUpBackend /> */}
    </>
  );
};

export default Home;
