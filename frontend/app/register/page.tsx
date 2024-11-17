"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createClient } from "../utils/supabase/server";
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
import { register } from "./actions";

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
    .max(20, {
      message: "Le mot de passe ne peut pas contenir plus de 20 caractères",
    }),
});

export default async function page() {
  const supabase = await createClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //console.log(values);
    const { data, error } = await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });
  }

  return (
    <div className="border border-gray-200 p-5 w-full h-fit max-w-3xl inset-0 m-auto absolute rounded-lg font-arimo">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <FormDescription>
                  Inscrivez vous pour éffectuer des achats.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Inscription</Button>
        </form>
      </Form>
    </div>
  );
}
