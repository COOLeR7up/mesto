export default class UserInfo {
    constructor(selectors) {
        if (selectors !== undefined) {
            this.nameSelector = document.querySelector(selectors.nameSelector || '')
            this.jobSelector = document.querySelector(selectors.jobSelector || '')
        }
    }

    _instance = null

    getInstance({nameSelector, jobSelector}) {
        return this._instance || (this._instance = this.createInstance({nameSelector, jobSelector}))
    }


    createInstance({nameSelector, jobSelector}) {
        const obj = new UserInfo({nameSelector, jobSelector})

        return obj
    }


    getUserInfo() {
        this.name = this.nameSelector.textContent
        this.job = this.jobSelector.textContent

        return {
            name: this.nameSelector.textContent,
            job: this.jobSelector.textContent
        }
    }

    setUserInfo({name, job}) {
        this.name = name
        this.job = job

        this.nameSelector.value = name
        this.jobSelector.value = job
    }
}