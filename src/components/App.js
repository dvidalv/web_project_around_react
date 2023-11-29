import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import AddPlacePopup from './AddPlacePopup';
import DeletePopup from './DeletePopup';

function App() {
	const [cards, setCards] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
	const [cardToDelete, setCardToDelete] = useState(null);

	async function handleCardLike(card) {
		// Verifica una vez más si a esta tarjeta ya le han dado like
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		try {
			const newCard = await Api.changeLikeCardStatus(card._id, !isLiked);
			setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
		} catch (error) {
			console.log(error);
		}
	}

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

	const handleCardDelete = async (card) => {
		try {
			await api.deleteCard('cards', card._id);
			setCards((cards) => cards.filter((c) => c._id !== card._id));
		} catch (err) {
			console.log(err);
		}
		closeAllPopups();
	};

	const handleDeleteClick = (card) => {
		setCardToDelete(card);
		setIsDeletePopupOpen(true);
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

	const handleUpdateUser = async (userData) => {
		try {
			const updatedUser = await api.patchUserInfo(userData);
			setCurrentUser(updatedUser);
		} catch (error) {
			console.log(error);
		}
		closeAllPopups();
	};
	const handleUpdateAvatar = async (avatar) => {
		try {
			const updateAvatar = await api.setUserAvatar(avatar);
			setCurrentUser(updateAvatar);
		} catch (error) {
			console.log(error);
		}
		closeAllPopups();
	};

	const handleAddPlaceSubmit = async (card) => {
		try {
			const newCard = await api.addCard(card);
			setCards([newCard, ...cards]);
		} catch (error) {
			console.log(error);
		}
		closeAllPopups();
	};

	return (
		<div className="page__content">
			<CurrentUserContext.Provider value={{ currentUser, cardToDelete }}>
				<Header />
				<Main
					onDeleteClick={handleDeleteClick}
					onEditAvatar={handleEditAvatarClick}
					onAddPlace={handleAddPlaceClick}
					isEditAvatarPopupOpen={isEditAvatarPopupOpen}
					isAddPlacePopupOpen={isAddPlacePopupOpen}
					onCardClick={handleCardClick}
					selectedCard={selectedCard}
					isDeletePopupOpen={isDeletePopupOpen}
					onEditPerfil={handleProfileClick}
					cards={cards}
					onCardLike={handleCardLike}
					closePopupImage={closeAllPopups}
				/>
				<Footer />
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlaceSubmit={handleAddPlaceSubmit}
				/>
				<DeletePopup
					isOpen={isDeletePopupOpen}
					onClose={closeAllPopups}
					ondeleteCard={handleCardDelete}
				/>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
