"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MessageSquareText } from 'lucide-react';
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
    // In a real implementation, you would send this data
    console.log('Contact Form Submitted:', data);

    // Show toast notification using Sonner
    toast.success('Message Submitted', {
      description: 'Thank you for your message! We\'ll get back to you soon.',
      duration: 4000,
    });

    setIsOpen(false);
    reset();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="h-12
            bg-gradient-to-l
            from-purple-600 to-teal-500
            hover:from-purple-700 hover:to-teal-600
            dark:from-[#B133FF] dark:to-[#00DBD8]
            dark:hover:from-[#B133FF] dark:hover:to-[#00DBD8]
            text-white"
          >
            <MessageSquareText className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-foreground border-background'>
          <DialogHeader>
            <DialogTitle>Get In Touch</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register('name')}
                placeholder="Your Name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <Input
                {...register('email')}
                placeholder="Your Email"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <Textarea
                {...register('message')}
                placeholder="Your Message"
                className={`${errors.message ? 'border-red-500' : ''} min-h-[100px]`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactDialog;
