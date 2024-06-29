"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import LogSocial from "./login-social";
interface cardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
  backButtonLabel: string;
  BackButtonRef: string;
  showSocial?: boolean;
}
export const CardWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backButtonLabel,
  BackButtonRef,
  showSocial,
}: cardWrapperProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex items-center">
        <CardTitle>{headerLabel}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="flex flex-col space-y-2">
          <LogSocial />

          <Button variant="link">
            <Link href={BackButtonRef}>{backButtonLabel}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
