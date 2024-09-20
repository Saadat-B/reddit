"use client";

import { X } from "lucide-react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface CloseModalProps {
  goToHome?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CloseModal: React.FC<CloseModalProps> = ({
  goToHome = false,
  setIsOpen,
}) => {
  const router = useRouter();

  const handleClose = async () => {
    setIsOpen(false); // Close the modal
    if (typeof window !== "undefined") {
      // Check if the code is running in the browser
      if (goToHome) {
        await router.push("/");
      } else {
        router.back();
      }
    }
  };

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      aria-label="close modal"
      onClick={handleClose}
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
