import UserInfo from "./UserInfo";


class People {
    name = ''
    age = 1
}


fetch('https://mesto.nomoreparties.co/v1/cohortId/users/me', {
    method: 'GET',
    headers: {
        authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
    }
})
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })

    .then((data) => {
        // TODO прописать что приходит в ответ?????

    })

    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });




fetch('https://mesto.nomoreparties.co/v1/cohortId/cards ', {
    method: 'GET',
    headers: {
        authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
    }
})
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })

    .then((data) => {
        // TODO прописать что приходит в ответ?????

    })

    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });



fetch('https://mesto.nomoreparties.co/v1/cohortId/users/me', {
    method: 'PATCH',
    headers: {
        authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Marie Skłodowska Curie',
        job: 'Physicist and Chemist'
    })
});



/*
* Models
*
* Class UserModel
*  - id
*  - name
*  - job
*  - img
*
* Class CardModel
*  - id
*  - title
*  - img
*  - like
*
*
*
* Repositories
*
* Class UserRepository
*   - get()
*       response: UserModel
*   - update(UserModel)
*       response: UserModel
*
*
* Class CardRepository
*   - get(id)
*       response: CardModel
*   - getAll()
*       response: [CardModel]
*   - update(id)
*       response: CardModel
*   - delete(id)
*       response: CardModel
*
*   - addLike(id)
*       response: {count: 1}
*   - deleteLike(id)
*       response: {count: 1}
*
* */


