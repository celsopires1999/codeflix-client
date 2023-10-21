"use client";

import { AuthForm } from "@/app/components/AuthForm";
import React from "react";

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit from Register");
  };
  return <AuthForm formType="register" handleSubmit={handleSubmit} />;
}
