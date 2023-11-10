import Header from './Header';
import Footer from './Footer';
import Main from './main';
import { useState } from 'react';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
		console.log(isEditAvatarPopupOpen);
	};

	const handleEditPerfilClick = () => {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
	};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
	};

	return (
		<div className="page">
			<Header />
			<Main
				closeAllPopups={closeAllPopups}
				onEditPerfil={handleEditPerfilClick}
				onEditAvatar={handleEditAvatarClick}
				onAddPlace={handleAddPlaceClick}
				isEditProfilePopupOpen={isEditProfilePopupOpen}
				isEditAvatarPopupOpen={isEditAvatarPopupOpen}
				isAddPlacePopupOpen={isAddPlacePopupOpen}
			/>
			<Footer />
		</div>
	);
}

export default App;
