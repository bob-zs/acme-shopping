const app = require("./app");
const { conn, User, Product, Order, LineItem } = require("./db");
const { faker } = require("@faker-js/faker");

const setUp = async () => {
  try {
    await conn.sync({ force: true });

    // test start with user created
    // const guest = await User.create({
    //   username: "",
    //   password: "",
    //   isGuest: true,
    //   email: `${Date.now()}@fake.com`,
    //   imageUrl: "",
    //   address: "",
    // });

    const moe = await User.create({
      username: "moe",
      password: "moe_pw",
      firstName:"Moe",
      lastName:"MacDonald",
      email: faker.internet.email("moe", null, "fakeMail.dev"),
      imageUrl: faker.image.people(640, 480),
      address: faker.address.streetAddress(false),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode("#####"),
      isAdmin: false,
    });

    const lucy = await User.create({
      username: "lucy",
      password: "lucy_pw",
      firstName:"Lucy",
      lastName:"Baker",
      email: faker.internet.email("lucy", null, "fakeMail.dev"),
      imageUrl: faker.image.people(640, 480),
      address: faker.address.streetAddress(false),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode("#####"),
      isAdmin: false,
    });
    const diane = await User.create({
      username: "didi",
      password: "didi_pw",
      email: "didi@aim.com",
      firstName:"Diane",
      lastName:"Sayos-Briones",
      imageUrl: faker.image.people(640, 480),
      address: faker.address.streetAddress(false),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode("#####"),
      isAdmin: true,
    });
    const alejandro = await User.create({
      username: "ale",
      password: "ale_pw",
      email: "ale@aim.com",
      firstName:"Alejandro",
      lastName:"Loja",
      imageUrl: faker.image.people(640, 480),
      address: faker.address.streetAddress(false),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode("#####"),
      isAdmin: true,
    });
    const bob = await User.create({
      username: "bob",
      password: "bob_pw",
      email: "bob@aim.com",
      firstName:"Bob",
      lastName:"Saludo",
      imageUrl: faker.image.people(640, 480),
      address: faker.address.streetAddress(false),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode("#####"),
      isAdmin: true,
    });
    const chloe = await User.create({
      username: "chloe",
      password: "chloe_pw",
      email: "chloe@aim.com",
      firstName:"Chloe",
      lastName:"Chen",
      imageUrl: faker.image.people(640, 480),
      address: faker.address.streetAddress(false),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode("#####"),
      isAdmin: true,
    });
    const foo = await Product.create({
      name: "foo",
      description: faker.lorem.paragraph(1),
      price: faker.finance.amount(0.05, 20, 2),
    });
    const bar = await Product.create({
      name: "bar",
      description: faker.lorem.paragraph(1),
      price: faker.finance.amount(0.05, 20, 2),
    });
    await lucy.addToCart({ product: foo, quantity: 3 });
    await lucy.addToCart({ product: bar, quantity: 4 });

    const products = await Promise.all([
      //'philippines'
      Product.create({
        name: "Gina Calamansi Juice",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://i0.wp.com/www.filamstore.com/wp-content/uploads/2016/10/gina-calamansi-juice-drink-can-250-ml.jpg?fit=540%2C540&ssl=1",
        ml: 250,
      }),
      Product.create({
        name: "Gina Mango Juice",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/GinaMangoNectarJuice11.5oz_front_2048x.jpg?v=1620318585",
        ml: 240,
      }),
      Product.create({
        name: "Mogu Mogu Lychee",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://www.bigbasket.com/media/uploads/p/xxl/288824-2_6-mogu-mogu-juice-lychee.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Grape",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://www.asianfoodlovers.com/media/catalog/product/cache/8/image/750x750/9df78eab33525d08d6e5fb8d27136e95/7/5/75135_1.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Melon",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl: "https://m.media-amazon.com/images/I/715Vj-8YxyL._SL1500_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Mango",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://i5.walmartimages.com/asr/ae858551-f549-4bf0-90b9-00dd1bb995f5.23c4f4824a9ad7edb06abd0e103c41aa.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Coconut",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0256/3473/4166/products/MoguMogu-CoconutJuicewithNataDeCoco-1000ML_500x.jpg?v=1639243157",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Strawberry",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "http://cdn.shopify.com/s/files/1/1451/6328/products/mogu_strawberry_grande.jpg?v=1631797277",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Pink Guava",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl: "https://m.media-amazon.com/images/I/71a8FoZqPuL._SL1500_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Mogu Mogu Peach",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl: "https://m.media-amazon.com/images/I/813CRAM8DdL._SL1500_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Zesto Apple Juice",
        description: faker.random.words(20),
        price: 1.99,
        category: "philippines",
        imgUrl:
          "https://myecomshop.imgix.net/store_12746/37fbd52aef4458554c1114e652d6b35f.png?ixlib=php-1.2.1&ar=1:1",
        ml: 250,
      }),
      Product.create({
        name: "Zesto Orange Juice",
        description: faker.random.words(20),
        price: 1.99,
        category: "philippines",
        imgUrl:
          "http://cdn.shopify.com/s/files/1/0500/8421/6991/products/108295_45a9f5f0-0dcf-4255-bfac-16c1317a1f81.jpg?v=1632994569",
        ml: 250,
      }),
      Product.create({
        name: "Zesto Grape Juice",
        description: faker.random.words(20),
        price: 1.99,
        category: "philippines",
        imgUrl:
          "https://www.homeshop.ph/image/cache/catalog/Products/Beverages/Juice/Zesto-Grape-Juice-Drink-200mL-500x500-product_popup.png",
        ml: 250,
      }),
      Product.create({
        name: "Zesto Mango Juice",
        description: faker.random.words(20),
        price: 1.99,
        category: "philippines",
        imgUrl:
          "https://i0.wp.com/lokale.com.ph/wp-content/uploads/2021/07/18-6.png?fit=1587%2C2245&ssl=1",
        ml: 250,
      }),
      Product.create({
        name: "Zesto Pineapple Juice",
        description: faker.random.words(20),
        price: 1.99,
        category: "philippines",
        imgUrl:
          "https://rockwellmart.com/wp-content/uploads/2021/03/IMG_9670.png",
        ml: 250,
      }),
      Product.create({
        name: "C2 Green Apple Green Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/C2GreenTea-Apple16.9ozfront_2048x.jpg?v=1627660080",
        ml: 250,
      }),
      Product.create({
        name: "C2 Lemon Green Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://www.asianfoodlovers.com/media/catalog/product/cache/8/image/750x750/9df78eab33525d08d6e5fb8d27136e95/1/1/11064.jpg",
        ml: 250,
      }),
      Product.create({
        name: "C2 Classic Green Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://wedodel.com/wp-content/uploads/2021/01/C2-Green-Tea-Plain-355ml.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Nestle Chuckie Chocolate Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://www.filamstore.com/wp-content/uploads/2017/07/chuckie-nestle-chocolate-flavor-drink.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Nestle Fresh Milk",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0562/5928/1092/products/NESTLEFRESHMILK250ML_700x700.jpg?v=1643182902",
        ml: 250,
      }),
      Product.create({
        name: "Dutch Mill Delight Probiotic",
        description: faker.random.words(20),
        price: 2.99,
        category: "philippines",
        imgUrl:
          "https://www.allday.com.ph/media/catalog/product/1/0/10278610_dutchmill_delight_400ml.jpg",
        ml: 250,
      }),
      //'japan'
      Product.create({
        name: "Ramune Original",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl: "https://i5.peapod.com/c/PE/PE2H9.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Melon",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://nikankitchen.com/Images/Products/hata-ramune-soda-melon-soda-200-ml.png",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Orange",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl: "https://i5.peapod.com/c/B5/B5UC7.png",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Lychee",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00011152225654/49cd22126c2897128c81e356f5a1a2f1_large.png&width=512&type=webp&quality=90",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Pineapple",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://nikankitchen.com/Images/Products/hata-ramune-soda-pineapple-200-ml.png",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Raspberry",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://images.heb.com/is/image/HEBGrocery/001424805?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Melon",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://images.heb.com/is/image/HEBGrocery/001261994?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Strawberry",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://www.meijer.com/content/dam/meijer/product/0001/11/5221/68/0001115221680_1200.png",
        ml: 250,
      }),
      Product.create({
        name: "Ramune Peach",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://images.albertsons-media.com/is/image/ABS/970026405?$ecom-pdp-desktop$&defaultImage=Not_Available",
        ml: 250,
      }),
      Product.create({
        name: "Calpico White Peach",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00075545006183/7e1ac55e03a9194bc10b699ecb41b607_large.png&width=512&type=webp&quality=90",
        ml: 250,
      }),
      Product.create({
        name: "Calpico Strawberry",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://cdn11.bigcommerce.com/s-ih7nl5lym4/images/stencil/1280x1280/products/24682/50596/11034__74628.1624900388.jpg?c=2",
        ml: 250,
      }),
      Product.create({
        name: "Calpico Mango",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0412/3138/4725/products/11032_1280x.jpg?v=1640904058",
        ml: 250,
      }),
      Product.create({
        name: "Calpico Original",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://storage.googleapis.com/images-fol-prd-83dd8b8.fol.prd.v8.commerce.mi9cloud.com/product-images/detail/7554500610.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Tomomasu Mango Soda",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0561/3553/products/JP-629_x700.jpg?v=1574878970",
        ml: 250,
      }),
      Product.create({
        name: "Tomomasu Peach Cider",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/TomomasuJapaneseSoda-PeachCider10oz_300ml__front_2048x.jpg?v=1646404506",
        ml: 250,
      }),
      Product.create({
        name: "Tomomasu Watermelon Soda",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl: "https://i.ebayimg.com/images/g/E34AAOSwJ7Rb-eTM/s-l500.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Tomomasu Pine Cider",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "http://cdn.shopify.com/s/files/1/0561/3553/products/JP-630_1024x1024.jpg?v=1574878972",
        ml: 250,
      }),
      Product.create({
        name: "Tomomasu Muskmelon Soda",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl: "https://i.ebayimg.com/images/g/RUcAAOSwMhVb-eKN/s-l500.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Kimino Yuzu Sparkling Juice",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl: "https://m.media-amazon.com/images/I/51Gk7pVehyL._SL1024_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Kimino Ume Sparkling Juice",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl: "https://m.media-amazon.com/images/I/51MZ-QO5qQL.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Kimino Ringo (Apple) Sparkling Juice",
        description: faker.random.words(20),
        price: 2.99,
        category: "japan",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDUn5MQzJq21uyEmANNOlShk87ZYBJvoy1g&usqp=CAU",
        ml: 250,
      }),
      //'korea'
      Product.create({
        name: "Binggrae Banana Flavored Milk (pack of 6)",
        description: faker.random.words(20),
        price: 4.99,
        category: "korea",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0565/3174/6997/products/Binggrae-Banana-Flavored-Milk-Drink---6pk-200ml.jpg?v=1638557273",
        ml: 250,
      }),
      Product.create({
        name: "Binggrae Melon Flavored Milk (pack of 6)",
        description: faker.random.words(20),
        price: 4.99,
        category: "korea",
        imgUrl: "https://m.media-amazon.com/images/I/517nkjxoUpL.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Binggrae Strawberry Flavored Milk (pack of 6)",
        description: faker.random.words(20),
        price: 4.99,
        category: "korea",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0509/0541/5846/products/Untitleddesign121.png?v=1625222252&width=600",
        ml: 250,
      }),
      Product.create({
        name: "Binggrae Lychee and Peach Flavored Milk (pack of 6)",
        description: faker.random.words(20),
        price: 4.99,
        category: "korea",
        imgUrl:
          "https://cf.shopee.com.my/file/f04c26f05c7bf3d0ac61381877f8515c",
        ml: 250,
      }),
      Product.create({
        name: "Binggrae Coffee Flavored Milk (pack of 6)",
        description: faker.random.words(20),
        price: 4.99,
        category: "korea",
        imgUrl:
          "https://i5.walmartimages.com/asr/11a0d0a2-757a-4b6b-8a45-2fd98d13b278.e19ba5b57a0e89430f145d86f346c444.png",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Melon",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/LotteMilkisDrinkCanMelonFlavor8.45oz_Front_2048x.jpg?v=1603995970",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Peach",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0556/8079/4816/products/LotteMilkisDrinkCanPeachFlavor8.45oz_Front_2048x2048_ab105799-13e0-4a01-86ca-115158551b16_530x@2x.jpg?v=1618272263",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Original",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbkm_3lgdBLGffD5vWf3VLsa-t5w1TFTdtOYorKM60eqI7vHn8Re0oUrC4fjvSG8noc8&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Grape",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hz_ljPciWoJ0EmEPWMsrkBxYmYxLBlpef1Y8bQDOKbWSQKR8KUd7-YEkgowqfzBOIjk&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Strawberry",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/LotteMilkisDrinkCanStrawberryFlavor8.45oz_front_2048x.jpg?v=1650574615",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Banana",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0274/7793/4178/products/image_9f012855-9fb6-4d75-92ab-dfcdd8c9db2b_800x.png?v=1641039305",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Milkis Apple",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://munchpak.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/i/milkis-apple_1.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Sac Sac Orange",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81RMxMSfmcL._SL1500_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Sac Sac Grape",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://i5.walmartimages.com/asr/2947365e-b4a6-4123-bc98-40f8e4d9f854.0d939cb405391c3e8d46d2372184c2b4.jpeg",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Sac Sac Pear",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://s.cornershopapp.com/product-images/3339997.jpg?versionId=vnQ7QFh188_NcrOUd_o4Yk.0sQvgtCLu",
        ml: 250,
      }),
      Product.create({
        name: "Lotte Sac Sac Orange with Coconut Jelly",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl: "https://cf.shopee.sg/file/9cc7dcf72fa67e3ab7431980394b62d7",
        ml: 250,
      }),
      Product.create({
        name: "Paldo Sikhye Rice Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "https://ph-test-11.slatic.net/p/mdc/10bb804778b55383d7c2ad9ea116ab5e.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Woongjin Morning Rice Drink",
        description: faker.random.words(20),
        price: 7.99,
        category: "korea",
        imgUrl:
          "https://d1jdlez3mwxs70.cloudfront.net/media/catalog/product/cache/ddcfbae445085ab8117c2d65e3aabc27/8/8/8801382124528_4.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Samsiokki MiMi Sikhye Rice Drink (pack of 3)",
        description: faker.random.words(20),
        price: 5.99,
        category: "korea",
        imgUrl: "https://i.ebayimg.com/images/g/n3sAAOSw~sBeS4aK/s-l500.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Kooksoondang Rice Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "korea",
        imgUrl:
          "http://cdn.shopify.com/s/files/1/0436/8895/1959/products/b76480d23cf384bc415b6fff379fc4dd_1200x1200.jpg?v=1595073007",
        ml: 250,
      }),
      Product.create({
        name: "Kooksoondang Peach MAkgeolli",
        description: faker.random.words(20),
        price: 9.99,
        category: "korea",
        imgUrl:
          "https://www.wine-searcher.com/images/labels/36/92/11053692.jpg",
        ml: 250,
      }),
      //'china'
      Product.create({
        name: "Hawthorn Berry Sparkling Juice",
        description: faker.random.words(20),
        price: 2.79,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/501/251/4C2A66EC05B00E15.jpg!c750x0.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Nature Soy Unsweetened Soy",
        description: faker.random.words(20),
        price: 4.69,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/485/422/203097888E3D5900.jpg!c750x0.webp",
        ml: 1890,
      }),
      Product.create({
        name: "Nature Soy High Fiber Soy Milk with Omega-3",
        description: faker.random.words(20),
        price: 3.99,
        category: "china",
        imgUrl:
          "https://cdn.yamibuy.net/item/27734e3c60d043416c0dab6a84f1f896_640x640.webp",
        ml: 250,
      }),
      Product.create({
        name: "Genki Forest Sparkling Water",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9VbBbfvmfMrfTDZmJBiMVJw8QlGiHfvRs3xgIsyJ3NveiDGm&usqp=CAc",
        ml: 250,
      }),
      Product.create({
        name: "Honey Winter Melon Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/486/114/64E798187375A79B.jpg!c750x0.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Chiao Kuo Coconut Milk Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://jelifresh.com/images/thumbnails/465/465/detailed/47/4710336101239_a.jpg",
        ml: 250,
      }),
      Product.create({
        name: "KSF Ice Black Tea Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/761/036/E1C95DF0B94F910.jpg!c750x0.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Nature Soy Black Sesame Soy Milk",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0561/2463/7374/products/2050384.jpg?v=1619878317",
        ml: 250,
      }),
      Product.create({
        name: "Vitasoy Soy Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0561/3553/products/YB-15893_F.jpg?v=1589308068",
        ml: 250,
      }),
      Product.create({
        name: "Tea Pi Jasmine tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/014/356/3FCC3C28B697715D.jpg!c750x0.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Master Kong Jasmine Honey Green Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/891/959/122CA8600C083729.png",
        ml: 250,
      }),
      Product.create({
        name: "Master Kong Tangerine Peel and Plum Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl: "https://i.ebayimg.com/images/g/WwEAAOSw2qJiC67v/s-l500.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Wahaha Vitamin A and D Calcium Milk",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/578/118/6431DAFD1F6323E3.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Lan Fong Yuen Milk Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://img06.weeecdn.com/item/image/324/908/56280CD74014C174.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Master Kong Jasmine Green Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://cdn.yamibuy.net/item/909c958bc6350fa0d7bfc296053d124c_750x750.webp",
        ml: 250,
      }),
      Product.create({
        name: "XinYuanZhai Plum Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl: "https://i.ebayimg.com/images/g/m4YAAOSwTcdiC67v/s-l500.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Taisun Grass Jelly Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0561/3553/products/grass-jelly-drink.jpg?v=1589600533",
        ml: 250,
      }),
      Product.create({
        name: "Wang Lao Ji Herbal Beverage",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://cdn.yamibuy.net/item/16a15d94d3ce9c63c634a52c84298e8d_750x750.webp",
        ml: 250,
      }),
      Product.create({
        name: "Want-Want Milk Flavored Drink",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl: "https://m.media-amazon.com/images/I/41suwUEkXaL._SX425_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Genki Forest Sparkling Water",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://www.orientalmart.co.uk/images/products/4430/small/1617453096-001762200.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Vita Chrysanthemum Tea",
        description: faker.random.words(20),
        price: 2.99,
        category: "china",
        imgUrl:
          "https://fresh.hmart.com/media/catalog/product/cache/0c75b0d6b380af6dca3ec180c127a709/l/-/l-489102866486_2_1.jpg",
        ml: 250,
      }),
      // //'mexico'
      Product.create({
        name: "Jarritos Guava",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl: "https://m.media-amazon.com/images/I/61NlSdOViUL._SX425_.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Mandarin",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://products0.imgix.drizly.com/ci-jarritos-mandarin-000856522030817e.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Grapefruit",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7Y4g3BvuwllW8-4M3mSSq3i3QepLVVhBDg&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Tamarind",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://i5.walmartimages.com/asr/12ae73d3-13f2-42b6-a2b2-5f1609a7f147_1.d49b7259798f1eec45aff78b8ba69857.jpeg",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Strawberry",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00090478216287/f4d0780472fbd34098cb20f2134501f4_large.png&width=512&type=webp&quality=90",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Watermelon",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://latindeli.com.au/wp-content/uploads/2020/08/Jarritos_Watermelon-1.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Lime",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpSftN4cZTcv70tRGfmOIIHxFcrxWBeq2rnJoQDycBn3hPk06h_NffldGXVQ4Dr1tyI8&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Jarritos Tamatillo",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHofHzEsi9HmzCiYsRmXsdPnNVcQkj0rv5toLgpr-mk4rmokcNkEltslPYHdtGApEO9CE&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Guava Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://nimbusimports.com/wp-content/uploads/2020/11/Jumex-Guava-11oz-24pk.png",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Pear Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA8FyFDR73Ik5tr1AKOCmQiubI1kbdQbJdA&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Coco Pina",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2grTz2R6YfsdE7PlMP8q_MPG3g2fRT2AB92dTNfI5NQe_Pt4RjxcILo-3NukWN_2hEc&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Mango Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://images.heb.com/is/image/HEBGrocery/000193696?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Pineapple Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://images.heb.com/is/image/HEBGrocery/001141510?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Strawberry-Banana Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://images.heb.com/is/image/HEBGrocery/002096358?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
        ml: 250,
      }),
      Product.create({
        name: "Jumex Apple Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://thumbs.dreamstime.com/b/aluminium-bottle-jumex-apple-isolated-chisinau-moldova-april-over-white-background-clipping-path-181205173.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Goya Passion Fruit Cocktail",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl: "https://images.heb.com/is/image/HEBGrocery/001466481",
        ml: 250,
      }),
      Product.create({
        name: "Goya Mango Nectar",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-lkmlXqFICtX4Xql9uTJN7_kjYvI19MVBC0uqEzfIOtq0FRFtSd2dKpP1BAHyBFKJWc&usqp=CAU",
        ml: 250,
      }),
      Product.create({
        name: "Goya Coconut Milk",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl: "https://images.heb.com/is/image/HEBGrocery/001964546",
        ml: 250,
      }),
      Product.create({
        name: "Goya Aloe Vera Original",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://images.epallet.com/production/media/cache/5f/90/5f9022d584bd248d1d1d599c557bb980.jpg",
        ml: 250,
      }),
      Product.create({
        name: "Goya Coconut Water",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0280/6834/8007/products/GY2778_1024x1024.jpg?v=1645526560",
        ml: 250,
      }),
      Product.create({
        name: "Malta Goya",
        description: faker.random.words(20),
        price: 2.99,
        category: "mexico",
        imgUrl: "https://i5.peapod.com/c/E9/E9DUK.jpg",
        ml: 250,
      }),
    ]);

    const moeOrder1 = await Order.create({
      isCart: false,
      userId: moe.id,
    });

    const item1 = await LineItem.create({
      productId: products[0].id,
      quantity: 10,
      orderId: moeOrder1.id,
    });

    const item2 = await LineItem.create({
      productId: products[1].id,
      quantity: 40,
      orderId: moeOrder1.id,
    });
    
    const moeOrder2 = await Order.create({
      isCart: false,
      userId: moe.id,
    });

    const item3 = await LineItem.create({
      productId: products[3].id,
      quantity: 18,
      orderId: moeOrder2.id,
    });

    const item4 = await LineItem.create({
      productId: products[5].id,
      quantity: 2,
      orderId: moeOrder2.id,
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.error(ex);
  }
};

setUp();
