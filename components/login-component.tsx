"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginUser } from "@/service/auth-firebase"
import { useRouter } from "next/navigation"
import useSession from "@/hooks/useSession"

const FormSchema = z.object({
    mail: z.string().min(2, {
        message: "mail must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "mail must be at least 2 characters.",
    }),
})


export default function LoginComponent({ className = "" }) {
    const { router: route, loading } = useSession()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            mail: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const { mail, password } = data
        loginUser(mail, password, route)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
                <FormField
                    control={form.control}
                    name="mail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mail</FormLabel>
                            <FormControl>
                                <Input placeholder="maria12@gmail.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button disabled={loading} type="submit">Login</Button>
            </form>
        </Form>
    )
}
