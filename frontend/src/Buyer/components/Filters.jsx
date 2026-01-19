import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { useState } from "react"
import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

const Filters = () => {
  const [position, setPosition] = React.useState("bottom");
  const [value, setValue] = useState([200, 800])

  return (
    <>
      <div
        className="flex  gap-10 ">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Sort By</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="top">Price: Low to high</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">Price: High to low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">Name: A to Z</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Category </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="Vegitable">Vegitable</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Fruits">Fruits</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Grains">Grains</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <div className="w-full max-w-md">
            <Field>
              <FieldTitle>Price Range</FieldTitle>
              <FieldDescription>
                Set your budget range ($
                <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
                <span className="font-medium tabular-nums">{value[1]}</span>).
              </FieldDescription>
              <Slider
                value={value}
                onValueChange={setValue}
                max={1000}
                min={0}
                step={10}
                className="mt-2 w-full"
                aria-label="Price Range"
              />
            </Field>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filters