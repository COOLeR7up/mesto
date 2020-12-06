import {baseUrl, token} from "../apiConfig.js";

export default class UserRepository {
    static get() {
        return fetch( baseUrl + '/users/me', {
            headers: {
                authorization: token
            }
        })
    }



    static update(user) {
        fetch(baseUrl + '/users/me', {
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
}


// * Class UserRepository
// *   - get()
// *       response: UserModel
// *   - update(UserModel)
// *       response: UserModel