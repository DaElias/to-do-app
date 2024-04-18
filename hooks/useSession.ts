import { auth } from "@/db/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useSession() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const path = usePathname()
    const isUserLoggedIn = useCallback(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // setUser({ email: user.email, uid: user.uid });
                setLoading(false)
                return router.push("/");
            }
            if (path == "/")
                return router.push("/dashboard");
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);
    useEffect(() => {
        isUserLoggedIn();
    }, [isUserLoggedIn]);

    return { router, loading }
}