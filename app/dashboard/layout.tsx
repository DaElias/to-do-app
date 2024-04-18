"use client"
import { Button } from "@/components/ui/button";
import useSession from "@/hooks/useSession";
import { logOut } from "@/service/auth-firebase";


export default function AuthLayout({
  children,
}: typeChildren) {
  const { router } = useSession()
  return (
    <main>
      <Button onClick={() => logOut(router)}>LogOut</Button>
      {children}
    </main>
  )
}