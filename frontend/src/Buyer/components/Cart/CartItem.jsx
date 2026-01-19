import React from 'react'
import {
  Card,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CartItem = () => {
  return (
    <Card className="p-4 w-full max-w-3xl shadow-md hover:shadow-lg transition-shadow duration-300 m-6">

      <div className="flex items-center gap-6">

        {/* LEFT: Product Image */}
        <div className="w-32 h-32">
          <img
            src="https://assets.clevelandclinic.org/transform/LargeFeatureImage/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
            alt="Product"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <Separator orientation="vertical" className="h-28" />

        {/* MIDDLE: Product Info */}
        <div className="flex flex-col justify-between flex-1">

          <div>
            <CardTitle className="text-lg font-semibold">
              Apple (Fresh)
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              ₹120 / kg • In Stock
            </p>

            <p className="text-sm mt-1">
              <span className="font-medium">Category:</span> Fruits
            </p>

            <p className="text-sm">
              <span className="font-medium">Seller:</span> Local Farm
            </p>
          </div>

          <Button
            variant="destructive"
            size="sm"
            className="w-fit mt-3"
          >
            Remove
          </Button>

        </div>

        <Separator orientation="vertical" className="h-28" />

        {/* RIGHT: Quantity + Price */}
        <div className="flex flex-col items-end gap-3">

          <Select>
            <SelectTrigger className="w-20">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>

          <p className="text-lg font-semibold text-right m-5">
            ₹120
          </p>
        </div>

      </div>
    </Card>
  )
}

export default CartItem
