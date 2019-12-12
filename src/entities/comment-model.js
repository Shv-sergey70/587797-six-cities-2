import UserModel from "./user-model";

export default class CommentModel {
  constructor(data) {
    this.id = data.id;
    this.user = new UserModel(data.user);
    this.rating = data.rating;
    this.comment = data.comment;
    this.date = data.date;
  }
}
