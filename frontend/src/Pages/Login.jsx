import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Login clicked");
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="w-full h-screen flex justify-center items-center bg-gray-50 px-4">
        <Card className="w-full max-w-md shadow-lg border rounded-xl p-6 bg-white">

          <div className="flex justify-center mb-4">
            <img src={Logo} alt="logo" className="w-44 object-contain" />
          </div>

          <CardContent className="p-0">
            <form onSubmit={onSubmit} className="space-y-6">

              <FieldGroup>

                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-muted-foreground">
                    Login to your farmer account
                  </p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">{errors.email}</p>
                  )}
                </Field>

                <Field>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a className="text-sm underline-offset-2 hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Input
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm">{errors.password}</p>
                  )}
                </Field>

                <Button
                  className="w-full bg-green-700 text-white hover:bg-green-800"
                  type="submit"
                >
                  Login
                </Button>

                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-green-700 font-medium underline-offset-2 hover:underline"
                  >
                    Sign up
                  </Link>
                </FieldDescription>

              </FieldGroup>

            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
