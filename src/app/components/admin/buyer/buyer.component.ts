import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyerService } from '../../../services/buyer/buyer.service';

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'http://localhost:3000/api/buyers/newbuyer';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
  providers: [BuyerService]
})
export class BuyerComponent implements OnInit {

  public roles = [
    { value: 'Buyer', display: 'Buyer' },
    { value: 'Company', display: 'Company' },
    { value: 'Guest', display: 'Guest' }
  ];

  public uploader:FileUploader = new FileUploader({url: URL});

  newBuyer = {
    username: '',
    email: '',
    role: ''
  };

  feedback: string;

	buyers: any;

  constructor(
  	private route: ActivatedRoute,
  	private buyerService: BuyerService
  	) { }

  ngOnInit() {
    this.getListBuyer();

    //Upload Images
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  getListBuyer(){
    this.buyerService.getListBuyer()
    .subscribe((buyer) => {
      this.buyers = buyer;
      console.log(this.buyers)
    });
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.newBuyer.username);
      form.append('email', this.newBuyer.email);
      form.append('role', this.newBuyer.role);
    };

    this.uploader.uploadAll();
  }
}




