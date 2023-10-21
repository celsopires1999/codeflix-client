"use client";

import { AuthForm } from "@/app/components/AuthForm";
import React from "react";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit from Login");
  };
  return <AuthForm formType="login" handleSubmit={handleSubmit} />;
}
