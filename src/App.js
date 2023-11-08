import logo from './images/logo.svg';
import CloseIcon from './images/Close-Icon.svg';
import editButton from './images/Edit-Button.svg';
import editPerfil from './images/editPerfil.svg';
import addButton from './images/Add-Button.svg';
import closeIcon from './images/Close-Icon.svg';
import profile from './images/profile.jpg';

function App() {
	return (
		<div class="page">
			<header class="header">
				<img class="logo" src={logo} alt="Logo around the US" />
			</header>
			<div class="error"></div>
			<main class="content">
				<section class="profile">
					<section class="popup popup_perfil">
						<form
							class="popup__form popup__formPerfil"
							name="form"
							id="form"
							novalidate
						>
							<img
								class="btnCerrar popup__button-cerrar-perfil"
								src={CloseIcon}
								alt="icon cerrar"
							/>
							<h2 class="popup__title">Editar Perfil</h2>
							<input
								id="nombre-input"
								class="popup__input popup__input_nombre"
								type="text"
								placeholder="Nombre"
								minlength="2"
								maxlength="40"
								required
								name="name"
							/>
							<input
								id="aboutMe-input"
								class="popup__input popup__input_about-me"
								type="text"
								placeholder="Acerca de mi"
								minlength="2"
								maxlength="200"
								required
								name="about"
							/>
							<input
								class="popup__submit popup__submit_perfil"
								type="submit"
								value="Guardar"
							/>
						</form>
					</section>
					<section class="popup popup_update-perfil">
						<form class="popup__form popup__form-update-perfil" novalidate>
							<img
								class="btnCerrar popup__button-cerrar-update-perfil"
								src={CloseIcon}
								alt="icon cerrar"
							/>
							<h2 class="popup__title">Cambiar foto de perfil</h2>
							<input
								class="popup__input popup__input-link"
								type="url"
								placeholder="Enlace a la Imagen"
								required
								name="link"
							/>
							<input
								class="popup__submit popup__submit_update-perfil"
								type="submit"
								value="Guardar"
							/>
						</form>
					</section>

					<div class="profile__data">
						<div class="profile__avatar">
							<img
								class="profile__imagen"
								src={profile}
								alt="Imagen de perfil"
							/>
							<div class="profile__overlay">
								<img
									class="profile__edit-icon"
									src={editPerfil}
									alt="icon edit"
								/>
							</div>
						</div>

						<div class="profile__info">
							<div class="profile__contenedor-titulo">
								<h1 class="profile__title">David Vidal</h1>
								<button type="button" class="edit-button">
									<img
										src={editButton}
										alt="edit button"
									/>
								</button>
							</div>
							<p class="profile__subtitle">Desarrollador Web</p>
						</div>
					</div>

					<div class="profile__button">
						<img
							class="add-button"
							src={addButton}
							alt="icono boton agregar"
						/>
					</div>
				</section>

				<section>
					<section class="popup popup_Element">
						<form class="popup__form popup__formElement" novalidate>
							<img
								class="btnCerrar popup__button-cerrar-places"
								src={closeIcon}
								alt="icon cerrar"
							/>
							<h2 class="popup__title">Nuevo lugar</h2>
							<input
								id="titulo-input"
								class="popup__input popup__input-titulo"
								type="text"
								placeholder="Titulo"
								minlength="2"
								maxlength="30"
								required
								name="name"
							/>
							<input
								id="url-input"
								class="popup__input popup__input-link"
								type="url"
								placeholder="Enlace a la Imagen"
								required
								name="link"
							/>
							<input
								class="popup__submit popup__submit_Element"
								type="submit"
								value="Nuevo"
							/>
						</form>
					</section>

					<ul class="elements"></ul>

					<template class="template-card">
						<li class="card">
							<div class="card__image-container">
								<img class="card__imagen" src=" " alt=" " />
							</div>
							<div class="card__contenido">
								<div class="card__info">
									<p class="card__title"></p>
									<div class="card_dislike"></div>
								</div>
								<span class="card__likes card__like-counter">1</span>
							</div>
							<i class="fa-solid fa-trash card__trash"></i>
						</li>
					</template>

					<section class="popup popup_delete-card">
						<form name="delete-card" class="popup__form popup__formDeleteCard">
							<img
								class="btnCerrar popup__button-cerrar-places"
								src="<%=require('../src/images/Close-Icon.svg')%>"
								alt="icon cerrar"
							/>
							<h2 class="popup__title">Estas seguro?</h2>
							<input
								class="popup__submit popup__submit_deleteCard"
								type="submit"
								value="Si"
							/>
						</form>
					</section>
				</section>
			</main>
			<div class="popup overlay-image">
				<div class="overlay-image__container"></div>
			</div>
			<footer class="footer">
				<p class="footer__title">&copy; 2023. David V. Vidal V.</p>
			</footer>
		</div>
	);
}

export default App;
