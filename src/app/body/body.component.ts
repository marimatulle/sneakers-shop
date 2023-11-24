import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  products = [
    {
      name: 'Nike Travis Scott X PlayStation',
      price: 'R$4,500',
      image:
        'https://sneakernews.com/wp-content/uploads/2020/10/travis-scott-nike-dunk-playstation-5-release-info-7.jpg',
    },
    {
      name: 'Adidas Forum Low X Bad Bunny',
      price: 'R$700,00',
      image:
        'https://sneakernews.com/wp-content/uploads/2021/03/Bad-Bunny-adidas-Forum-Buckle-Lo-GW0264-9.jpeg',
    },
    {
      name: 'Yeezy 500 Enflame',
      price: 'R$2,000',
      image:
        'https://sneakernews.com/wp-content/uploads/2021/05/yeezy-enflame.jpg',
    },
    {
      name: 'Nike Air Max 97',
      price: 'R$599,00',
      image:
        'https://sneakernews.com/wp-content/uploads/2022/04/Nike-Air-Max-97-DX3947-200-1.jpg',
    },
    {
      name: 'Jordan 1 Retro High OG Spider-Man Across the Spider-Verse',
      price: 'R$700,00',
      image:
        'https://sneakernews.com/wp-content/uploads/2022/12/Air-Jordan-1-Across-the-Spider-Verse-3.jpg',
    },
    {
      name: 'Nike Air Trainer 1 Neutral Olive',
      price: 'R$2,000',
      image:
        'https://sneakernews.com/wp-content/uploads/2023/11/nike-air-trainer-1-neutral-olive-light-bone-dark-stucco-fj4182-200-10.jpg',
    },
    {
      name: 'Puma Plexus',
      price: 'R$1,400',
      image:
        'https://sneakernews.com/wp-content/uploads/2023/01/PUMA-PLEXUS-Eggnog-Elektro-Green-390456-01-6.jpg',
    },
    {
      name: 'Adidas ADI2000 New Lime Green',
      price: 'R$2,350',
      image:
        'https://sneakernews.com/wp-content/uploads/2022/01/adidas-ADI-2000-GY5272-0.jpg',
    },
  ];
}
