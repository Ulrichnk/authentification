// import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FaExclamationTriangle } from "react-icons/fa";

interface formErrorProps {
  message?: string;
}
const FormError = ({ message }: formErrorProps) => {
  if (!message) return null;
  return (
    <div
      className=" flex bg-destructive/15 p-3 rounded-md items-center
     gap-x-2 text-sm text-destructive">
      <FaExclamationTriangle className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
