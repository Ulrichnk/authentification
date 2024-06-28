import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Check, Phone, Star } from "lucide-react";
import { Article } from "./products/article";

export default function Home() {
  return (
    <>
      {/* <div className="bg-slate-50"> */}
        <div>
        {/* <CardProduct1
        title="Product"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // img="https://m.media-amazon.com/images/I/71YXk8U4z4L._AC_SL1500_.jpg"
        available={false}
        price={100}
        img="https://www.dressself.com/cdn/shop/products/13_96095d36-6f20-423d-ae20-e1b531f97e0c.jpg?v=1651904312"
      /> */}
        <section>
          <MaxWidthWrapper className=" pb-24 pt-10 lg:grid lg:grid-cols-3 
          sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className=" col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className=" absolute w-28 left-0 -top-20 hidden lg:block">
                  <img
                    src="logo.webp"
                    alt=""
                    className="w-full"
                  />
                </div>
                <h1
                  className=" relative w-fit tracking-tight text-balance mt-16 
                font-bold !leading-tight text-gray-900 
                text-5xl md:text-6xl lg:text-7xl">
                  Your Website{" "}
                  <span className="bg-pink-500 text-white"> Custom</span> By you
                </h1>
                <p
                  className="text-gray-500 mt-8 text-lg lg:pr-10 max-w-prose 
                text-center lg:text-left text-balance md:text-wrap">
                  Sell your favorites products{" "}
                  <span className="font-semibold"> thanks buy our site </span>
                  use our products to make your life easier
                </p>
                <ul className=" mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                  {" "}
                  <div className="space-y-2">
                    {" "}
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="w-5 h-5 shrink-0 text-pink-500" />
                      100% satisfaction guarantee
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="w-5 h-5 shrink-0 text-pink-500" />
                      Modern website
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="w-5 h-5 shrink-0 text-pink-500" />
                      100% customized
                    </li>
                  </div>
                </ul>
                <div
                  className="mt-12 flex flex-col sm:flex-row items-center 
                sm:items-start gap-5 ">
                  <div className="flex -space-x-4">
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="logo.svg"
                      alt="user image"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="-col-span-full lg:col-span-1 w-full flex
             justify-center 
            px-8 sm:16px md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md;max-w-xl">
                <img
                  src=""
                  alt=""
                  className="absolute w-40 lg:w-52 left-56 -top-20 
                  select-none hidden sm:block lg:hidden xl:block"
                />
                <img 
                src=""
                alt=""
                className="absolute w-20 -left-6 -bottom-6 select-none"/>
                <Article className="w-64" imgSrc="logo.webp"/>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </>
  );
}
