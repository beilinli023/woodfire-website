
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";
import AuthForm from "./AuthForm";

interface AuthDialogProps {
  children?: React.ReactNode;
}

const AuthDialog = ({ children }: AuthDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 transition-colors">
            <User size={20} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <AuthForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
