import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Campo e-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z.string().min(1, "Campo senha é obrigatório"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Campo nome é obrigatório"),
  email: z
    .string()
    .trim()
    .min(1, "Campo e-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z.string().min(8, "Mínimo de 8 caracteres é obrigatório"),
});
