import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const CartSummary = ({ totalItems, subtotal }) => {
  const deliveryFee = 40
  const total = subtotal + deliveryFee

  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Delivery</span>
          <span>₹{deliveryFee}</span>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <Button className="w-full mt-4">
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  )
}

export default CartSummary
