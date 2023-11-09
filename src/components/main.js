import CloseIcon from '../images/Close-Icon.svg';
import editButton from '../images/Edit-Button.svg';
import editPerfil from '../images/editPerfil.svg';
import addButton from '../images/Add-Button.svg';
import closeIcon from '../images/Close-Icon.svg';
import profile from '../images/profile.jpg';
function Main() {
	function handleEditAvatarClick() {
		const popupAvatar = document.querySelector('.popup_update-perfil');
		popupAvatar.classList.add('popup_opened');
	}
	function handleEditPerfilClick() {
		// console.log('¡No hagas clic en mi!');
		const popupPerfil = document.querySelector('.popup_perfil');
		popupPerfil.classList.add('popup_opened');
	}
	function handleAddPlaceClick() {
		const popupAdd = document.querySelector('.popup_Element');
		popupAdd.classList.add('popup_opened');
	}
	return (
		<main className="content">
			<section className="profile">
				<section className="popup popup_perfil">
					<form
						className="popup__form popup__formPerfil"
						name="form"
						id="form"
						novalidate
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
							minlength="2"
							maxlength="40"
							required
							name="name"
						/>
						<input
							id="aboutMe-input"
							className="popup__input popup__input_about-me"
							type="text"
							placeholder="Acerca de mi"
							minlength="2"
							maxlength="200"
							required
							name="about"
						/>
						<input
							className="popup__submit popup__submit_perfil"
							type="submit"
							value="Guardar"
						/>
					</form>
				</section>
				<section className="popup popup_update-perfil">
					<form className="popup__form popup__form-update-perfil" novalidate>
						<img
							className="btnCerrar popup__button-cerrar-update-perfil"
							src={CloseIcon}
							alt="icon cerrar"
						/>
						<h2 className="popup__title">Cambiar foto de perfil</h2>
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
					</form>
				</section>

				<div className="profile__data">
					<div className="profile__avatar">
						<img
							className="profile__imagen"
							src={profile}
							alt="Imagen de perfil"
						/>
						<div className="profile__overlay">
							<img
								onClick={handleEditAvatarClick}
								className="profile__edit-icon"
								src={editPerfil}
								alt="icon edit"
							/>
						</div>
					</div>

					<div className="profile__info">
						<div className="profile__contenedor-titulo">
							<h1 className="profile__title">David Vidal</h1>
							<button onClick={handleEditPerfilClick} type="button" className="edit-button">
								<img src={editButton} alt="edit button" />
							</button>
						</div>
						<p className="profile__subtitle">Desarrollador Web</p>
					</div>
				</div>

				<div className="profile__button">
					<img
						onClick={handleAddPlaceClick}
						className="add-button"
						src={addButton}
						alt="icono boton agregar"
					/>
				</div>
			</section>

			<section>
				<section className="popup popup_Element">
					<form className="popup__form popup__formElement" novalidate>
						<img
							className="btnCerrar popup__button-cerrar-places"
							src={closeIcon}
							alt="icon cerrar"
						/>
						<h2 className="popup__title">Nuevo lugar</h2>
						<input
							id="titulo-input"
							className="popup__input popup__input-titulo"
							type="text"
							placeholder="Titulo"
							minlength="2"
							maxlength="30"
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
				</section>

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
							src={closeIcon}
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
			<div className="popup overlay-image">
				<div className="overlay-image__container"></div>
			</div>
		</main>
	);
}

export default Main;
