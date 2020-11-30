import { token, cohort } from "./utils";

class Api {
  constructor() {
    this._token = token;
    this._cohort = cohort;
    this._url = "https://mesto.nomoreparties.co/v1/";
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._url}${this._cohort}/users/me`, {
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  updateUserInfo(name, about) {
    return fetch(`${this._url}${this._cohort}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, about }),
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}${this._cohort}/cards`, {
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  addCard(name, link) {
    return fetch(`${this._url}${this._cohort}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, link }),
    }).then(this._handleResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}${this._cohort}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  setLike(cardId) {
    return fetch(`${this._url}${this._cohort}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._url}${this._cohort}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  updateAvatar(avatar) {
    return fetch(`${this._url}${this._cohort}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "content-type": "application/json",
      },
      body: JSON.stringify({ avatar }),
    }).then(this._handleResponse);
  }
}

const api = new Api(token, cohort);
export default api;
