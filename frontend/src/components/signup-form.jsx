import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"

const SignupForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handelSubmit = async(e) =>{
     e.preventDefault();
    try {
       const res = await api.post("",{
      name,
      email,
      password
    })
     toast.success("Account created successfully")
    } catch (error) {
      toast.error("Enter the vaild data")
    }
  }
   
  return (
    <div className="flex flex-col gap-6" >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" type="text" placeholder="John Doe" required 
                 onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required 
                 onChange={(e) => setEmail(e.target.value)}/>
              </Field>
              <Field>
                <Field className="grid  gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required 
                     onChange={(e) => setPassword(e.target.value)}/>
                  </Field>

                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button
                className="bg-green-700 hover:bg-green-800" type="submit"
                onClick={handelSubmit}>Create Account</Button>
                <FieldDescription className="text-center ">
                  Already have an account? <a 
                  className="text-green-800" href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}

export default SignupForm;