import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const FarmerCards = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "₹12,450",
      desc: "Overall earnings",
    },
    {
      title: "Orders",
      value: "34",
      desc: "New + completed orders",
    },
    {
      title: "Products",
      value: "12",
      desc: "Active products listed",
    },
    {
      title: "Chats",
      value: "5",
      desc: "Unread messages",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {stats.map((item, index) => (
        <Card key={index} className="border rounded-xl shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FarmerCards;
