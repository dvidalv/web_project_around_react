import CloseIcon from '../images/Close-Icon.svg';
import editButton from '../images/Edit-Button.svg';
import editPerfil from '../images/editPerfil.svg';
import addButton from '../images/Add-Button.svg';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Api from '../utils/api';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

function Main({
	onEditPerfil,
	onEditAvatar,
	onAddPlace,
	isEditProfilePopupOpen,
	isEditAvatarPopupOpen,
	isAddPlacePopupOpen,
	closeAllPopups,
	onCardClick,
	selectedCard,
	closePopupImage,
	onDeleteClick,
	isDeletePopupOpen
}) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const userData = await Api.getUserInfo('users/me');
				setUserName(userData.name);
				setUserDescription(userData.about);
				setUserAvatar(userData.avatar);
			} catch (err) {
				console.log(err);
			}
		};
		fetchUserInfo();
	}, []);
	useEffect(() => {
		const fetchCards = async () => {
			try {
				const cards = await Api.getInitialCards('cards');
				setCards(cards);
			} catch (err) {
				console.log(err);
			}
		};
		fetchCards();
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<PopupWithForm
					name="perfil"
					title="Editar Perfil"
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
				>
					<img
						className="btnCerrar popup__button-cerrar-perfil"
						src={CloseIcon}
						alt="icon cerrar"
						onClick={onEditPerfil}
					/>
					<input
						id="nombre-input"
						className="popup__input popup__input_nombre"
						type="text"
						placeholder="Nombre"
						minLength="2"
						maxLength="40"
						required
						name="name"
					/>
					<input
						id="aboutMe-input"
						className="popup__input popup__input_about-me"
						type="text"
						placeholder="Acerca de mi"
						minLength="2"
						maxLength="200"
						required
						name="about"
					/>
					<input
						className="popup__submit popup__submit_perfil"
						type="submit"
						value="Guardar"
					/>
				</PopupWithForm>
				<PopupWithForm
					name={'element'}
					title={'Nueva Imagen'}
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
					<input
						id="nombre-input"
						className="popup__input popup__input_nombre"
						type="text"
						placeholder="Nombre"
						minLength="2"
						maxLength="40"
						required
						name="name"
					/>
					<input
						id="aboutMe-input"
						className="popup__input popup__input_about-me"
						type="text"
						placeholder="Acerca de mi"
						minLength="2"
						maxLength="200"
						required
						name="about"
					/>
					<input
						className="popup__submit popup__submit_perfil"
						type="submit"
						value="Guardar"
					/>
				</PopupWithForm>

				<PopupWithForm
					name="avatar"
					title="Cambiar foto de perfil"
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
				>
					<input
						className="popup__input popup__input-link"
						type="url"
						placeholder="Enlace a la Imagen"
						required
						name="link"
					/>
					<input
						className="popup__submit popup__submit_update-perfil"
						type="submit"
						value="Guardar"
					/>
				</PopupWithForm>
				<div className="profile__data">
					<div className="profile__avatar">
						<img
							className="profile__imagen"
							src={userAvatar}
							alt="Imagen de perfil"
						/>
						<div className="profile__overlay">
							<img
								onClick={onEditAvatar}
								className="profile__edit-icon"
								src={editPerfil}
								alt="icon edit"
							/>
						</div>
					</div>

					<div className="profile__info">
						<div className="profile__contenedor-titulo">
							<h1 className="profile__title">{userName}</h1>
							<button
								onClick={onEditPerfil}
								type="button"
								className="edit-button"
							/>
							<button
								onClick={onEditPerfil}
								type="button"
								className="edit-button"
							>
								<img src={editButton} alt="edit button" />
							</button>
						</div>
						<p className="profile__subtitle">{userDescription}</p>
					</div>
				</div>

				<div className="profile__button">
					<img
						onClick={onAddPlace}
						className="add-button"
						src={addButton}
						alt="icono boton agregar"
					/>
				</div>
			</section>

			<section>
				<ul className="elements">
					{cards.map((card) => (
						<Card
							key={card._id}
							onCardClick={onCardClick}
							card={card}
							onDeleteClick={onDeleteClick}
						/>
					))}
				</ul>
			</section>
			<PopupWithForm title={'Estas Seguro?'} isOpen={isDeletePopupOpen} onClose={closeAllPopups}>
					<input
						className="popup__submit popup__submit_deleteCard"
						type="submit"
						value="Si"
					/>
			</PopupWithForm>
			<ImagePopup card={selectedCard} onClose={closePopupImage} />
		</main>
	);
}

export default Main;
