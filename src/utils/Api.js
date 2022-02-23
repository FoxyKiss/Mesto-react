//? Класс с запросами для отрисовки карт и получения информации профиля.
class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl
    this._token = token
  }

  _checkResponse(res) {
    if (res) {
      return res.json()
    } return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers:
      {
        authorization: this._token
      },
    }).then(this._checkResponse)
  }

  setInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers:
      {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then(this._checkResponse)
  }

  getStartCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers:
      {
        authorization: this._token
      }
    }).then(this._checkResponse)
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers:
      {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse)
  }

}
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-34', '89a2c951-8971-4216-9141-16ef211258eb')

export default api