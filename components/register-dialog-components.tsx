"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { CreateUser } from "@/service/auth-firebase"
import { useRouter } from "next/navigation"
// import { DialogClose } from "@radix-ui/react-dialog"

const FormSchema = z.object({
    mail: z.string().min(2, {
        message: "mail must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "mail must be at least 2 characters.",
    }),
})



export default function RegisterDialogComponent() {
    const route = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            mail: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const { mail, password } = data
        CreateUser(mail, password, route)
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Register</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Register User</DialogTitle>
                    <DialogDescription>
                        {/* Make changes to your profile here. Click save when you&apos;re done. */}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
                {/* <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}