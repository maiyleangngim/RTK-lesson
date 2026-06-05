import ButtonComponent from "@/components/ButtonComponent";
import CartDetailComponent from "@/components/CartDetailComponent";
import GetCountComponent from "@/components/GetCountComponent";

export default function Home() {
  return (
    <div className='p-8'>
      <ButtonComponent/>
      <GetCountComponent/>
      <CartDetailComponent/>
    </div>
  );
}
