import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, Trash } from "lucide-react";
import AddProductDialog from "./components/AddProductDialog";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { BaggageClaim } from 'lucide-react';
const products = [
  {
    id: 1,
    name: "Tomatoes",
    category: "Vegetable",
    price: "30/kg",
    stock: 50,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Organic Onions",
    category: "Vegetable",
    price: "40/kg",
    stock: 20,
    image: "https://via.placeholder.com/150",
  },
];


const MyProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold">My Products</h1>
        <div className="flex items-center gap-3">
          <Button  className="px-4"
          onClick={()=> navigate('/farmerdashboard')} > <LayoutDashboard /> Dashboard</Button>
          <Button className="px-4"
          onClick={()=> navigate('/farmerdashboard/orders')} >
            <BaggageClaim /> Orders</Button>
          <AddProductDialog>
          <Button className="px-6">+ Add Product</Button>
          </AddProductDialog>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 w-full">
        <Input placeholder="Search Products..." className="w-1/3" />

        <Select>
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vegetable">Vegetable</SelectItem>
            <SelectItem value="fruit">Fruit</SelectItem>
            <SelectItem value="crop">Crop</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Stock Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in">In Stock</SelectItem>
            <SelectItem value="out">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <ScrollArea className="h-[70vh] w-full pr-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-xl"
                />

                <div className="flex justify-between text-sm">
                  <span className="font-medium">Category:</span>
                  <span>{product.category}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="font-medium">Price:</span>
                  <span>{product.price}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="font-medium">Stock:</span>
                  <span>{product.stock}kg</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Pencil size={16} /> Edit
                  </Button>

                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <Trash size={16} /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default MyProduct