import { CardComponent } from "@/components/CardProductComponent";
import { cartItemsInterface } from "@/features/cart/catSlice";

export default function ProductPage() {
  const items: cartItemsInterface[] = [
    {
      id: 1,
      name: "Armchair",
      image:
        "https://shopping.haworth.com/cdn/shop/files/VARIANT-1-Aloha-Active-Blue.jpg?v=1756673402&width=1600",
      price: 999,
      quantity: 10,
    },
    {
      id: 2,
      name: "Wingback Chair",
      image:
        "https://bosq.in/wp-content/uploads/2023/10/AYX-202-2-1.webp",
      price: 899,
      quantity: 10,
    },
    {
      id: 3,
      name: "Ergonomic Chair",
      image:
        "https://valueofficefurniture.com.au/wp-content/uploads/2022/02/Initial-Basics-High-Back-Chair-Black-Fabric-no-Arms.jpg",
      price: 1299,
      quantity: 10,
    },
    {
      id: 4,
      name: "Bar Stool",
      image:
        "https://vermontwoodsstudios.com/cdn/shop/files/Classic-Shaker-1-Chair_Arm_Wood_Seat.jpg?v=1768329008&width=1946",
      price: 799,
      quantity: 10,
    },
    {
      id: 5,
      name: "Bar Stool",
      image:
        "https://vermontwoodsstudios.com/cdn/shop/files/Classic-Shaker-1-Chair_Arm_Wood_Seat.jpg?v=1768329008&width=1946",
      price: 799,
      quantity: 10,
    },
    {
      id: 6,
      name: "Bar Stool",
      image:
        "https://vermontwoodsstudios.com/cdn/shop/files/Classic-Shaker-1-Chair_Arm_Wood_Seat.jpg?v=1768329008&width=1946",
      price: 799,
      quantity: 10,
    },
    {
      id: 7,
      name: "Wingback Chair",
      image:
        "https://bosq.in/wp-content/uploads/2023/10/AYX-202-2-1.webp",
      price: 899,
      quantity: 10,
    },
    {
      id: 8,
      name: "Wingback Chair",
      image:
        "https://bosq.in/wp-content/uploads/2023/10/AYX-202-2-1.webp",
      price: 899,
      quantity: 10,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item.id}>
          <CardComponent props={item} />
        </div>
      ))}
    </div>
  );
}