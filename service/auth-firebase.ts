import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { auth } from "@/db/firebase"

export function CreateUser(email: string, password: string, router: AppRouterInstance) {

}

export function loginUser(email: string, password: string, router: AppRouterInstance) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            //👇🏻 logs user's details
            console.log("User >>", user)
            console.log("Authentication successful 🎉")
            router.push("/dashboard")
        })
        .catch((error) => {
            console.error(error)
            console.log("Incorrect Email/Password ❌")
        })
}

export function logOut(router: AppRouterInstance) {
    signOut(auth)
        .then(() => {
            console.log("Logout successful! 🎉");
            router.push("/");
        })
        .catch((error) => {
            console.log("Couldn't sign out ❌");
        });
}