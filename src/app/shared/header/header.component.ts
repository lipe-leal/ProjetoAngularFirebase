import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://cdn3.iconfinder.com/data/icons/vol-3/128/fitness-512.png',
    itens: [
      {icone: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678085-house-512.png', texto: 'Início', link:'/home'},
      {icone: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678110-sign-info-512.png', texto: 'Sobre', link:'/sobre'},
      {icone: 'https://cdn4.iconfinder.com/data/icons/navigation-98/512/1_Galery_image_photo_picture_media-512.png', texto: 'Galeria', link:'/galeria'},
      {icone: 'https://cdn1.iconfinder.com/data/icons/multimedia-and-interface-flat-style-1/32/Multimedia_Telephone_call_contact_phone_ringing_multimedia-512.png', texto: 'Contato', link:'/contato'},
    ]
  }

  constructor() { }

  ngOnInit() {}

}
