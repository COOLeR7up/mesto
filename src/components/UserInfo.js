import UserRepository from "../API/Repository/UserRepository.js";
import UserModel from "../API/Model/UserModel.js";

export default class UserInfo {
    constructor({nameSelector, jobSelector, photoSelector}) {
        this.nameSelector = document.querySelector(nameSelector)
        this.jobSelector = document.querySelector(jobSelector)
        this.photoSelector = document.querySelector(photoSelector)
        this.id = null
    }

    getUserInfo() {
        return {
            name: this.nameSelector.textContent,
            job: this.jobSelector.textContent
        }
    }

    setId(value) {
        this.id = value
    }

    setUserInfo({name, job}) {
        this.nameSelector.textContent = name
        this.jobSelector.textContent = job
    }

    setAvatar(url) {
        this.photoSelector.src = url
    }
}