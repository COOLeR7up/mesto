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
    }


    getAll() {
        return fetch(baseUrl + '/cards', {
            headers: {
                authorization: token
            }
        })
    }


     add(name, link) {
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
    }


     update(user) {
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
    }


     updateAvatar(avatar) {
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
    }

}

// const api = new Api({
//     baseUrl: baseUrl,
//     headers: {
//         authorization: token,
//         'Content-Type': 'application/json'
//     }
// });