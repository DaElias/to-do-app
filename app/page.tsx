"use client"
import LoginComponent from "../components/login-component";
import RegisterDialogComponent from "../components/register-dialog-components";

export default function HomePage() {

  return (
    <main className="flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-semibold">To do</h1>
      <LoginComponent className="flex flex-col gap-4 w-1/2 p-10" />
      <RegisterDialogComponent />
    </main>
  )
}