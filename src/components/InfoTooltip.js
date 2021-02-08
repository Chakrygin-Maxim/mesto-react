import React from "react";

function InfoTooltip(props) {
  return (
    <div className={props.isOpen && "popup_opened"}>
      <div className="popup__form">
        <img
          className="popup__tooltip-logo"
          src={props.tooltipLogo}
          alt={props.tooltipLogoAlt}
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
