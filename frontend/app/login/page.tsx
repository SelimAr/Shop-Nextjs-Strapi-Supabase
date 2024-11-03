"use client";

import React from "react";
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

//Log supabase

const formSchema = z.object({
  email: z.string().email({
    message: "L'email est invalide",
  }),
  password: z.string().min(10, {
    message: "Le mot de passe est incorect",
  }),
});

export default function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="border border-gray-200 p-5 w-full h-fit max-w-3xl inset-0 m-auto absolute rounded-lg font-arimo">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  Connectez vous pour éffectuer des achats.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Connexion</Button>
        </form>
      </Form>
    </div>
  );
}
