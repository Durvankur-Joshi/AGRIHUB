import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const OrderTable = () => {
    const orders = [
        { id: "#1245", product: "Tomatoes", buyer: "Rahul", quantity: "5kg", status: "Pending" },
        { id: "#1246", product: "Potatoes", buyer: "Sneha", quantity: "10kg", status: "Delivered" },
        { id: "#1247", product: "Onions", buyer: "Amit", quantity: "7kg", status: "Delivered" },
        { id: "#1248", product: "Carrots", buyer: "Priya", quantity: "4kg", status: "Pending" },
        { id: "#1249", product: "Cabbage", buyer: "Neha", quantity: "3pcs", status: "Delivered" },
        { id: "#1250", product: "Spinach", buyer: "Jay", quantity: "2kg", status: "Delivered" },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

            <ScrollArea className="h-64 rounded-md border">
                <Table>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Buyer Name</TableHead>
                            <TableHead>Quantity</TableHead>
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
                                    <Button size="sm" variant="outline">
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    );
};

export default OrderTable;
