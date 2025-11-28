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
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

 const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
  let newErrors = {};

  // Name
  if (!name.trim()) {
    newErrors.name = "Name is required";
  }

  // Email
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email";
  }

  // Password
  if (!password.trim()) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  // Phone Number
  if (!phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  // City
  if (!city.trim()) {
    newErrors.city = "City is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0; // true means valid
};


  const OnSignup = (e) =>{
    e.preventDefault();

  if (!validateForm()) {
    console.log("Form has errors");
    return;
  }
  toast.success('Login successful!')
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Phone:", phone);
  console.log("City:", city);
  navigate("/farmerDashboard");
  
  }
  
  return (
    <form className="flex flex-col gap-6" >
<Toaster
        position="top-right"
        reverseOrder={false}
      />
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
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="example@example.com" required 
          onChange = {(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required 
          onChange = {(e) => setPassword(e.target.value)} />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <Input id="phone" type="text" placeholder="00000 00000" required
          onChange = {(e) => setPhone(e.target.value)} />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
        </Field>
        <Field>
          <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" type="text" placeholder="Pune" required  onChange = {(e) => setCity(e.target.value)} />
          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
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