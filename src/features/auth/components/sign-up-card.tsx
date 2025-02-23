import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo nome é obrigatório"),
  email: z
    .string()
    .trim()
    .min(1, "Campo e-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z.string().min(8, "Mínimo de 8 caracteres é obrigatório"),
});

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Cadastrar</CardTitle>
        <CardDescription>
          Ao se inscrever, você concorda com nossa{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Política de Privacidade</span>
          </Link>{" "}
          e{" "}
          <Link href="/terms">
            <span className="text-blue-700">Termos de Serviço</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 ">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="name"
                      placeholder="Digite seu nome"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Digite seu e-mail"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Digite sua senha"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} size={"lg"} className="w-full">
              Entrar
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant="secondary" size="lg" className="w-full">
          <FcGoogle className="mr-2 size-5" />
          Entrar com o Google
        </Button>
        <Button variant="secondary" size="lg" className="w-full">
          <FaGithub className="mr-2 size-5" />
          Entrar com o Github
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Já tem uma conta?
          <Link href="/sign-in">
            <span className="text-blue-700">&nbsp;Entrar</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
