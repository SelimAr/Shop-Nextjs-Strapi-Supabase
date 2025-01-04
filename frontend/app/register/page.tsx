"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionState } from "react";
import { signup } from "../actions/auth";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerFormSchema } from "@/lib/definition";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function page() {
  const [state, action, pending] = useActionState(signup, undefined);
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="border border-gray-200 p-5 w-full h-fit max-w-3xl inset-0 m-auto absolute rounded-lg font-arimo">
      <Form {...form}>
        <form action={action} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom d'utilisateur</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nom d'utilisateur"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {state?.errors?.username && (
            <p className="text-red-500">{state.errors.username}</p>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {state?.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mot de passe"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Inscrivez vous pour éffectuer des achats.
                </FormDescription>
              </FormItem>
            )}
          />
          {state?.errors?.password &&
            state.errors.password.map((error: string) => (
              <li key={error} className="text-red-500 list-none">
                {error}
              </li>
            ))}
          <Button disabled={pending} type="submit">
            Inscription
          </Button>
        </form>
      </Form>
    </div>
  );
}
