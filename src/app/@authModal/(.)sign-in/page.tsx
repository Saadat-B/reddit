"use client";
import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import { Dispatch, FC, SetStateAction, useState } from "react";

const Page: FC = ({}) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal goToHome={false} setIsOpen={setIsOpen} />
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  ) : null;
};

export default Page;
