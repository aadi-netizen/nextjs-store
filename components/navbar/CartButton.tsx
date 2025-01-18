import Link from "next/link"
import { Button } from "../ui/button"
import { LuShoppingCart } from 'react-icons/lu'


const CartButton = async () => {
  // temp
  const numItemsInCart = 8
  return (
    <Button asChild className="flex justify-center items-center relative  " size="icon" variant="outline">
      <Link href="/cart">
        <LuShoppingCart className="w-6 h-6 p-0.5" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton