import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  products = [
    { name: 'Nike Travis Scott X PlayStation', price: '$1,500', image: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/e9c8b470-c8ef-4f87-8e4a-e6e87feed2e5.jpg'},
    { name: 'Adidas Forum Low X Bad Bunny', price: '$509', image: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/e1dd0b32-40fb-4032-bb5f-9d6d50f2cba9.png'},
    { name: 'Yeezy 500 Enflame', price: '$187', image: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/c5629844-a65c-4157-93fb-be91849eead0.jpg'},
    { name: 'Nike Air Max 97', price: '$122', image: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/e71b6783-6ebb-4a2c-b721-2087eb7d81d9.jpg'},
    { name: 'Jordan 1 Retro High OG Spider-Man Across the Spider-Verse', price: '$699', image: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/900efeed-fe65-40fa-bde4-3dfb5ca10c6e.jpg'},
    { name: 'Nike SB Dunk Low Freddy Krueger', price: 'R$2,000', image: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/ea600d43-eebf-4a7f-aaa4-920325cf67ae.jpg'},
  ]
}
