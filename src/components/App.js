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
	};


	const handleEditPerfilClick = () => {
		setIsEditProfilePopupOpen(true);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	};
	return (
		<div className="page">
			<Header />
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditPerfil={handleEditPerfilClick}
				onAddPlace={handleAddPlaceClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
			/>
			<Footer />
		</div>
	);
}

export default App;
