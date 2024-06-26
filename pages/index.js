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

  const dataMapping = [
    {
      id: 1,
      img: "/review_bg.png",
      title: "Review",
      link: "/review",
    },
    {
      id: 2,
      img: "/question_bg.png",
      title: "Accordion",
      link: "/question"
    },
    {
      id: 3,
      img: "/menu_bg.png",
      title: "Menu",
      link: "/menu"
    },
    {
      id: 4,
      img: "/para_bg.png",
      title: "Paragraph",
      link: "/paragraph"
    },
    {
      id: 5,
      img: "/sidebar_bg.png",
      title: "SideBar & Model",
      link: "/sidebar"
    }
  ]
  return (
    <main className="bg-gray-200 min-h-screen w-full pb-10">
      <div className="flex justify-center items-center flex-col mb-[3rem]">
        <h1 className="text-[2.5rem] font-bold text-blacky  tracking-wide capitalize mt-20">React Projects</h1>
        <div className="mx-auto h-1 w-24 bg-blue mt-2"></div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center px-6 md:px-10 xl:px-28 gap-10 md:gap-20 pt-16">

        {dataMapping.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="border-2 bg-white shadow-xl w-full min-h-80 rounded-xl"
          >
            <Image src={item.img} alt={item.title} width={640} height={434} className="object-cover object-center w-full h-80" />
            <p className="text-center py-3 text-xl md:text-2xl font-medium">{item.title}</p>
          </Link>
        ))}
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
