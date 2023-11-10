import CloseIcon from '../images/Close-Icon.svg';
import editButton from '../images/Edit-Button.svg';
import editPerfil from '../images/editPerfil.svg';
import addButton from '../images/Add-Button.svg';
import profile from '../images/profile.jpg';
import PopupWithForm from './PopupWithForm';
// import React, { useState } from 'react';
import ImagePopup from './ImagePopup';

function Main({
	onEditPerfil,
	onEditAvatar,
	onAddPlace,
	isEditProfilePopupOpen,
	isEditAvatarPopupOpen,
	isAddPlacePopupOpen
}) {
	// Aquí puedes manejar el estado de apertura/cierre de las ventanas emergentes
	// const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	return (
		<main className="content">
			<section className="profile">
				<PopupWithForm
					name="perfil"
					title="Editar Perfil"
					isOpen={isEditProfilePopupOpen}
					onClose={onEditPerfil}
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
					onClose={onAddPlace}
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
				{/* <section className="popup popup_perfil">
					<form
						className="popup__form popup__formPerfil"
						name="form"
						id="form"
						noValidate
					>
						<img
							className="btnCerrar popup__button-cerrar-perfil"
							src={CloseIcon}
							alt="icon cerrar"
						/>
						<h2 className="popup__title">Editar Perfil</h2>
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
					</form>
				</section> */}
				<PopupWithForm
					name="avatar"
					title="Cambiar foto de perfil"
					isOpen={isEditAvatarPopupOpen}
					onClose={onEditAvatar}
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
							src={profile}
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
							<h1 className="profile__title">David Vidal</h1>
							<button
								onClick={onEditPerfil}
								type="button"
								className="edit-button"
							>
								<img src={editButton} alt="edit button" />
							</button>
						</div>
						<p className="profile__subtitle">Desarrollador Web</p>
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
				{/* <section className="popup popup_Element">
					<form className="popup__form popup__formElement" noValidate>
						<img
							className="btnCerrar popup__button-cerrar-places"
							src={CloseIcon}
							alt="icon cerrar"
						/>
						<h2 className="popup__title">Nuevo lugar</h2>
						<input
							id="titulo-input"
							className="popup__input popup__input-titulo"
							type="text"
							placeholder="Titulo"
							minLength="2"
							maxLength="30"
							required
							name="name"
						/>
						<input
							id="url-input"
							className="popup__input popup__input-link"
							type="url"
							placeholder="Enlace a la Imagen"
							required
							name="link"
						/>
						<input
							className="popup__submit popup__submit_Element"
							type="submit"
							value="Nuevo"
						/>
					</form>
				</section> */}

				<ul className="elements"></ul>

				<template className="template-card">
					<li className="card">
						<div className="card__image-container">
							<img className="card__imagen" src=" " alt=" " />
						</div>
						<div className="card__contenido">
							<div className="card__info">
								<p className="card__title"></p>
								<div className="card_dislike"></div>
							</div>
							<span className="card__likes card__like-counter">1</span>
						</div>
						<i className="fa-solid fa-trash card__trash"></i>
					</li>
				</template>

				<section className="popup popup_delete-card">
					<form
						name="delete-card"
						className="popup__form popup__formDeleteCard"
					>
						<img
							className="btnCerrar popup__button-cerrar-places"
							src={CloseIcon}
							alt="icon cerrar"
						/>
						<h2 className="popup__title">Estas seguro?</h2>
						<input
							className="popup__submit popup__submit_deleteCard"
							type="submit"
							value="Si"
						/>
					</form>
				</section>
			</section>
			<ImagePopup />
		</main>
	);
}

export default Main;
