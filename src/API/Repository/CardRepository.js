import {baseUrl, token} from "../apiConfig.js";
import Api from "../../components/Api";

export default class CardRepository {
    static getAll() {
        return fetch(baseUrl + '/cards', {
            headers: {
                authorization: token
            }
        })
    }

    static add(name, link) {
        // fetch(baseUrl + '/cards', {
        //     method: 'POST',
        //     headers: {
        //         authorization: token,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name,
        //         link
        //     })
        // })
        //     .then(res => {
        //         if (res.ok) {
        //             return res.json();
        //         }
        //
        //         return Promise.reject(`Ошибка: ${res.status}`);
        //     })
        //     .catch(err => console.log(err))

        const api = new Api()
        api.add(name, link)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }


    static addLike(id) {
        fetch(baseUrl + '/cards/likes/' + id, {
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


    static deleteLike(id) {
        fetch(baseUrl + '/cards/likes/' + id, {
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



}


// * Class CardRepository
// *   - get(id)
// *       response: CardModel
// *   - getAll()
// *       response: [CardModel]
// *   - update(id)
// *       response: CardModel
// *   - delete(id)
// *       response: CardModel
// *
// *   - addLike(id)
// *       response: {count: 1}
// *   - deleteLike(id)
// *       response: {count: 1}