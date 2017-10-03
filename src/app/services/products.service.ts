import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  // there are some products when local storage is empty
  products = [
    { product_name: 'orange', data: {
      Image: 'https://4.imimg.com/data4/QC/VP/MY-24427881/juicy-oranges-500x500.jpg',
      Title: 'The orange contains vitamin C',
      // tslint:disable-next-line:max-line-length
      Description: 'The lemon is a small tree (Citrus limon) that is green even in the winter. It came from Asia, and is also the name of the tree"s oval-shaped yellow fruit. The fruit is used for cooking and other things in the world – usually for its juice.People do not know for sure where lemons have come from. However, most people think that lemons first grew in India, northern Burma, and China.[1][2] The lemon is the common name for Citrus limon. A lemon is a yellow citrus fruit. It is related to the orange. Lemon juice is about 5% citric acid, and has a pH of 2 to 3. Lemon plants vary in size yet stay generally small. The tallest height they can get is about 6 meters tall. Lemons taste sour. The juice, zest, and pulp are often used in cooking, often on fish and other meat for better taste. Lemon is also used to flavour drinks, such as lemonade or soft drinks.',
      Price: '1'
    }
  },
    { product_name: 'lemon', data: {
      Image: 'http://images6.fanpop.com/image/photos/34900000/Lemon-fruit-34914820-500-500.jpg',
      Title: 'The lemon contains vitamin C',
      // tslint:disable-next-line:max-line-length
      Description: 'The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.[1] It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.[2] The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin;[2][3] however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations.[4] The chloroplast genes, and therefore the maternal line, seem to be pomelo.[2] The sweet orange has had its full genome sequenced.[2] Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.[3]',
      Price: '1.5'
    }
    },
    { product_name: 'banana', data: {
      Image: 'http://www.eligita.kz/image/cache/catalog/aroma/banana-500x500.jpg',
      Title: 'Bananas are very delicious',
      // tslint:disable-next-line:max-line-length
      Description: 'The banana is an edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.',
      Price: '1.2'
    }
    },
    { product_name: 'pineapple', data: {
      Image: 'http://esmoke.su/image/cache/Pictures/e-liq/zhidkost-dlya-elektronnyx-sigaret-esmoke-premium-Pineapple-500x500.jpg',
      Title: 'Pineapple is tasty',
      // tslint:disable-next-line:max-line-length
      Description: 'The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples,[2][3] and the most economically significant plant in the Bromeliaceae family.[4] Pineapples may be cultivated from a crown cutting of the fruit,[2][5] possibly flowering in 5–10 months and fruiting in the following six months.[5][6] Pineapples do not ripen significantly after harvest.[7] Pineapples can be consumed fresh, cooked, juiced, or preserved. They are found in a wide array of cuisines. In addition to consumption, the pineapple leaves are used to produce the textile fiber piña in the Philippines, commonly used as the material for the men"s barong Tagalog and women\'s baro\'t saya formal wear in the country. The fiber is also used as a component for wallpaper and other furnishings.[8]',
      Price: '2.5'
    }
    },
    { product_name: 'grapefruit', data: {
      Image: 'http://xaoc-lab.ru/image/cache/catalog/FA/FA%20Grapefruit-500x500.jpg',
      Title: 'Grapefruit is very acidic but very good',
      // tslint:disable-next-line:max-line-length
      Description: 'The grapefruit (Citrus × paradisi) is a subtropical citrus tree known for its sour to semi-sweet, somewhat bitter fruit. Grapefruit is a hybrid originating in Barbados as an accidental cross between two introduced species, sweet orange (C. sinensis) and pomelo or shaddock (C. maxima), both of which were introduced from Asia in the seventeenth century.[1] When found, it was named the “forbidden fruit”;[2] and frequently, it has been misidentified with the pomelo.[3] The grapefruit\'s name alludes to clusters of the fruit on the tree, which often appear similar to that of grapes.[4]',
      Price: '1.35'
    }
    },
    { product_name: 'kiwi', data: {
      Image: 'http://vapecity.in.ua/image/cache/catalog/Goods/Flavours/TPA/Fruits/Kiwi-500x500.png',
      Title: 'You have to taste it',
      // tslint:disable-next-line:max-line-length
      Description: 'Kiwifruit (often abbreviated as kiwi) or Chinese gooseberry is the edible berries of several species of woody vines in the genus Actinidia.[1][2] The most common cultivar group of kiwifruit (\'Hayward\')[3] is oval, about the size of a large hen\'s egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in diameter). It has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture and a sweet but unique flavor. It is a commercial crop in several countries, such as China, Italy, New Zealand, Chile, Greece, and France.[4]',
      Price: '2'
    }
    },
  ];

  constructor() {
  }

  // store product in local storage
  storeProduct(product) {
    localStorage.setItem(product.product_name, JSON.stringify(product.data));
  }

  // get single product from local storage
  getSingleProduct(product_name) {
    return JSON.parse(localStorage.getItem(product_name));
  }

  // get all products from local storage
  getAllProducts() {
    const productsArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));
      productsArray.push({product_name: key, data});
    }
    return productsArray;
  }

  // delete product from local storage
  deleteProduct(product_name) {
    localStorage.removeItem(product_name);
  }

  // edit product from local storage
  editProduct(product) {
   this.deleteProduct(product.product_name);
   localStorage.setItem(product.product_name, JSON.stringify(product.data));
  }

  // when the page is initialized it checks if there are some data in local storage
  // if not, then it create some products in it,
  // if yes, then it do nothing
  storeFirstProducts() {
    if (localStorage.length === 0) {
      for (let i = 0; i < this.products.length; i++) {
        localStorage.setItem(this.products[i].product_name, JSON.stringify(this.products[i].data));
      }
    }
  }
}
