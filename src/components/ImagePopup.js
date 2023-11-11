import CloseIcon from '../images/Close-Icon.svg';
function ImagePopup({card, onClose}) {
	return (
		// <>
		// 	<div className={`popup ${card && 'popup_opened'} overlay-image`}>
		// 		<div className="overlay-image__container">
		// 		<img src={card?.link} alt={card?.name} className="popup__image" />
		// 		<img src={CloseIcon} alt="close" className="btnCerrar_overlay" onClick={onClose} />
		// 		</div>
		// 	</div>
		// </>
		<div className={`popup ${card && 'popup_opened'}`}>
		<div className="popup__image-container">
			<img src={card?.link} alt={card?.name} className="popup__image" />
			{/* <button type="button" className="popup__close" onClick={onClose}>X</button> */}
			<img src={CloseIcon} alt="close" className="popup__close" onClick={onClose} />
		</div>
	</div>
	);
}

export default ImagePopup;
