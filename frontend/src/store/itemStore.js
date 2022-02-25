import { makeAutoObservable } from "mobx"

export class ItemStore {
  constructor() {
    this._types = [];
    this._items = [];
    this._selectedType = {};
    this._page = 1;
    this._totalCount = 10;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setItems(items) {
    this._items = items;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get types() {
    return this._types;
  }

  get items() {
    return this._items;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }

  get selectedType() {
    return this._selectedType;
  }

}

export default ItemStore;