import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const shopping = (name: string,item1: string,item2: string,item3: string,price): [number,number,number])=>{
//   console.log (item1 +' Пошел в магазин'):
//   console.log ('Он купил там сначала',name);
//   console.log ('Затем он купил', item2);
//   console.log('B концеон еще купил', item3)
//   shopping ( "Ильнур", 'Хлеб',"Мясо", "Молоко' )
// }
// shopping ( 'Ильнур', 'Хлеб', 'Мясо',"Молоко', [30, 350, 70]);
// const names = ['Ilnur', 'Farukh','Sveta', 'Dmitry', 'djakl'];
// names.forEach(
// (name) => {
//   console.log('name is;',name)
// }
// )
// names.map(
//   (name) => {
//     console.log (name.toUpperCase());
//   }
// // 
// const shopping= (name: string, item1: string, item2: string,  price: [ number,number,number,])=>{
//   return name + 'пошел в магазин'+ item1 +'он купил хлеб' +item2+'заыввфв' + price + 'djklaldl'}
//   const shoppingingResult= shopping('k,ad', 'dnajkd','njdkamnd', ) 
//   console.log(shoppingingResult)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
 isShowcatalog = true;
 readonly headeritem1 = 'Главная'
 readonly headeritem2 = 'О компаний'
 readonly headeritem3 = 'Каталог'
 readonly header2item = 'Каталог'
 readonly header2item2 = 'Стройматериалы'
 readonly header2item3 = 'Инструменты'
 readonly header2item4 = 'Электрика'
 readonly header2item5 = 'Интерьер и одежда'
 
}
