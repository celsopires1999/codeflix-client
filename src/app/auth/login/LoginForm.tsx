"use client";

import { AuthForm } from "@/app/components/AuthForm";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  console.log(errors);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/");
        return;
      }
      const payload: ServerError[] = await response.json();
      setErrors(payload.map((error) => error.message));
    } catch (error) {
      console.log("An error occurred:", error);
      setErrors(["An unexpected error occurred"]);
    }
  };

  return <AuthForm formType="login" handleSubmit={handleSubmit} />;
}
