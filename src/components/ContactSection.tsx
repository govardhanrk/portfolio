import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-navy mb-5">
            Get In Touch
          </h2>
          <p className="text-portfolio-light max-w-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-navy mb-1">
                  Name
                </label>
                <Input 
                  {...register("name", { required: "Name is required" })}
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-portfolio-accent focus:border-portfolio-accent"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-navy mb-1">
                  Email
                </label>
                <Input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-portfolio-accent focus:border-portfolio-accent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-portfolio-navy mb-1">
                Subject
              </label>
              <Input 
                {...register("subject", { required: "Subject is required" })}
                type="text" 
                id="subject" 
                placeholder="How can I help you?" 
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-portfolio-accent focus:border-portfolio-accent"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-portfolio-navy mb-1">
                Message
              </label>
              <Textarea 
                {...register("message", { required: "Message is required" })}
                id="message" 
                placeholder="Your message here..." 
                className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-portfolio-accent focus:border-portfolio-accent resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <div className="text-center">
              <Button 
                type="submit" 
                className="btn-primary w-full md:w-auto inline-flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-20 text-center">
          <p className="text-portfolio-light">
            Alternatively, you can reach me at:
          </p>
          <a
            href="mailto:khadakkargovardhan@gmail.com"
            className="text-portfolio-accent font-semibold hover:underline mt-2 inline-block"
          >
            khadakkargovardhan@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
