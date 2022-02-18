import { makeAutoObservable } from "mobx"

export class ItemStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Sofa' },
      { id: 2, name: 'Closet' }
    ]
    this._items = [
      {
        "id": 4,
        "name": "Apple Iphone",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 2,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 1,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 5,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 6,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 7,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 8,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 7,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 8,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 7,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 8,
        "name": "Lenovo Touchpad",
        "price": 5501,
        "rating": 4.2,
        "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types
  }

  setItems(items) {
    this._items = items
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  get types() {
    return this._types
  }

  get items() {
    return this._items
  }

  get selectedType() {
    return this._selectedType
  }

}

export default ItemStore;