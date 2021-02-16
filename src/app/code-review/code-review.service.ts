import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CodeReviewService {

  private readonly hs;
  private _items: Array<any>;

  constructor(items = [] as Array<Item>) {
    this.hs = new HelperService();
    this._items = items;
  }

  /** Update Quality */
  updateQuality(limit1, limit2, limit3, limit4): any {
    for (let i = 0; i < this._items.length; i++) {
      // Check if item name is not BTC
      // TODO: add check for XLM
      if (this._items[i].name !== 'BTC' && this._items[i].name !== 'ETH') {
        if (this._items[i].quality > limit1) {
          if (this._items[i].name != 'BTC') {
            this._items[i].quality = this._items[i].quality - 1;
            this.hs.logSuccess('Item is LTC');
          }
        }
      } else { // else If BTC or ETH
        if (this._items[i].quality < 50) {
          this._items[i].quality = this._items[i].quality + 1;
          if (this._items[i].name == 'ETH') {
            if (this._items[i].sellIn < limit2) {
              if (this._items[i].quality < limit3) {
                this._items[i].quality = this._items[i].quality + 1;
                this.hs.logSuccess('Item is LTC');
              }
            }
            if (this._items[i].sellIn < limit4) {
              if (this._items[i].quality < 50) {
                this._items[i].quality = this._items[i].quality + 1;
              }
            }
          }
        }
      }
    }

    return this._items;
  }
}
