//import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';

//importation de l'interface de l'album//
//import { Album } from './album';
//import { Product } from './product';

//import { Observable } from 'rxjs/Observable';

//@Injectable()
//export class ProductService {
//private _albumUrl = '../assets/album.json';
//Ajout d'une propriété productsUrl au ProductService
//private _productsUrl = '../ assets / products.json';
// Ajout d'un type de retour à la méthode getAlbum ajout de l'observable//
//constructor(private _http: Http) { }
//getAlbum(id: number): Observable<Album> {
//return this._http.get(this._albumUrl).map((response) => <Album>response.json());
//}
//getProducts(): Observable<Product[]> {
//return this._http.get(this._productsUrl).map((response) => <Product[]>response.json());
//}


//}
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Album } from './album';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json());
  }
}
