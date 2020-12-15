export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-18'
export const token = '2f1880b1-e827-46c5-b973-5c8fef3aa6cf'

export default class Api {
    constructor(options) {

    }

    get(userInfo) {
        return fetch( baseUrl + '/users/me', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                if (res.ok) return res.json()

                return Promise.reject(`Ошибка: ${result.status}`);
            })
            .then(result => {
                const user = {
                    name: result.name,
                    job: result.about,
                    id: result._id
                }

                userInfo.setUserInfo(user)
                userInfo.setAvatar(result.avatar)
                userInfo.setId(result._id)
                return
            })
            .catch(err => console.log(err))
    }


    getAll(section) {
        return fetch(baseUrl + '/cards', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                if (res.ok) return res.json()

                return Promise.reject(`Ошибка: ${result.status}`);
            })
            .then((result) => {
                result = result.reverse()
                result.forEach(item => {
                    section.addItem(item.name, item.link, item.likes, item._id, item.owner._id)
                })
                return
            })
            .catch(err => console.log(err))
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
            .catch(err => console.log(err))
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
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
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
            .catch(err => console.log(err))
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
            .catch(err => console.log(err))
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
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
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
            .then(res => {
                if (res.ok) {

                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

}

// const api = new Api({
//     baseUrl: baseUrl,
//     headers: {
//         authorization: token,
//         'Content-Type': 'application/json'
//     }
// });