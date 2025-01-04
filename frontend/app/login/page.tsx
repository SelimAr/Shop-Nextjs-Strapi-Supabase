"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionState } from "react";
import { signInFormSchema } from "@/lib/definition";
import { signin } from "../actions/auth";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
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
  const router = useRouter();
  const [state, action, pending] = useActionState(signin, undefined);
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
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
          <form action={action} className="space-y-8">
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
                    Connectez vous pour éffectuer des achats.
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
              Connexion
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
