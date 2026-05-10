"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
	Loader2,
	CheckCircle,
	Mail,
	Phone,
	User,
	MessageSquare,
} from "lucide-react";

// Define the form schema with zod
const contactSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phone: z
		.string()
		.min(10, {
			message: "Phone number must be at least 10 digits.",
		})
		.regex(/^\+?[0-9\s\-\(\)]+$/, {
			message: "Please enter a valid phone number.",
		}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

// Infer the type from the schema
type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [submitMessage, setSubmitMessage] = useState("");

	// Initialize the form with react-hook-form and zod resolver
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormValues) => {
		setIsSubmitting(true);
		setSubmitStatus("idle");
		setSubmitMessage("");

		try {
			// Replace with your actual API endpoint
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				setSubmitStatus("success");
				setSubmitMessage("Your message has been sent successfully!");
				form.reset(); // Reset form after successful submission
			} else {
				setSubmitStatus("error");
				setSubmitMessage(
					result.error ||
						"Failed to send your message. Please try again or send direct email instead to info@gironalimited.com",
				);
			}
		} catch (error) {
			setSubmitStatus("error");
			setSubmitMessage(
				"An unexpected error occurred. Please try again or send direct email instead to info@gironalimited.com",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Card className="w-full max-w-2xl mx-auto rounded-none shadow-none border-0 bg-transparent">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
				<CardDescription>
					Have a question or want to work together? Send us a message!
				</CardDescription>
			</CardHeader>
			<CardContent>
				{submitStatus === "success" && (
					<Alert className="mb-6 border-green-200 bg-green-50">
						<CheckCircle className="h-4 w-4 text-green-600" />
						<AlertDescription className="text-green-800">
							{submitMessage}
						</AlertDescription>
					</Alert>
				)}

				{submitStatus === "error" && (
					<Alert variant="destructive" className="mb-6">
						<AlertDescription>{submitMessage}</AlertDescription>
					</Alert>
				)}

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-2">
										<User className="h-4 w-4" />
										Full Name
									</FormLabel>
									<FormControl>
										<Input placeholder="John Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex items-center gap-2">
											<Mail className="h-4 w-4" />
											Email Address
										</FormLabel>
										<FormControl>
											<Input
												placeholder="you@example.com"
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
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex items-center gap-2">
											<Phone className="h-4 w-4" />
											Phone Number
										</FormLabel>
										<FormControl>
											<Input
												placeholder="+1 (555) 123-4567"
												type="tel"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-2">
										<MessageSquare className="h-4 w-4" />
										Message
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us about your project or ask any questions..."
											className="min-h-[120px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" disabled={isSubmitting} className="w-full">
							{isSubmitting ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Sending...
								</>
							) : (
								"Send Message"
							)}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
