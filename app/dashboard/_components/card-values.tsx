import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
interface CardValuesProps {
  children: React.ReactNode;
  title: string;
  values: number;
}

const CardValues = ({ children, title, values }: CardValuesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>title</CardTitle>
        <CardDescription>values</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardValues;
