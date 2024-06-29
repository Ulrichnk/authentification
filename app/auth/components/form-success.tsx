// import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CheckCircleIcon } from "lucide-react";

interface formSuccessProps {
  message?: string;
}
const FormSuccess = ({ message }: formSuccessProps) => {
  if (!message) return null;
  return (
    <div
      className=" flex bg-emerald-500/15 p-3 rounded-md items-center
     gap-x-2 text-sm text-emerald-500">
      <CheckCircleIcon className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
