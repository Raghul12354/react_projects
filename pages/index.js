import React from "react";
import Link from "next/link";
import Image from "next/image";

// import Birthday from "../components/birthday-project/birthday";
// import Tour from "../components/tour-project/tour";
// import Review from "../components/reviews/review";
// import Question from "../components/questions/questions";
// import Menu from "../components/Menu/menu";
// import Tabs from "../components/tabs-project/tabs";
// import Slider from "../components/slider-reviews/slider";
// import Paragraph from "../components/paragraph/paragraph";
// import Grocery from "../components/grocery-project/grocery-bud";
// import Navbar from "../components/navbar-project/navbar";
// import SideBar from "../components/sidebar/sideBar";
// import SliderComponent from "../components/slider-reviews/newSlider";
// import Products from "../components/Products/products";
// import Cart from "../components/cart-project/cart";
// import Clone from "../components/cart-project/Clone-cart/clone";

function index() {
  return (
    <main className="bg-gray-200 min-h-screen w-full pb-10">
      <div className="flex justify-center items-center flex-col mb-[3rem]">
        <h1 className="text-[2.5rem] font-bold text-blacky  tracking-wide capitalize mt-20">React Projects</h1>
        <div className="mx-auto h-1 w-24 bg-blue mt-2"></div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center px-6 md:px-20 xl:px-40 gap-10 md:gap-20 pt-16">
        <Link
          href="/review"
          className="relative border-2 text-2xl font-semibold flex items-center justify-center bg-white shadow-xl w-full h-60 rounded-xl"
        >
          {/* <Image src="/review_bg.png" alt="" fill={true} sizes="" className="object-cover object-center" /> */}
          Review
        </Link>
        <Link
          href="/question"
          className="border-2 text-2xl font-semibold flex items-center justify-center bg-white shadow-xl w-full h-60 rounded-xl"
        >
          {" "}
          Accordion
        </Link>
        {" "}
        <Link
          href="/menu"
          className="border-2 text-2xl font-semibold flex items-center justify-center bg-white shadow-xl w-full h-60 rounded-xl"
        >
          {" "}
          Menu
        </Link>
        <Link
          href="/paragraph"
          className="border-2 text-2xl font-semibold flex items-center justify-center bg-white shadow-xl w-full h-60 rounded-xl"
        >
          {" "}
          Paragraph
        </Link>
        <Link
          href="/sideBar"
          className="border-2 text-2xl font-semibold flex items-center justify-center bg-white shadow-xl w-full h-60 rounded-xl"
        >
          {" "}
          SideBar
        </Link>
      </ul>

      {/* <Birthday /> works */}
      {/* <Tour /> */}
      {/* <Review /> works */}
      {/* <Question /> works */}
      {/* <Menu /> works */}
      {/* <Tabs /> */}
      {/* <Slider /> */}
      {/* <SliderComponent /> */}
      {/* <Paragraph /> works */}
      {/* <Grocery /> */}
      {/* <Navbar /> */}
      {/* <SideBar/> works */}
      {/* <Products /> */}
      {/* <Cart /> */}
      {/* <Clone /> */}
    </main>
  );
}

export default index;
