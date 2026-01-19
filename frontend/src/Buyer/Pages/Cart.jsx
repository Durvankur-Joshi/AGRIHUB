import React from "react"
import CartItem from "../components/Cart/CartItem"
import CartSummary from "../components/Cart/CartSummary"
import { ScrollArea } from "@/components/ui/scroll-area"

const Cart = () => {
  // Temporary static data (replace with context / API later)
  const cartItems = [
    { id: 1, price: 120, quantity: 1 },
    { id: 2, price: 80, quantity: 2 },
  ]

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT: Cart Items */}
        <ScrollArea className="flex-1 h-[70vh] pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} />
            ))
          ) : (
            <p className="text-muted-foreground">
              Your cart is empty.
            </p>
          )}
        </ScrollArea>

        {/* RIGHT: Summary */}
        <CartSummary
          totalItems={totalItems}
          subtotal={subtotal}
        />
      </div>
    </div>
  )
}

export default Cart
