import { Component } from '@angular/core';
import {Product} from "./products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories = ['Headphones', 'Clothing', 'Books', 'Furniture'];
  products: { [key: string]: Product[] } = {
    Headphones: [
      {
        image: "/assets/images/img1.png",
        name: "Apple AirPods 3",
        description: "тип: гарнитура\n" +
          "вид: внутриканальные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: открытые\n" +
          "тип крепления: без крепления\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        price: 85998,
        link: "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img2.png",
        name: "Marshall Major",
        description: "тип: гарнитура\n" +
          "вид: накладные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: закрытые\n" +
          "тип крепления: оголовье\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        price: 69737,
        link: "https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img3.png",
        name: "Realme Buds T100",
        description: "тип: гарнитура\n" +
          "вид: внутриканальные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: закрытые\n" +
          "тип крепления: без крепления\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        price: 9287,
        link: "https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img4.png",
        name: "TWS F9-5",
        description: "тип: гарнитура\n" +
          "вид: внутриканальные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: полуоткрытые\n" +
          "тип крепления: без крепления\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        price: 1188,
        link: "https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img5.png",
        name: "CAT EAR STN-28",
        description: "тип: гарнитура\n" +
          "вид: накладные\n" +
          "подключение: беспроводное\n" +
          "тип акустического оформления: закрытые\n" +
          "тип крепления: оголовье\n" +
          "система активного шумоподавления: Нет\n" +
          "микрофон: Да",
        price: 1897,
        link: "https://kaspi.kz/shop/p/cat-ear-stn-28-rozovyi-101768468/?c=233620100",
        likes: 0
      },
    ],
    Clothing: [
      {
        image: "/assets/images/img_1.png",
        name: "Футболка Ricco Man Ricco2023",
        description: "воротник/вырез: поло\n" +
          "модель: футболка\n" +
          "рукава: короткие\n" +
          "состав: трикотаж, ,хлопок\n" +
          "узор: однотонный",
        price: 3498,
        link: "https://kaspi.kz/shop/p/futbolka-ricco-man-ricco2023-belyi-m-112471236/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img.png",
        name: "Спецодежда для мужчин",
        description: "сфера применения: универсальная\n" +
          "верхняя часть одежды: куртка\n" +
          "нижняя часть одежды: брюки\n" +
          "основной материал: полиэстер\n" +
          "сезон: демисезон",
        price: 18166 ,
        link: "https://kaspi.kz/shop/p/184498-seryi-50-112857899/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img_2.png",
        name: "Футболка Tespe АТК1177",
        description: "воротник/вырез: круглый вырез\n" +
          "модель: футболка\n" +
          "рукава: короткие\n" +
          "состав: хлопок\n" +
          "узор: камуфляж",
        price: 1100 ,
        link: "https://kaspi.kz/shop/p/futbolka-tespe-atk1177-haki-50-104745747/",
        likes: 0
      },
      {
        image: "/assets/images/img_3.png",
        name: "Флиска CHANDARAH",
        description: "модель: флиска\n" +
          "застежка: молния\n" +
          "длина: до бедра\n" +
          "состав: полиэстер, ,хлопок, ,флис\n" +
          "сезон: круглогодичный",
        price: 22895,
        link: "https://kaspi.kz/shop/p/fliska-chandarah-a-3-seryi-haki-xl-113735947",
        likes: 0
      },
      {
        image: "/assets/images/img_4.png",
        name: "Брюки",
        description: "модель: брюки\n" +
          "состав: хлопок\n" +
          "узор: однотонный",
        price: 3400,
        link: "https://kaspi.kz/shop/p/fazo-r-5109-1-chernyi-48-108499564",
        likes: 0
      },
    ],
    Books: [

      {
        image: "/assets/images/img_5.png",
        name: "Тәкаппар ғашықтар",
        description: "возраст: 16+\n" +
          "язык издания: казахский\n" +
          "переплет: твердый переплет\n" +
          "жанр: современная мировая проза",
        price: 5999,
        link: "https://kaspi.kz/shop/p/dzhein-ostin-t-kappar-ashy-tar-105934631",
        likes: 0
      },
      {
        image: "/assets/images/img_6.png",
        name: "Харизма: Как влиять, убеждать и вдохновлять",
        description: "возраст: 16+\n" +
          "язык издания: русский\n" +
          "переплет: мягкий переплет\n" +
          "жанр: психология практическая",
        price: 987,
        link: "https://kaspi.kz/shop/p/kabein-o-f-harizma-kak-vlijat-ubezhdat-i-vdohnovljat--26001091",
        likes: 0
      },
      {
        image: "/assets/images/img_7.png",
        name: "Атомные привычки",
        description: "возраст: 16+\n" +
          "язык издания: русский\n" +
          "переплет: твердый переплет\n" +
          "жанр: психология популярная",
        price: 4276,
        link: "https://kaspi.kz/shop/p/klir-d-atomnye-privychki-kak-priobresti-horoshie-privychki-i-izbavit-sja-ot-plohih-100699083/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img_8.png",
        name: "Гауһар тас",
        description: "возраст: 12+\n" +
          "язык издания: русский\n" +
          "переплет: мягкий переплет\n" +
          "жанр: современная казахстанская проза",
        price: 1149,
        link: "https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img_9.png",
        name: "Миссия выполнима. Технология счастливой жизни",
        description: "возраст: 12+\n" +
          "язык издания: русский\n" +
          "переплет: твердый переплет\n" +
          "жанр: психология популярная",
        price: 3350,
        link: "https://kaspi.kz/shop/p/seisembai-m-missija-vypolnima-tehnologija-schastlivoi-zhizni-110909648/?c=233620100",
        likes: 0
      },
    ],
    Furniture: [
      {
        image: "/assets/images/img_10.png",
        name: "Табурет ЗМИ Пенек",
        description: "тип: табурет\n" +
          "материал: металл\n" +
          "обивка: экокожа\n" +
          "жесткость сиденья: средняя\n" +
          "высота: 47.0 см\n" +
          "ширина: 46.0 см\n" +
          "глубина: 46.0 см\n" +
          "цвет: серый\n" +
          "страна: Россия",
        price: 3115,
        link: "https://kaspi.kz/shop/p/taburet-zmi-penek-47x46x46-sm-seryi-102981664",
        likes: 0
      },
      {
        image: "/assets/images/img_11.png",
        name: "Simgleton Hanger",
        description: "конструкция: напольная\n" +
          "материал: металл\n" +
          "количество крючков: отсутствуют\n" +
          "ширина: 150.0 см\n" +
          "высота: 110.0 см\n" +
          "цвет: черный\n" +
          "страна: Китай",
        price: 4700 ,
        link: "https://kaspi.kz/shop/p/simgleton-hanger-tw610-metall-150x110-sm-chernyi-106301738",
        likes: 0
      },
      {
        image: "/assets/images/img_12.png",
        name: "Sofabed.kz диван",
        description: "механизм трансформации: еврокнижка\n" +
          "обивка: велюр\n" +
          "высота: 70.0 см\n" +
          "длина: 210.0 см\n" +
          "глубина: 130.0 см\n" +
          "цвет: серый\n" +
          "страна: Казахстан",
        price: 146927,
        link: "https://kaspi.kz/shop/p/sofabed-kz-789-divan-obivka-veljur-70x210x130-sm-seryi-105983820/?c=233620100",
        likes: 0
      },
      {
        image: "/assets/images/img_13.png",
        name: "Обеденный стол",
        description: "форма: овальный\n" +
          "тип: трансформер\n" +
          "материал: ЛДСП\n" +
          "длина: 400.0 см\n" +
          "ширина: 100.0 см\n" +
          "высота: 76.0 см\n" +
          "цвет: белый\n" +
          "страна: Казахстан",
        price: 83000,
        link: "https://kaspi.kz/shop/p/obedennyi-stol-316280-400x100x76-belyi-108440524",
        likes: 0
      },
      {
        image: "/assets/images/img_14.png",
        name: "Матрас Элит Престиж",
        description: "тип: матрас\n" +
          "жесткость стороны 1: высокая\n" +
          "жесткость стороны 2: средняя\n" +
          "пружинный блок: с независимыми пружинами\n" +
          "наполнитель: кокосовая койра, ,войлок, ,пенополиуретан\n" +
          "материал чехла: хлопок, ,жаккард\n" +
          "ортопедический: Да\n" +
          "цвет: белый\n" +
          "страна: Казахстан",
        price: 26000,
        link: "https://kaspi.kz/shop/p/matras-elit-prestizh-kokos-90-200-90x200x20-sm-chehol-hlopok-zhakkard-103669033/?c=233620100",
        likes: 0
      },
    ],
  };

  selectedCategory: string | null = null;

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
  }
  removeProduct(product: Product): void {
    if (this.selectedCategory) {
      this.products[this.selectedCategory] = this.products[this.selectedCategory].filter(p => p !== product);
    }
  }

  likeProduct(product: Product): void {
    product.likes++;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
