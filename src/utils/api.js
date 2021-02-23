import { url } from "./utils";

class Api {
  constructor() {
    this._url = url;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _handleGetToken() {
    return `Bearer ${localStorage.getItem("jwt")}`;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  updateUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, about }),
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  addCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, link }),
    }).then(this._handleResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  updateAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
      body: JSON.stringify({ avatar }),
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._handleGetToken(),
        "content-type": "application/json",
      },
    }).then(this._handleResponse);
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: this._handleGetToken(),
      },
    }).then(this._handleResponse);
  }
  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }
  register(email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }
}

const api = new Api(url);
export default api;
