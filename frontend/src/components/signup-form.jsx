import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

 const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const OnSignup = (e) =>{
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password " , password);
    console.log("Phone Number:", phone);
    console.log("City:", city);
  }
  
  return (
    <form className="flex flex-col gap-6" >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your farmer account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your farmer account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" type="text" placeholder="Enter your name" required
          onChange = {(e) => setName(e.target.value)} />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="example@example.com" required 
          onChange = {(e) => setEmail(e.target.value)} />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required 
          onChange = {(e) => setPassword(e.target.value)} />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <Input id="phone" type="text" placeholder="00000 00000" required
          onChange = {(e) => setPhone(e.target.value)} />
        </Field>
        <Field>
          <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" type="text" placeholder="Pune" required  onChange = {(e) => setCity(e.target.value)} />
        </Field>
          <Button
          className="w-full bg-green-700 hover:bg-green-900 border-0 mt-2"
           type="submit"
           onClick={OnSignup}
           >Create Account</Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <a 
            className="text-green-700 font-medium"
            href="/farmerlogin">Sign in</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default SignupForm;