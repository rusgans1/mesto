export class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._info = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    this._userProfile = {
      name: this._name.textContent,
      info: this._info.textContent,
    };

    return this._userProfile;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.info;
  }
}