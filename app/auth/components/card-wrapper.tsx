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
import { cn } from "@/lib/utils";
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
  className?: string;
}
export const CardWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backButtonLabel,
  BackButtonRef,
  showSocial,
  className,
}: cardWrapperProps) => {
  return (
    <Card className={cn(className, "shadow-md")}>
      <CardHeader className="flex items-center">
        <CardTitle>{headerLabel}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent >{children}</CardContent>
      {showSocial ? (
        <CardFooter className="flex flex-col space-y-2">
          <LogSocial />

          <Button variant="link">
            <Link href={BackButtonRef}>{backButtonLabel}</Link>
          </Button>
        </CardFooter>
      ) : (
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="link">
            <Link href={BackButtonRef}>{backButtonLabel}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
