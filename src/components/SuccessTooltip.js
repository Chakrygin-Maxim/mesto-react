import InfoTooltip from "./InfoTooltip";
import logo from "../images/tooltip-success.svg";

function SuccessTooltip(props) {
  return (
    <InfoTooltip
      isOpen={props.isOpen}
      tooltipLogo={logo}
      tooltipText={"Вы успешно зарегистрировались!"}
      onClose={props.onClose}
    />
  );
}

export default SuccessTooltip;
