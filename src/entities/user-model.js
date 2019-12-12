export default class UserModel {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.isPro = data.is_pro;
    this.avatarUrl = data.avatar_url;
  }
}
