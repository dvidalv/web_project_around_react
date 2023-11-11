import Header from './Header';
import Footer from './Footer';
import Main from './main';
import { useState } from 'react';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (card) => {
		document.body.style.overflow = 'hidden';
		
		setSelectedCard(card);
	};

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);

	};

	const handleEditPerfilClick = () => {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
	};

	const closeAllPopups = () => {
		document.body.style.overflow = 'auto';
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
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
				onCardClick={handleCardClick}
				closePopupImage={closeAllPopups}
				selectedCard={selectedCard}
			/>
			<Footer />
		</div>
	);
}

export default App;
