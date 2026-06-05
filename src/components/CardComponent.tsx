import { Badge } from "lucide-react";
import { Card, CardHeader, CardAction, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { addToCart, cartItemsInterface } from "@/features/cart/catSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

export function CardComponent({ props }: { props: cartItemsInterface }) {
  const dispatch = useDispatch();

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
          <Badge >${props.price}</Badge>
        </CardAction>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={() => dispatch(addToCart(props))}
          className="cursor-pointer"
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}