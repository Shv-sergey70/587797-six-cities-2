import UserModel from "./user-model";

export default class OfferModel {
  constructor(data) {
    this.city = data.city;
    this.previewImage = data.preview_image;
    this.title = data.title;
    this.isFavorite = data.is_favorite;
    this.isPremium = data.is_premium;
    this.images = data.images;
    this.rating = data.rating;
    this.type = data.type;
    this.bedrooms = data.bedrooms;
    this.maxAdults = data.max_adults;
    this.price = data.price;
    this.goods = data.goods;
    this.host = new UserModel(data.host);
    this.description = data.description;
    this.location = data.location;
    this.id = data.id;
  }
}
