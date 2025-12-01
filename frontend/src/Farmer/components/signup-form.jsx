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
import api from "@/api/axiosConfig";
import { PhoneMissed } from "lucide-react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setlocation] = useState("");
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

    // location
    if (!location.trim()) {
      newErrors.location = "location is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const OnSignup = async (e) => {

    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors");
      return;
    }
    try {
      const res = await api.post("/farmer/auth/register", {
        name,
        email,
        password,
        phone,
        location
      })
      toast.success("Signup successfully")
      console.log("Responce:", res.data)
      navigate("/farmerdashboard")
    } catch (error) {
      console.log(error)
      toast.error("Enter the vaild data")
    }
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
            onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="example@example.com" required
            onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required
            onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <Input id="phone" type="text" placeholder="00000 00000" required
            onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
        </Field>
        <Field>
          <Field>
            <FieldLabel htmlFor="location">location</FieldLabel>
            <Input id="location" type="text" placeholder="Pune" required onChange={(e) => setlocation(e.target.value)} />
            {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
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