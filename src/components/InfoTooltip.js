function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__form">
        <img
          className="popup__tooltip-logo"
          src={props.tooltipLogo}
          alt={props.tooltipLogo}
        />
        <p className="popup__tooltip-text">{props.tooltipText}</p>
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
