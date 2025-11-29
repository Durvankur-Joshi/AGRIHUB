import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ProductCategories = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="Fruits">Fruits</SelectItem>
          <SelectItem value="Vegitable">Vegitable</SelectItem>
          <SelectItem value="Dairy & Eggs">Dairy & Eggs</SelectItem>
          <SelectItem value="Grains & Pulses">Grains & Pulses</SelectItem>
          <SelectItem value="Spices & Herbs">Spices & Herbs</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ProductCategories
