"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SendIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { profile } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(1, "Please tell me your name"),
  email: z.string().email("That doesn't look like a valid email"),
  message: z.string().min(10, "A little more detail, please")
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", message: "" }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n—\n${values.name}\n${values.email}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…", {
      description: "Your message is pre-filled and ready to send."
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs tracking-widest uppercase">
                Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Your name" autoComplete="name" {...field} />
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
              <FormLabel className="font-mono text-xs tracking-widest uppercase">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="you@company.com"
                  autoComplete="email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel className="font-mono text-xs tracking-widest uppercase">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-40 resize-y"
                  placeholder="What are you building? What do you need help with?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-full">
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={form.formState.isSubmitting}
          >
            SEND MESSAGE <SendIcon />
          </Button>
        </div>
      </form>
    </Form>
  );
}
