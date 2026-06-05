"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addToCart, cartItemsInterface } from "@/features/cart/catSlice";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { Badge } from "./ui/badge";

export function CardProductComponent({ props }: { props: cartItemsInterface }) {
  const dispatch = useAppDispatch();

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        width={1550}
        height={1550}
        src={props?.image}
        alt="Event cover"
        className="relative z-20 h-100 w-full object-contain "
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${props.price}</Badge>
        </CardAction>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button
          type="button"
          onClick={() => dispatch(addToCart(props))}
          className="cursor-pointer"
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}