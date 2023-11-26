import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
	const [currentUser, setCurrentUser] = useState({});
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
	const handleDeleteClick = () => {
		setIsDeletePopupOpen(!isDeletePopupOpen);
	};

	const handleCardClick = (card) => {
		document.body.style.overflow = 'hidden';
		setSelectedCard(card);
	};

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
	};

	const handleProfileClick = () => {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
	};

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const userData = await Api.getUserInfo('users/me');
				setCurrentUser(userData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUserInfo();
	}, []);

	const closeAllPopups = () => {
		document.body.style.overflow = 'auto';
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
		setIsDeletePopupOpen(false);
	};

	return (
		<div className="page__content">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onDeleteClick={handleDeleteClick}
					closeAllPopups={closeAllPopups}
					onEditPerfil={handleProfileClick}
					onEditAvatar={handleEditAvatarClick}
					onAddPlace={handleAddPlaceClick}
					isEditProfilePopupOpen={isEditProfilePopupOpen}
					isEditAvatarPopupOpen={isEditAvatarPopupOpen}
					isAddPlacePopupOpen={isAddPlacePopupOpen}
					onCardClick={handleCardClick}
					closePopupImage={closeAllPopups}
					selectedCard={selectedCard}
					isDeletePopupOpen={isDeletePopupOpen}
				/>
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
