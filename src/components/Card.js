function Card({onCardClick, card}) {
	return (
		<li className="card">
						<div className="card__image-container">
							<img  onClick={() => onCardClick(card)} className="card__imagen" src={card.link} alt={card.name} />
						</div>
						<div className="card__contenido">
							<div className="card__info">
								<p className="card__title">{card.name}</p>
								<div className="card_dislike"></div>
							</div>
							<span className="card__likes card__like-counter">{card.likes.length}</span>
						</div>
						<i className="fa-solid fa-trash card__trash"></i>
					</li>
	)
}

export default Card
