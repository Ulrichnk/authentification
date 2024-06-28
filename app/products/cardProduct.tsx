import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

type CardProductProps = {
  className?: string;
  imgs: string[];
  description: string;
  price?: number;
  available?: boolean;
  title: string;
};

export const CardProduct: React.FC<CardProductProps> = ({
  className,
  imgs,
  description,
  price,
  available,
  title,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-center w-full h-screen items-center rounded-md bg-gray-100 "
      )}>
      <Card
        className={cn(
          className,
          "flex justify-center flex-col w-[400px] h-[500px] shadow-md"
        )}>
        <CardHeader className="flex items-center">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent className="rounded-sm bg-black">
              {imgs.map((img: string, index: number) => (
                <CarouselItem key={index}>
                  <Image
                    src={img}
                    alt={`${title} image ${index + 1}`}
                    width={200}
                    height={100}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>{description}</p>
          {price !== undefined && <p className="price">{price} €</p>}
          {available !== undefined && (
            <p className={available ? "available" : "unavailable"}>
              {available ? "In stock" : "Out of stock"}
            </p>
          )}
          <Button>Go somewhere</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

type CardProductProps1 = {
  className?: string;
  img: string;
  description: string;
  price?: number;
  available?: boolean;
  title: string;
};
export const CardProduct1: React.FC<CardProductProps1> = ({
  className,
  img,
  description,
  price,
  available,
  title,
  ...props
}) => {
  // const image =
  //   "bg-[url(https://m.media-amazon.com/images/I/71YXk8U4z4L._AC_SL1500_.jpg)]";

  const image = "bg-[url(" + img + ")]";

  return (
    <div
      className={cn(
        className,
        "flex justify-center w-full h-screen items-center rounded-md bg-gray-100 "
      )}>
      <Card
        className={cn(
          className,
          "flex w-64 justify-center flex-col shadow-md"
        )}>
        <CardHeader className="flex items-center">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              image,
              " h-52 bg-contain bg-center bg-no-repeat border"
            )}></div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>{description}</p>
          {price !== undefined && <p className="price">{price} €</p>}
          {available !== undefined && (
            <p className={available ? "available" : "unavailable"}>
              {available ? "In stock" : "Out of stock"}
            </p>
          )}
          <Button>add to bakst</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// export default { CardProduct, CardProduct1 };
