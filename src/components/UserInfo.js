import UserRepository from "../API/Repository/UserRepository.js";
import UserModel from "../API/Model/UserModel.js";

export default class UserInfo {
    constructor({nameSelector, jobSelector, photoSelector}) {
        this.nameSelector = document.querySelector(nameSelector)
        this.jobSelector = document.querySelector(jobSelector)
        this.photoSelector = document.querySelector(photoSelector)
    }


    getUserInfo() {
        return {
            name: this.nameSelector.textContent,
            job: this.jobSelector.textContent
        }
    }


    setUserInfo({name, job}) {
        this.nameSelector.textContent = name
        this.jobSelector.textContent = job

        const user = new UserModel(name, job)
        UserRepository.update(user)
    }

    setAvatar(url) {
        const photo = document.querySelector(this.photoSelector)
        photo.src = url
    }
}