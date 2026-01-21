import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "@/utils/auth";

import {
  Mail,
  Phone,
  Home,
  ShoppingBag,
  Pencil,
  Lock,
  LogOut,
  User
} from "lucide-react";

const BuyerProfile = () => {
  const navigate = useNavigate();
  const user = getUser();

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

      {/* ---------------- Profile Header ---------------- */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
              <User className="text-green-700" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">Buyer Account</p>
            </div>
          </div>

          <Separator />

          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 XXXXXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <Home size={18} />
              <span>Address not added</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ---------------- Actions ---------------- */}
      <Card>
        <CardContent className="p-6 space-y-4">

          <h3 className="font-semibold text-lg">Actions</h3>

          <Separator />

          <div className="space-y-2">

            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={() => navigate("/buyer/orders")}
            >
              <ShoppingBag size={18} />
              My Orders
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={() => navigate("/buyer/edit-profile")}
            >
              <Pencil size={18} />
              Edit Profile
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={() => navigate("/buyer/change-password")}
            >
              <Lock size={18} />
              Change Password
            </Button>

            <Separator />

            <Button
              variant="destructive"
              className="w-full justify-start gap-3"
              onClick={() => {
                logoutUser();
                navigate("/login");
              }}
            >
              <LogOut size={18} />
              Logout
            </Button>

          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default BuyerProfile;