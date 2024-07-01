import { FaExclamationTriangle } from "react-icons/fa";
import { CardWrapper } from "./card-wrapper";

const CardError = () => {
  return (
    // <Card className="flex w-[480px]">
    //   <CardHeader>
    //     <h1 className="text-2xl font-bold text-red-600">Error</h1>
    //     <p className="text-sm text-gray-500">Something went wrong</p>
    //   </CardHeader>
    //   <CardContent>
    //     <p className="text-sm text-gray-500">Please try again</p>
    //   </CardContent>
    //   <CardFooter>
    //     <Button
    //       variant="link"
    //       className="bg-red-600 text-white px-4 py-2 rounded-md">
    //       <Link href="/auth/login">Back to login</Link>
    //     </Button>
    //   </CardFooter>
    // </Card>
    <CardWrapper
      headerLabel="Error"
      headerDescription="Something went wrong ! "
      backButtonLabel="Back to login"
      BackButtonRef="/auth/login"
      showSocial={false}
      className=" w-[400px] ">
      <div className="flex items-center justify-center">
        {" "}
        <FaExclamationTriangle className="text-destructive text-4xl " />
      </div>
    </CardWrapper>
  );
};

export default CardError;
