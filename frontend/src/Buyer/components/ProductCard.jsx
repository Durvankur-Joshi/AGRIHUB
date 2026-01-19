import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'

const ProductCard = () => {
  return (
    <>
      <Card className="p-4 w-full max-w-2xl shadow-md hover:shadow-lg transition-shadow duration-300 m-6 ">
        <div className="flex gap-4">

          {/* Product Image */}
          <div className="w-40 h-40 ">
            <img
              src="https://assets.clevelandclinic.org/transform/LargeFeatureImage/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
              alt="Product"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between flex-1">

            {/* Title + Price + Stock */}
            <div>
              <CardTitle className="text-lg font-semibold">
                Apple (Fresh)
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                ₹120 / kg • In Stock
              </p>

              <p className="mt-1 text-sm">
                <span className="font-medium">Category:</span> Fruits
              </p>
            </div>

            {/* Description */}
            <CardContent className="px-0 py-2 text-sm text-gray-600">
              Fresh farm apples, rich in nutrients and perfect for daily consumption. sdguigaifgfgfggiofod
            </CardContent>

            {/* Seller + Actions */}
            <CardFooter className="px-0 pt-2 flex justify-between items-center">
              <p className="text-sm">
                <span className="font-medium">Seller:</span> Local Farm
              </p>

              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="px-3 py-1 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700">
                      Add to Cart
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardFooter>

          </div>
        </div>
      </Card>

    </>
  )
}

export default ProductCard