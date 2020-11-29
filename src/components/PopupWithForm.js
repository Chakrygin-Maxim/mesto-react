function PopupWithForm(props){

    return(
        <section className= {`popup popup_form_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <form className="popup__form" action={`popup-${props.name}-submit`} name={props.name} noValidate>
                <h2 className="popup__title">{props.title}</h2>
               
                <button type="submit" className="popup__button">{props.buttonText}</button>
                <button className="popup__button-close" type="button" onClick={props.onClose}></button>
            </form>
      </section> 
    )
}

export default PopupWithForm;