import { ReactNode } from "react";
import { ConfirmToast } from "react-confirm-toast";
const ShowConfirm = ({ message, handleFunction, children, params }:ShowConfirmProps) => {

  const confirmAction = () => {
    handleFunction(params);
  };

  return (
    <ConfirmToast
      asModal={true}
      customCancel={"Cancel"}
      customConfirm={"Confirm"}
      customFunction={params ? confirmAction : handleFunction}
      message={message}
      position={"top-left"}
      showCloseIcon={false}
      theme={"light"}
    >
      {children}
    </ConfirmToast>
  );
};

interface ShowConfirmProps{
    message : string;
    handleFunction : (params:number) => void;
    children : ReactNode;
    params : number;
}
export default ShowConfirm;