import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Logo from "../assets/Logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import UpdateDialog from "./components/UpdateDialog";
import AddProductDialog from "./components/AddProductDialog";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, BaggageClaim } from "lucide-react";

const Orders = () => {
  const [position, setPosition] = useState("all");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleStatusUpdate = (val) => {
    setStatus(val);
    console.log("Updated Status:", val);
  };

  const orders = [
    { id: "#1245", product: "Tomatoes", buyer: "Rahul", quantity: "5kg", status: "Pending", price: "200" },
    { id: "#1246", product: "Potatoes", buyer: "Sneha", quantity: "10kg", status: "Delivered" },
    { id: "#1247", product: "Onions", buyer: "Amit", quantity: "7kg", status: "Delivered" },
    { id: "#1248", product: "Carrots", buyer: "Priya", quantity: "4kg", status: "Pending" },
    { id: "#1249", product: "Cabbage", buyer: "Neha", quantity: "3pcs", status: "Delivered" },
    { id: "#1250", product: "Spinach", buyer: "Jay", quantity: "2kg", status: "Delivered" },
  ];

  return (
    <div className="w-full h-[90vh] p-6 bg-white rounded-lg border">
      <ResizablePanelGroup direction="vertical" className="w-full h-full rounded-lg border">

        <ResizablePanel defaultSize={20} minSize={12}>
          <div className="flex items-center justify-between h-full p-4 bg-gray-100 border-b">
            <img src={Logo} className="w-32 object-contain" alt="logo" />
            <h1 className="text-2xl font-semibold">Orders Received</h1>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="pending">Pending</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="accepted">Accepted</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        <div className=" w-full flex justify-center p-5 items-center gap-10 bg-slate-100 ">
          <AddProductDialog>
            <Button className="px-6">+ Add Product</Button>
          </AddProductDialog>
          <Button className="px-4"
            onClick={() => navigate('/farmerdashboard')} > <LayoutDashboard /> Dashboard</Button>
          <Button className="px-4"
            onClick={() => navigate('/farmerdashboard/myproduct')} > <LayoutDashboard />My product</Button>
        </div>

        <ResizablePanel defaultSize={80} minSize={40}>
          <div className="h-full p-6 bg-gray-50 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Order Table</h2>

            <ScrollArea className="flex-1 rounded-md border bg-white">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Buyer Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {orders.map((order, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.buyer}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>
                        <span
                          className={`${order.status === "Pending"
                            ? "text-yellow-600"
                            : "text-green-600"
                            } font-semibold`}
                        >
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <UpdateDialog onSave={handleStatusUpdate}>
                          <Button size="sm" variant="outline">Update</Button>
                        </UpdateDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </ResizablePanel>

      </ResizablePanelGroup>
    </div>
  );
};

export default Orders;
