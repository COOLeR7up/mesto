export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-18'
export const token = '2f1880b1-e827-46c5-b973-5c8fef3aa6cf'

export default class Api {
    constructor(options) {

    }

    get() {
        return fetch( baseUrl + '/users/me', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                if (res.ok) return res.json()

                return Promise.reject(`Ошибка: ${result.status}`);
            })
    }


    getAll() {
        return fetch(baseUrl + '/cards', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                if (res.ok) return res.json()

                return Promise.reject(`Ошибка: ${result.status}`);
            })
    }




    cardDelete(cardId) {
        return fetch(baseUrl + '/cards/' + cardId, {
            method: 'DELETE',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }


     add(name, link, close) {
        return fetch(baseUrl + '/cards', {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .then(() => {
                close()
            })

    }


     addLike(id) {
        return fetch(baseUrl + '/cards/likes/' + id, {
            method: 'PUT',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }


     deleteLike(id) {
        return fetch(baseUrl + '/cards/likes/' + id, {
            method: 'DELETE',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }


     update(user, close) {
        return fetch(baseUrl + '/users/me', {
            method: 'PATCH',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                about: user.job
            })
        })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .then(() => {
                close()
            })

    }


     updateAvatar(avatar, close) {
        return fetch(baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .then(() => {
                close()
            })
    }

}

// const api = new Api({
//     baseUrl: baseUrl,
//     headers: {
//         authorization: token,
//         'Content-Type': 'application/json'
//     }
// });