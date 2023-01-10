import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-benevit',
  templateUrl: './benevit.page.html',
  styleUrls: ['./benevit.page.scss'],
})
export class BenevitPage implements OnInit {
  imageUrl = '';
  imageUrl2 = '';
  imageUrl3 = '';
  imageUrl4 = '';
  imageUrl5 = '';
  imageUrl6 = '';
  imageUrl7 = '';
  imageUrl8 = '';
  imageUrl9 = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getImage();
    this.getImage2();
    this.getImage3();
    this.getImage4();
    this.getImage5();
    this.getImage6();
    this.getImage7();
    this.getImage8();
    this.getImage9();
   }

  getImage() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl = base64data;
      });
  }

  getImage2() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl2 = base64data;
      });
  }
  getImage3() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl3 = base64data;
      });
  }

  getImage4() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl4 = base64data;
      });
  }

  getImage5() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl5 = base64data;
      });
  }

  getImage6() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl6 = base64data;
      });
  }

  getImage7() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl7 = base64data;
      });
  }

  getImage8() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl8 = base64data;
      });
  }

  getImage9() {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu',
      { responseType: 'text' })
      .subscribe(data => {
        const imageData = JSON.parse(data);
        const base64data = imageData.url;
        this.imageUrl9 = base64data;
      });
  }
}
