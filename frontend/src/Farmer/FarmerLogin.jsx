import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import farmerloginimage from "../assets/farmerloginimage.jpg"
import Logo from "../assets/Logo.png"
import { toast, Toaster } from 'react-hot-toast'

const FarmerLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)
    toast.success('Login successful!')
  }

  return (
    <>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div
        className=
        "min-h-screen flex justify-center items-center px-4"
      >
        <Card className="w-full max-w-3xl overflow-hidden p-0 shadow-xl ">
          <div
            className="mx-auto w-fit" >
            <img src={Logo} alt="logo"
              className="w-56 h-auto"
            />
          </div>
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8 space-y-4">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-muted-foreground text-balance">
                    Login to your farmer account
                  </p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>

                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required
                    onChange={(e) => setPassword(e.target.value)} />
                </Field>

                <Field>
                  <Button
                    className="w-full bg-green-700 hover:bg-green-900 border-0"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Login
                  </Button>
                </Field>

                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link to="/farmer-signup" className="text-green-700 font-medium">
                    Sign up
                  </Link>
                </FieldDescription>
              </FieldGroup>
            </form>


            <div className="bg-muted relative hidden md:block">
              <img
                src={farmerloginimage}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover 
              dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default FarmerLogin
