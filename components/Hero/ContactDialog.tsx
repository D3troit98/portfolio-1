"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name}\nReply to: ${data.email}`);
    window.location.href = `mailto:Duruakuebuka@gmail.com?subject=${subject}&body=${body}`;

    setIsOpen(false);
    reset();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="h-12 rounded-lg bg-[#78c8c1] px-5 font-medium text-[#0f1624] hover:bg-[#92d6cf]"
          >
            Contact Me
          </Button>
        </DialogTrigger>
        <DialogContent className="border-white/15 bg-[#141e2e] text-white">
          <DialogHeader>
            <DialogTitle>Get In Touch</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-slate-400">This opens your email app with a draft ready to send.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-sm text-slate-300">Name</label>
              <Input
                id="contact-name"

                autoComplete="name"
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                aria-invalid={!!errors.name}
                {...register('name')}
                placeholder="Your Name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p id="contact-name-error" role="alert" className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-sm text-slate-300">Email</label>
              <Input
                id="contact-email"
                type="email"
                autoComplete="email"
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                aria-invalid={!!errors.email}
                {...register('email')}
                placeholder="Your Email"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p id="contact-email-error" role="alert" className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-sm text-slate-300">Message</label>
              <Textarea
                id="contact-message"

                aria-describedby={errors.message ? "contact-message-error" : undefined}
                aria-invalid={!!errors.message}
                {...register('message')}
                placeholder="Your Message"
                className={`${errors.message ? 'border-red-500' : ''} min-h-[100px]`}
              />
              {errors.message && <p id="contact-message-error" role="alert" className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-[#78c8c1] text-[#0f1624] hover:bg-[#92d6cf]">
              Continue to email
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactDialog;
