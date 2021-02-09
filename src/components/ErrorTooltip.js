import InfoTooltip from "./InfoTooltip";
import logo from "../images/tooltip-error.svg";

function ErrorTooltip(props) {
  return (
    <InfoTooltip
      isOpen={props.isOpen}
      tooltipLogo={logo}
      tooltipText={"Что-то пошло не так! Попробуйте ещё раз."}
      onClose={props.onClose}
    />
  );
}

export default ErrorTooltip;
