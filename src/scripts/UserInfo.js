export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this.nameSelector = document.querySelector(nameSelector)
        this.jobSelector = document.querySelector(jobSelector)
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
    }
}