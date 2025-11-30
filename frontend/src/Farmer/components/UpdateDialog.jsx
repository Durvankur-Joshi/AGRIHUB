import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const UpdateDialog = ({ children, onSave }) => {
  const [selected, setSelected] = useState("Pending");

  const handleSave = () => {
    onSave(selected);  // Send radio value to parent
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Order Status</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4">
          <RadioGroup value={selected} onValueChange={setSelected}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Pending" id="Pending" />
              <Label htmlFor="Pending">Pending</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Accepted" id="Accepted" />
              <Label htmlFor="Accepted">Accepted</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Dispatched" id="Dispatched" />
              <Label htmlFor="Dispatched">Dispatched</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Completed" id="Completed" />
              <Label htmlFor="Completed">Completed</Label>
            </div>
          </RadioGroup>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          {/* Save button → triggers parent update & closes dialog */}
          <DialogClose asChild>
            <Button onClick={handleSave}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDialog;
