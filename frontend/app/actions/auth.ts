"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { registerFormSchema, signInFormSchema } from "@/lib/definition";
import { FormState } from "@/type";
var bcryptjs = require("bcryptjs");

const supabase = await createClient();

const {
  data: { user },
} = await supabase.auth.getUser();

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = registerFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = validatedFields.data;
  //const hashedPassword = await bcryptjs.hash(password, 10);

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });

  const isUser = data;

  if (!isUser) {
    return {
      message: "Probleme lors de la création du compte.",
    };
  }

  if (user) {
    redirect("/shop");
  }
}

export async function signin(state: FormState, formData: FormData) {
  const validatedFields = signInFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (data) {
    revalidatePath("/", "layout");
    redirect("/shop");
  }
}

export async function signout() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  revalidatePath("/", "layout");
}
