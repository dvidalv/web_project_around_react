const token = '9d080c9f-32ec-43d7-9e8d-be1fdad6fe1b';

class Api {
	constructor() {
		this.groupId = 'web_es_09';
		this._token = token;
		this._url = `https://around.nomoreparties.co/v1/${this.groupId}/`;
	}
	async fetchData(url, method, data) {
		try {
			const result = await fetch(`${url}`, {
				method,
				headers: {
					authorization: this._token,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (result.ok) {
				return await result.json();
			}

			return await Promise.reject(`Error: ${result.status}`);
		} catch (error) {
			throw error;
		}
	}

	async getInitialCards(resource) {
		return await this.fetchData(`${this._url}${resource}`, 'GET');
	}

	async getUserInfo(resource) {
		return await this.fetchData(`${this._url}${resource}`, 'GET');
	}
	async getUserAvatar(resource) {
		return await this.fetchData(`${this._url}${resource}`);
	}

	async patchUserInfo(resource, data) {
		return await this.fetchData(`${this._url}${resource}`, 'PATCH', data);
	}
	async addCard(resource, data) {
		return await this.fetchData(`${this._url}${resource}`, 'POST', data);
	}

	async deleteCard(resource, card_Id) {
		return await this.fetchData(`${this._url}${resource}`, 'DELETE');
	}



	async dislikeCard(resource, card_Id) {
		return await this.fetchData(`${this._url}${resource}/${card_Id}`, 'DELETE');
	}
	async changeLikeCardStatus(id, isLike){
		return await this.fetchData(`${this._url}cards/likes/${id}`, isLike? 'PUT' : 'DELETE');
	}

}
const api = new Api();

export default api;
