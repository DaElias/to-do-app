"use client"
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface props extends typeChildren {
    session: Session | null | undefined
}

export default function ProviderComponents({
    children, session
}: props) {
    return (
        <>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>;
        </>
    )
}