import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl + '/api';

@Injectable()
export class AdminService {
  
  constructor(private http: Http) {}
  
  // getListBuyer() {
  //   return this.http.get(`${apiUrl}/buyers`)
  //     .map((res) => res.json());
  // }
  
  // getBuyer(id) {
  //   return this.http.get(`${apiUrl}/buyers/${id}`)
  //     .map((res) => res.json());
  // }
  
  // editBuyer(buyer) {
  //   return this.http.put(`${apiUrl}/buyers/${buyer.id}`, buyer)
  //     .map((res) => res.json());
  // }
  
  // removeBuyer(id) {
  //   return this.http.delete(`${apiUrl}/buyers/${id}`)
  //     .map((res) => res.json());
  // }

}



