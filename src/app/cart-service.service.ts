import { Injectable,} from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
 

  constructor(private http: HttpClient) {}

cardItems = [];

getLaps(){
  return this.laps
}

  postData(link, data) {
    return this.http.post(link, data);
  }

  add(id , arr) {
   if (arr[id].title === 'Rubic cube'){
      this.cardItems.push(this.products[id])
      this.products[id].pressed = true 
  
   }
   else if (arr[id].title ==='lap top'){
      this.cardItems.push(this.laps[id])
      this.laps[id].pressed = true  
   }
  }
 


  remove(uniqueId , id) {
     this.cardItems = this.cardItems.filter(item => item.uniqueId !== uniqueId)
   
    
    if (uniqueId <= 8 ){
      this.products[id].pressed =false
    }
    else {
      this.laps[id].pressed = false
    }
     
  }

  getProducts() {
    return this.products;
  }
 
  getCardItems() {
    return this.cardItems;
  }

plus ( id , title){
  let originalTitle = 'Rubic cube'
  if (title === originalTitle){
    this.products[id].quantity++
  }else {
    this.laps[id].quantity ++
  }
}

minus(id , title){
  let originalTitle = 'Rubic cube'
  if (title === originalTitle){
    this.products[id].quantity--
  }else {
    this.laps[id].quantity --
  }

}

  refresh() {
    for (let i of this.products) {
      i.pressed = false;
    }
    this.cardItems = []
   
  }

  total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].price * arr[i].quantity;
    }
    return sum;
  }
  

  products = [
    {
      title: 'Rubic cube',
      type: '2*2',
      difficulty: 'beginner',
      image:
        'data:image/jpeg;base64,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',
      price: 30,
      id: 0,
      uniqueId:0,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: '3*3',
      uniqueId:1,
      difficulty: 'intermediate',
      image:
        'https://5.imimg.com/data5/QO/CR/MY-22789453/magic-rubik-cube-500x500.jpg',
      price: 32,
      id: 1,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: '4*4',
      difficulty: 'intermediate',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51O7jTYiDLL._AC_SY355_.jpg',
      price: 35,
      id: 2,
      uniqueId:2,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: 'mirror',
      difficulty: 'advanced',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61xKF56d15L._AC_SX679_.jpg',
      price: 35,
      id: 3,
      uniqueId:3,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: '5*5',
      difficulty: 'advanced',
      image:
        'https://www.dhresource.com/0x0/f2/albu/g6/M01/95/23/rBVaR1qTmfeAKvv4AAITL9hxfAI423.jpg',
      price: 40,
      uniqueId:4,
      id: 4,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: 'pyramid',
      difficulty: 'beginner',
      image:
        'https://ae01.alicdn.com/kf/HTB1x4VRgxSYBuNjSspjq6x73VXav/D-FantiX-ShengShou-2x2-Pyramid-Cube-Puzzle-Triangle-Magic-Cube-Puzzle-Toy-Black.jpg',
      price: 30,
      id: 5,
      uniqueId:5,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: 'pyramid',
      difficulty: 'advanced',
      image:
        'https://cdn11.bigcommerce.com/s-tv8lgy6yx3/images/stencil/1280x1280/products/80102/409352/Mofangge-4x4x4-Pyramid-Cube-Black-Stickerless-Magic-Cube-KiloPyramid-Cube-4x4-Puzzle-Pyramid-Cube-Special-Toys__26258.1577544009.jpg?c=1?imbypass=on',
      price: 40,
      uniqueId:6,
      id: 6,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: 'diamond',
      difficulty: 'advanced',
      image:
        'https://prod-giuntialpunto-static.giunti.stormreply.com/images/I/5193HTYDLlL.jpg',
      price: 45,
      uniqueId:7,
      id: 7,
      quantity: 1,
      pressed: false,
    },
    {
      title: 'Rubic cube',
      type: '6*6 ',
      uniqueId:8,
      difficulty: 'advanced',
      image:
        'https://4.imimg.com/data4/KO/ER/MY-8107015/shengshou-6x6-rubiks-magic-cube-500x500.jpg',
      price: 45,
      id: 8,
      quantity: 1,
      pressed: false,
    },
  
  ];

  laps = [
    {
        id: 0,
        uniqueId:9,
        title:'lap top',
        "type": "Huawei MateBook X Pro",
        "image": "data:image/jpeg;base64,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",
        "cpu": "Intel Core i7, 8th generation",
        "ram": "8GB",
        "storage": "512 GB SSD",
        pressed:false,
        quantity: 1,
        "screen": "13.9-inch, 3K (3,000 x 2,080)",
        "price": "1499",
        "description": "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money."
    },
    {
        id: 1,
        uniqueId:10,
        title:'lap top',
        "type": "Apple Macbook Pro 2018",
        "image": "https://tse4.mm.bing.net/th?id=OIP.KS0Fcp6dwJCxtsSoahKAQwHaHa&pid=Api&P=0&w=300&h=300",
        "cpu": "6-core Intel i7, 8th generation",
        "ram": "16GB",
        quantity: 1,
        pressed:false,
        "storage": "1TB GB SSD",
        "screen": "15-inch Retina display",
        "price": "3199",
        "description": "If you're after the latest and greatest laptop from Apple, we suggest you look into the 2018 model of the 15-inch MacBook Pro with Touch Bar. The headline Touch Bar – a thin OLED display at the top of the keyboard which can be used for any number of things, whether that be auto-suggesting words as you type or offering Touch ID so you can log in with just your fingerprint – is of course included. It's certainly retained Apple's sense of style, but it comes at a cost. This is a pricey machine, so you may want to consider one of the Windows alternatives. But, if you're a steadfast Apple diehard, this is definitely the best laptop for you!"
    },
    {
        id: 2,
        uniqueId:11,
        title:'lap top',
        "type": "Dell XPS 13",
        "image": "https://i.ytimg.com/vi/4HnKi_s37-I/maxresdefault.jpg",
        "cpu": "Intel Core i7, 8th generation",
        "ram": "16GB",
        pressed:false,
        quantity: 1,
        "storage": "512 GB SSD",
        "screen": "13.3-inch, Full HD",
        "price": "1199",
        "description": "The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less ‘Infinity Edge’ display, this Dell XPS 13 continues to be the most popular Windows laptop in the world. What’s more, there’s a wide range of customization options, so you can really make the Dell XPS 13 the best laptop for your needs. "
    },
    {
        id: 3,
        uniqueId:12,
        title:'lap top',
        "type": "Asus ZenBook Flip S",
        "image": "https://tse4.mm.bing.net/th?id=OIP.5N4EHA91zf9A3TcjfRZXLQHaFX&pid=Api&P=0&w=217&h=158",
        "cpu": "Intel Core i7, 8th generation",
        "ram": "16GB",
        pressed:false,
        quantity: 1,
        "storage": "512 GB SSD",
        "screen": "13.3-inch, Full HD touchscreen",
        "price": "1399",
        "description": "Asus has struck gold with its new refresh of its ZenBook Flip S 2-in-1 laptop. With a new Kaby Lake R 8th-generation processor powering the device, plenty of RAM and a super-fast PCIe SSD in certain models, this is an absolutely stunning laptop. Its 2-in-1 design means you can use it as both a laptop and a tablet, and while it's not as affordable as some other machines, if you have the budget you'll be really happy with this fantastic device."
    },
    {
        id: 4,
        uniqueId:13,
        title:'lap top',
        "type": "Samsung Notebook 9",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81SdPqvMhuL._AC_SX466_.jpg",
        "cpu": "Intel Core i7, 8th generation",
        "ram": "16GB",
        quantity: 1,
        pressed:false,
        "storage": "256 GB SSD",
        "screen": "15-inch, Full HD",
        "price": "1499",
        "description": "While it may not have the best keyboard in the world, the Samsung Notebook 9 is still one of the best laptops you can buy in 2018. Packed with more horsepower than some MacBook Pros,but at a much lower price, Samsung has crafted a laptop that has just as much substance as it does style. Plus, on top of its killer specs, it’s lightweight and thin, making this one of the most portable 15-inch laptops you can buy today."
    }
]


}
