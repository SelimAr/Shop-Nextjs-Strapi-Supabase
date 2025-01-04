import { z } from "zod";

export const registerFormSchema = z.object({
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

export const signInFormSchema = z.object({
  email: z.string().email({
    message: "L'email est invalide",
  }),
  password: z
    .string()
    .min(2, {
      message: "Le mot de passe doit contenir au moins 10 caractères",
    })
    .max(50, {
      message: "Le mot de passe ne peut pas contenir plus de 20 caractères",
    }),
});
