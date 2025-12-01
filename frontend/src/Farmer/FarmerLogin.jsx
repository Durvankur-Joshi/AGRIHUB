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
import { useNavigate } from "react-router-dom"

const FarmerLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validateLogin = () => {
    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


 const onSubmit = async(e) => {
  e.preventDefault();

  if (!validateLogin()) {
    toast.error("Please fix the errors");
    return;
  }
  try {
   const res = await api.post("/farmer/auth/login",{
     email,
     password
   })
    toast.success("Login sucessfully")
    navigate("/farmerdashboard")
    
  } catch (error) {
    console.log('Error' , error)
    toast.error("Login failed")
  }
};


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
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
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
                  {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
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
