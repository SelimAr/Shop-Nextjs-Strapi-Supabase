"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Le nom doit ccontenir au moins 2 caractères",
    })
    .max(25, {
      message: "Le nom doit ccontenir moins de 25 caractères",
    }),
  email: z.string().email({
    message: "L'email est invalide",
  }),
  password: z
    .string()
    .min(10, {
      message: "Le mot de passe doit contenir au moins 10 caractères",
    })
    .max(30, {
      message: "Le mot de passe ne peut pas contenir plus de 30 caractères",
    }),
});

export default function page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <Button className="p-2 rounded-full" onClick={() => router.push("/shop")}>
        <MoveLeft size={25} />
      </Button>

      <div className="border border-gray-200 p-5 w-full h-fit max-w-3xl inset-0 m-auto absolute rounded-lg font-arimo">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d'utilisateur</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom d'utilisateur" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input placeholder="Mot de passe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Sauvegarder</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
