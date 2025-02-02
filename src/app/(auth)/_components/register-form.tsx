"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, Loader2Icon, Mail, User } from "lucide-react";
import { Label } from "@/components/ui/label";
import { createClient } from "@/supabase/client";
import useUserStore from "@/store/user";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string({ message: "Name is required" }).min(2, "Name is too short"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email format"),
  password: z
    .string({ message: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const router = useRouter();
  const { setUser } = useUserStore();
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    const supabase = createClient();
    const { email, password, name } = data;

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        const { data: _, error } = await supabase.from("users").upsert([
          {
            id: data.user.id,
            email: data.user.email,
            name: name,
          },
        ]);

        if (error) {
          throw error;
        }

        setUser({ id: data.user.id, email: data.user.email, name });
        router.push("/home");
      }
    } catch (_) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="group">
        <Label className="text-xs">Name</Label>
        <Input
          type="text"
          startIcon={<User className="text-muted-foreground size-5" />}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>
      <div className="group">
        <Label className="text-xs">Email</Label>
        <Input
          type="email"
          startIcon={<Mail className="text-muted-foreground size-5" />}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="group">
        <Label className="text-xs">Password</Label>
        <Input
          type="password"
          startIcon={<KeyRound className="text-muted-foreground size-5" />}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </div>
      <div className="py-6 w-full">
        <Button
          type="submit"
          className="w-full flex justify-center items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            "Create account"
          )}
        </Button>
      </div>
    </form>
  );
}
