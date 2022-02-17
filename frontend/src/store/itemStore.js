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
        "name": "Closet",
        "price": 5501,
        "rating": 0,
        "img": "b3a5db1d-d892-4ceb-96df-f0dce663d30e.jpg",
        "typeId": 4,
        "createdAt": "2022-02-16T05:47:04.141Z",
        "updatedAt": "2022-02-16T05:47:04.141Z",
        "itemInfo": []
      },
      {
        "id": 2,
        "name": "Closet",
        "price": 5501,
        "rating": 0,
        "img": "b3a5db1d-d892-4ceb-96df-f0dce663d30e.jpg",
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