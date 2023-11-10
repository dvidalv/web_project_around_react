import CloseIcon from '../images/Close-Icon.svg';
function PopupWithForm({ name, title, children, isOpen, onClose }) {
	return (
		<section
			className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
		>
			<form className={`popup__form popup__form-update-${name}`} noValidate>
				<h2 className="popup__title">{title}</h2>
				<img
					className="btnCerrar popup__button-cerrar-update-perfil"
					src={CloseIcon}
					alt="icon cerrar"
					onClick={onClose}
				/>
				{children}
			</form>
		</section>
	);
}

export default PopupWithForm;
