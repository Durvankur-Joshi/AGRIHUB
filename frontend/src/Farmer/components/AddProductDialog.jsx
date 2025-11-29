import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ProductCategories from "./ProductCategories";
import { Toaster, toast } from "react-hot-toast";


const AddProductDialog = ({ children }) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");


    const handleAddProduct = async () => {
        if (!name || !desc || !category || !price || !quantity || !unit || !image || !location) {
            toast.error("Please fill all fields");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("unit", unit);
        formData.append("image", image);
        formData.append("location", location);

        try {
            const res = await fetch("http://localhost:8080/api/farmer/products/my-products", {
                method: "GET",
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Product added successfully!");
                setName("");
                setDesc("");
                setCategory("");
                setPrice("");
                setQuantity("");
                setUnit("");
                setImage(null);
                setLocation("");

            } else {
                toast.error(data.message || "Error adding product");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error");
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Dialog>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add new product</DialogTitle>
                        <DialogDescription>
                            Fill the details to add a new product to your inventory.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="grid gap-2">
                            <Label>Name</Label>
                            <Input value={name} onChange={(e) => setName(e.target.value)}
                                placeholder="Name of product" />
                        </div>


                        <div className="grid gap-2">
                            <Label>Description</Label>
                            <Input value={desc} onChange={(e) => setDesc(e.target.value)}
                                placeholder="Product description" />
                        </div>


                        <div className="grid gap-2">
                            <Label>Category</Label>
                            <ProductCategories onSelect={(val) => setCategory(val)} />
                        </div>


                        <div className="grid gap-2">
                            <Label>Price</Label>
                            <Input type="number" value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price" />
                        </div>


                        <div className="grid gap-2">
                            <Label>Quantity</Label>
                            <Input type="number" value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Quantity" />
                        </div>


                        <div className="grid gap-2">
                            <Label>Unit</Label>
                            <Input value={unit} onChange={(e) => setUnit(e.target.value)}
                                placeholder="kg / dozen / pieces" />
                        </div>


                        <div className="grid gap-2">
                            <Label>Image</Label>
                            <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        </div>


                        <div className="grid gap-2">
                            <Label>Location</Label>
                            <Input value={location} onChange={(e) => setLocation(e.target.value)}
                                placeholder="Pune" />
                        </div>

                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <DialogClose asChild>
                            <Button onClick={handleAddProduct}>
                                Add Product
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AddProductDialog;
