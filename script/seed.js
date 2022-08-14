"use strict";

const {
  db,
  models: {
    User,
    Product,
    ProductCategory,
    OrderItem,
    OrderDetails,
    ShoppingSession,
  },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  const products = [
    {
      name: "Tortilla Chips",
      desc: "Made from white corn for great taste ",
      price: 2.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Doritos : Nacho Chesse",
      desc: "Your favorite bold nacho cheese flavored tortilla chips",
      price: 5.99,
      photoURL:
        "https://images.heb.com/is/image/HEBGrocery/002092535?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
    },
    {
      name: "Lay's Potato Chips",
      desc: "Farm-grown potatoes seasoned with just the right amount of salt",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_dd894bfa-cafc-445e-9f8b-f5aa44b9a32d?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Cheddar Crackers",
      desc: "Packed with sharp cheddar flavor and a pinch of sea salt, these cheese crisps go great with everything",
      price: 2.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_3c4401e1-9011-4ca9-a48e-eba0aa41f5ab?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Triscuit Original Crackers",
      desc: "Baked kosher snacks feature a hearty, crunchy woven texture that easily holds all of your favorite toppings",
      price: 5.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_7b5abebc-9531-4560-8814-9c787f5a6a66?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Goldfish Baked Crackes",
      desc: "Flavor Blasted Cheddar and Sour Cream Goldfish crackers are a snack-time favorite, baked with big, bold flavor",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_dcb1a682-2f1a-4e33-a91e-d2540265c113?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Spicy Queso Blanco",
      desc: "Packed with sharp cheddar flavor and a pinch of sea salt, these cheese crisps go great with everything",
      price: 2.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_cb4df512-fdee-4a51-855b-6b71c5950d52?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sabra Classic Hummus",
      desc: "Keep it simple with our classic hummus - a creamy, delicious blend of chickpeas, tahini (ground sesame seeds), oil and seasonings",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_e64eddaf-a1f1-41c0-92ef-829e9a3b299e?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Homestyle Guacamole",
      desc: "Made with tomatoes, onions, garlic and cilantro for homestyle flavor",
      price: 7.99,
      photoURL:
        "https://i5.walmartimages.com/asr/67cbf04a-f964-432a-877a-2ca48205ce58_1.9aab8fdc7715f7e51d5d54bd23632f06.jpeg",
    },
    {
      name: "Tostitos Chunky Salsa",
      desc: "Tostitos salsas are made with real chunks of garden vegetables, and TOSTITOS dips are so creamy, you can't resist either",
      price: 4.99,
      photoURL: "https://i5.peapod.com/c/6H/6H4QI.png",
    },
    {
      name: "Frosted Sugar Cookies",
      desc: "Cotton Candy Frosted Sugar Cookies",
      price: 2.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_a3c62ab4-48d0-430b-ab19-57675634a0fe?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Oreo Firework Cookies",
      desc: "OREO Firework Chocolate Sandwich Cookies with Popping Candy",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_2452cd4d-2004-429f-b215-0b8e073f6c4b?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Keebler Coconut Dreams Cookies",
      desc: "A delightful anytime dessert snack; enjoy with an ice-cold glass of milk",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_2557d2d4-bc3a-4505-b9d1-dda3644cc336?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    //
    {
      name: "M&M's Peanut Chocolate Candies",
      desc: "This colorful candy is made with real peanuts and milk chocolate and surrounded by a candy shell",
      price: 2.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_aa66d26c-8e93-44bc-a564-225e40450d9d?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "HARIBO Gold-Bears Gummi Candy",
      desc: "America's #1 Gummi Bear. Lemon, Orange, Pineapple, Raspberry, and Strawberry",
      price: 5.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_b2d54bec-3afd-4abc-9cb7-a021d79556d8?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Trolli Sour Brite Crawlers Original Gummy Candy",
      desc: "Trolli Sour Brite Crawler, these sour gummy worms pack a punch of tangy sweetness in weirdly-awesome fruity flavor combinations like orange-lime, cherry-lemon, & strawberry-grape",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_58dcfe4f-28eb-43f6-826e-dd2fc76d00b5?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Ben & Jerry's Ice Cream Half Baked",
      desc: "Ben & Jerry's Chocolate & Vanilla Ice Creams with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_5705f6d6-1ab4-45a5-9b6a-550883053c06?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Noosa Frozen Yogurt Gelato Chocolate Fudge",
      desc: "Chocolate Fudge frozen yogurt gelato made with whole milk yogurt",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_7fea469d-24ca-4278-8d0c-1269f3cb2548?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Triple Chocolate Truffle Ice Cream",
      desc: "Favorite Day Gourmet triple chocolate truffle ice cream makes for a delectable treat",
      price: 7.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_42ce3a0e-f2c8-46dc-9293-9a21fd9962c2?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Toll House Mini Ice Cream Sandwiches",
      desc: "These delicious treats are perfect for sharing with family, friends and a fun activity",
      price: 6.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_f825b284-7739-4fc3-9253-195907229f3e?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },

    {
      name: "S'mores Trail Mix",
      desc: "Blend of s'mores marshmallow bites, semi-sweet chocolate chunks, dried marshmallows, graham cookies and peanuts",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_d07b29bc-dd7c-432b-aaa9-58128e3e8056?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Neapolitan Sundae Trail Mix",
      desc: "Blend of cashews, creme brulee almonds, dried sweetened strawberries, semi-sweet chocolate chips, white chocolate drops and strawberry drops",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_ae3362eb-48bb-445a-bbe2-5767d10872ef?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Caramel Cashew Trail Mix",
      desc: "Delicious medley of milk chocolate caramel balls, cashews, M&M'S® milk chocolate candies and peanuts",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_870ac6d5-f196-4993-9a2d-7d2fe632d945?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Date and Nut Bars Chocolate Chip Cookie Dough",
      desc: "Chocolate chip cookie dough flavor offers rich taste. Made with dates, cashews, chocolate chips and sea salt for wholesome taste. Vegan and gluten-free certified to accommodate a variety of diets. 10pk for more value per bar",
      price: 5.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_16866722-a2fa-408e-af20-363daa557c52?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Power Crunch Protein Energy Bars - Strawberry Creme",
      desc: "Smooth strawberry and velvet cream flavors. Our Power Crunch Original Strawberry Cream protein bar is sure to make snack time a success. This delicious cream-filled wafer energy bar delivers 13g of protein, 5 grams of sugar and contains no sugar alcohols",
      price: 7.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_1559f0ab-1a56-465c-9eae-8afcd75c30e3?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "MadeGood Chocolate Dipped Granola Bar Birthday Cake",
      desc: "A MadeGood Granola Bar drizzled and dipped in chocolate, that's what. Vegan, organic, and free from the most common allergens including dairy",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_6680c6bf-ece9-4493-841d-451af9d63e32?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Freeze Dried Strawberry Slices",
      desc: "Dried strawberry slices are perfect for yogurt parfaits, oatmeal, salads and more",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_2be08478-6638-415b-abce-5414a8dd0a5f?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Organic Dried Unsweetened Mango Snacks",
      desc: "USDA organic mango snacks are sure to become a family favorite",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_15f82fc0-2051-49dd-9914-1514aa29fd80?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Organic Dried Unsweetened Pineapple Ring Snacks",
      desc: "USDA organic dried pineapple snacks are non-GMO with no added sulfites",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_a8b3c264-747b-4fef-8598-a7101215f1fe?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Dried Sweetened Cherries",
      desc: "This package of dried sweetened cherries has all the vibrant flavor you expect with just a touch of added sweetness, and it has no added sulfites, artificial flavors or artificial colors, making for an instant pantry staple",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_df92f11a-f3fc-40b6-a3bd-3bf9ce82f2a2?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Frozen Pork Bao Buns",
      desc: "These mini bao buns come stuffed with pork covered in sweet barbecue sauce flavored with onion and garlic for outstanding flavor, and the six-count pack lets you choose your portion size to suit your appetite",
      price: 5.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_fdd615c4-1bb9-46c0-bc96-14c23d9d5ebf?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Auntie Anne's Classic All Beef Frozen Pretzel Dogs",
      desc: "Warm, soft pretzel dough wrapped around a juicy hot dog",
      price: 5.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_57691966-b8d7-40d0-82e3-794248d1c183?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Frozen Breaded Mozzarella Sticks",
      desc: "Whether it's game day, movie night or just time for a snack, frozen Mozzarella Cheese Sticks from market pantry™ are sure to hit the spot",
      price: 4.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_eb5b5822-948f-485b-b926-3216d10a49dd?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Vegetable Tray with Ranch Dip",
      desc: "This 18-ounce veggie tray contains an array of veggies that come washed, trimmed and ready to eat, saving you the time and effort of having to prep the veggies yourself",
      price: 5.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_d7689d9f-2ad2-4912-88e1-64e474e55abc?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Hormel Gatherings Pepperoni, Cheddar Cheese & Crackers Snack Tray",
      desc: "The complete party tray; Comes with meat, cheese, and crackers",
      price: 9.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_91dd6f4d-d647-4bc9-8990-2fb982bc9688?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sampler Pack Calabrese Salami, Prosciutto and Capocollo",
      desc: "Sliced meat sampler pack is great for sandwiches or charcuterie boards",
      price: 9.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_be969e59-6988-4235-8410-39a2e0174cca?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sargento Natural Mozzarella String Cheese",
      desc: "Sargento® String Cheese is a natural source of Calcium, each individual stick contains 20% DV Calcium and 80 Calories",
      price: 7.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_0466e7a8-bc3d-450c-971e-a4b0a830b4c7?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Mini Babybel Gouda Semisoft Cheeses",
      desc: "Mini Babybel® Gouda cheese has a creamy, nutty taste the whole family will love",
      price: 8.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_aa3f3bec-f843-4be9-961c-850ab8b2a445?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Mini Babybel Original Semisoft Cheeses",
      desc: "Mini Babybel® Gouda cheese has a creamy, nutty taste the whole family will love",
      price: 8.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_dbea2d1a-4342-46e6-9154-6374c9fdd042?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Mini Babybel Light Semisoft Cheeses",
      desc: "Mini Babybel® Gouda cheese has a creamy, nutty taste the whole family will love",
      price: 8.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_3d151f0e-d79d-4b82-bb3c-20cb2940c779?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Banana",
      desc: "Tasty on their own or added into smoothies, oatmeal or dessert",
      price: 0.19,
      photoURL:
        "https://cdn.discordapp.com/attachments/775994350143930391/1008128022391570543/unknown.png",
    },
    {
      name: "Strawberries- 1b Package",
      desc: "A great fruit to add to your child's lunchbox",
      price: 2.59,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_ce4ac41d-c124-49db-8f0f-2f472ee51815?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Organic Honeycrisp Apples - 2lb",
      desc: "A two-pound bag of Organic Honeycrisp Apples from Good & Gather™ makes it easy to stay stocked up on the perfect lunchtime side, grab-and-go snack or baking choice, all in one go!",
      price: 7.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_4d41e2f3-8e05-4eaf-a8dc-7b1e035649ab?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Red Grapefruit - 1 Count",
      desc: "Packed with essential nutrients and a great amount of Vitamin C, Red Grapefruits also make a refreshing, healthy treat any time of the day.",
      price: 0.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_c9cc2d3f-d31a-4e81-a99c-f7521195cd86?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Driscoll's Raspberries - 6oz Package",
      desc: "For the finest in raspberries the world try Driscoll's.",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_16ebad26-b7b3-4dd0-80a9-92866fc98c41?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Mini Watermelon - 1 Count",
      desc: "Mini seedless watermelons have a deep red flesh that provides a crisp, juicy flavor.",
      price: 3.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_7dfb5982-541a-4c72-b731-ccd9b061da84?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Iceberg Lettuce Head - 1 Count",
      desc: "This Iceberg Lettuce from Green Giant® offers a variety of uses while being low in calories, making it an excellent component in your veggie drawer.",
      price: 1.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_f5e5b991-eeb5-4f39-a5b0-44016423f017?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Blueberries - 1pt",
      desc: "Fresh blueberries to add into your baking recepies.",
      price: 2.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_31e44e71-4d8b-413c-b5bd-d5b36650098e?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Green Cabbage - 1 Count",
      desc: "Green cabbage is a winter vegetable and one of several cabbage varieties.",
      price: 1.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_3b0594d0-878b-4744-b9a8-32c45d2bf436?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Lemon - 1 Count",
      desc: "Lemons are a type of citrus fruit used in many ways as the flesh, juice and peel all have various uses.",
      price: 0.69,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_3d962311-4a0b-47f9-8146-28740dfa2d53?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Coca-Cola - 12pk/12 fl oz Cans",
      desc: "12 cans of Coca-Cola Original Taste—the refreshing, crisp taste you know and love",
      price: 6.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_f2a6f540-4792-43f5-85a5-33b77626e7db?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Dr Pepper Soda - 12pk/12 fl oz Cans",
      desc: "The 23 signature flavors of Dr Pepper are blended to create one satisfyingly unique beverage.",
      price: 6.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_27a2e72f-7a3a-4f3c-8ee3-c41c1f9be91b?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Canada Dry Ginger Ale Soda - 12pk/12 fl oz Cans",
      desc: "Relax Your Way with Canada Dry when you want, the way you want.",
      price: 6.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_ec795fc6-ade8-45f5-b962-0b43b150b036?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "A&W Root Beer Soda - 12pk/12 fl oz Cans",
      desc: "Treat yourself to the All-American classic flavor with A&W Root Beer.",
      price: 6.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_2ee850c0-8fd3-4f97-9a8d-1c6d63ebfa52?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sunkist Orange Soda - 12pk/12 fl oz Cans",
      desc: "Beaming with bold, orange flavor, Sunkist always satisfies your thirst.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_de22bbfb-395a-4084-8276-cdee9c7df71b?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sprite - 12pk/12 fl oz Cans",
      desc: "The OG Sprite, lemon-lime flavored soda for bold personalities.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_17187f3d-41bc-4471-8232-2fc084875814?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },

    {
      name: "Pepsi Cola Soda - 12pk/12 fl oz Cans",
      desc: "Enjoy an ice cold Pepsi, the bold, refreshing cola.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_363ec77f-3dd0-4eda-97bd-810c67a4eabe?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Mountain Dew Citrus Soda - 12pk/12 fl oz Cans",
      desc: "Charged for anything, keep on doing you with Mtn Dew.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_bba6faeb-f9d6-4ecc-b934-5dc95c189bfe?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Coca-Cola Cherry - 12pk/12 fl oz Cans",
      desc: "Delicious combination of Coca-Cola and cherry flavor.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_7d8cd148-a87f-4583-b3e3-5a7babc6ee79?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sprite - 2 L Bottle",
      desc: "The OG Sprite, lemon-lime flavored soda for bold personalities.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_7c23b7bd-d895-4b43-9ce8-3b21b5e5f3d5?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Coca-Cola - 2 L Bottle",
      desc: "2L bottle of Coca-Cola Original Taste—the refreshing, crisp taste you know and love.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_583c4660-39f9-4456-8494-0d4c0be960b1?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },
    {
      name: "Sunkist Orange Soda - 2 L Bottle",
      desc: "Beaming with bold, orange flavor, Sunkist always satisfies your thirst.",
      price: 6.49,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_cc5ff53f-8a33-483f-9bb4-31af87bb5e01?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },

    {
      name: "La Marca Rose Prosecco 750 ml 11% ABV",
      desc: "This sparkling wine is pale, golden straw in color. Bubbles are full textured and persistent.",
      price: 19.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/059/564/xlarge/085000032442-1.png?1620779046",
    },

    {
      name: "Mionetto Prosecco Brut 750 ml",
      desc: "We'll be there in a prosecco.",
      price: 14.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/065/331/xlarge/ptuwggh5vvrowidbgiig.png?1629137245",
    },

    {
      name: "14 Hands Cabernet 750 ml",
      desc: "A rich, juicy red that features aromas of dark cherry, black currant, coffee and subtle hints of spice.",
      price: 14.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/059/157/xlarge/10513-1.png?1620249609",
    },
    {
      name: "Prestige de France Brut 750 ml",
      desc: "A fresh and harmonious sparkling wine.",
      price: 17.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/042/266/xlarge/25457.png?1610753704",
    },

    {
      name: "Andre Brut Champagne 750 ml",
      desc: "Iconic yet affordable, André Brut Champagne (9.5% ABV), is a California sparkling wine that offers a dry mouthfeel and fruity notes.",
      price: 6.49,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/029/920/xlarge/3541.jpg?1562100150",
    },

    {
      name: "Navigator Napa Valley Sauvignon Blanc 750 ml",
      desc: "Silver Medal winner in the SF Chronicle Wine Competition '22! Bright tropical fruit and citrus aromas; full bodied, with fresh melon and grapefruit flavors; long, clean finish, a perfect match with white fish. ",
      price: 16.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/103/425/xlarge/hxv6yaslhwjig7i9uwfh.png?1643126483",
    },

    {
      name: "Josh Cellars Sauvignon Blanc 750 ml",
      desc: "Aromatic and bright with a crisp, clean finish. This wine is sunshine in a bottle. ",
      price: 13.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/018/530/xlarge/josh-sauvignon.jpg?1530624949",
    },

    {
      name: "Donovan-Parke Sauvignon Blanc 750ml",
      desc: "This ripe and round Sauvignon Blanc shows excellent length and energy on the palate; fine, ripe melon flavors. ",
      price: 12.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/052/855/xlarge/60cdf65b090e1d4981fae0178ef67577_large.png?1614657748",
    },

    {
      name: "Unruly Red Blend 750 ml",
      desc: "California bronze medal winner at the 2018 San Francisco Wine Competition, (2016 vintage). ",
      price: 9.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/042/272/xlarge/24160.png?1610753915",
    },

    {
      name: "Apothic Red 750 ml",
      desc: "A rich blend featuring notes of vanilla, black cherry and mocha, Apothic Red is a seductive elixir worthy of an important date.",
      price: 11.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/555/xlarge/3542.jpg?1580486103",
    },

    {
      name: "Donovan-Parke Cabernet Sauvignon 750ml",
      desc: "With aromas of black cherry, hints of vanilla and toasty oak, and a silky finish, our Cabernet Sauvignon was crafted to carry through from appetizer to main course and beyond.",
      price: 12.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/050/439/xlarge/60ff72a81ef3f5eb01544a8aebf092f6_large.png?1614648045",
    },

    {
      name: "Bounty Full Sheet Paper Towels",
      desc: "Pack contains 4 Double Rolls of Bounty white Full Size paper towels.",
      price: 8.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_b898b9b9-5e62-4092-b2d4-0b14489c8ac5?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },

    {
      name: "Clorox Disinfecting Wipes Value Pack Bleach Free Cleaning Wipes - 75ct Each/3pk",
      desc: "Clorox® Disinfecting Wipes are proven to kill -19 Virus* in 15 seconds; cleans and kills 99.9% of viruses and bacteria with powerful, triple-layered wipe; Package may vary",
      price: 12.99,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_ee613317-8f45-417d-9c8a-dc81bb3198b9?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },

    {
      name: "Clorox Fresh Scent Disinfecting Wipes - Fresh",
      desc: "Clorox Disinfecting Wipes clean, disinfect, deodorize and remove allergens for 5x cleaning power* and leave a fresh scent.",
      price: 2.89,
      photoURL:
        "https://target.scene7.com/is/image/Target/GUEST_544827bb-df47-42ac-997b-b8577dee1e2c?wid=325&hei=325&qlt=80&fmt=pjpeg",
    },

    {
      name: "Scott 2-Ply Toilet Paper",
      desc: "Contains 550 2-ply sheets per roll for long-lasting use, Standard toilet paper is suitable for home or office use.",
      price: 1.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/884/xlarge/4876_1.png?1581441472",
    },

    {
      name: "Basically, 2ct Split Sheet Paper Towels Extra Large Roll",
      desc: "Package includes 2 double rolls, equivalent to 5 regular rolls.",
      price: 5.49,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/177/156/xlarge/hfehdrgld2hlam7jfcnv.png?1650587311",
    },

    {
      name: "Nicole Home Collection Tall Kitchen Trash Bags 90ct",
      desc: "Nicole Home Collection Drawstring Trash Bags, 90 Count.",
      price: 14.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/034/720/xlarge/8793_1.png?1585072870",
    },

    {
      name: "Seventh Generation Tall Kitchen Drawstring Trash Bags 20ct",
      desc: "You need a reliable trash bag in your kitchen; we've all had that experience when it breaks as you take it out.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/859/xlarge/8403_1.png?1581437504",
    },

    {
      name: "Pure Bright Bleach 32oz",
      desc: "Germicidal bleanch ready for use, good for sanitizing and disinfecting areas.",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/038/004/xlarge/21080.png?1595438218",
    },

    {
      name: "Fabuloso Lavender All Purpose Cleaner 16.9oz",
      desc: "An all-purpose cleaner. Cleans floors, bathrooms, kitchens, walls and other surfaces.",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/031/024/xlarge/fabuloso.jpg?1568687841",
    },

    {
      name: "Dropps Lemon Dishwasher Detergent Pods 32ct",
      desc: "Powers away 24-hour baked on food and tough stains. Glasses so sparkly and dishes so clean you can eat off them. Literally.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/059/250/xlarge/42373.png?1620252136",
    },

    {
      name: "Dawn Ultra Liquid Original Dish Soap 19.4oz",
      desc: "Orginal Dish Soap with the fighting power of Dawn, great at breaking down grease.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/030/575/xlarge/13439.jpg?1566422698",
    },

    {
      name: "Sponge Daddy Dual-Sided Sponge & Scrubber 3ct",
      desc: "Scratch Free FlexTexture® side changes texture based on your water temperature.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/034/125/xlarge/19146.jpg?1582921395",
    },

    {
      name: "Mrs. Meyer's Clean Day Lavender Scented Soy Candle 7.2oz",
      desc: "Scented candle made from soy wax, vegetable wax and other thoughtfully chosen ingredients Comes in a recyclable glass candle jar and makes an easy gift.",
      price: 11.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/041/310/xlarge/23537.png?1607652714",
    },
  ];
  const categories = [
    {
      type: "Salty",
    },
    {
      type: "Sweet",
    },
    {
      type: "Healthy",
    },
    {
      type: "Refrigerated/Frozen",
    },
    {
      type: "Grocery",
    },
    {
      type: "Drinks",
    },
    {
      type: "Alcohol",
    },
    {
      type: "Cleaning",
    },
    {
      type: "Ice Cream",
    },
    {
      type: "Quick Meals",
    },
    {
      type: "Bath and Beauty",
    },
    {
      type: "Health",
    },
    {
      type: "Home and Office",
    },
    {
      type: "Pets",
    },
    {
      type: "Baby",
    },
  ];
  // const orderItems = [
  //   {
  //     quantity: 3,
  //   },
  //   {
  //     quantity: 4,
  //   },
  //   {
  //     quantity: 5,
  //   },
  // ];
  // const orders = [{}, {}];
  const shoppingSession = [{}, {}, {}, {}, {}];

  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      firstName: "Emanuel",
      lastName: "Guevara",
      email: "emanuel@gmail.com",
      password: "123",
      isAdmin: true,
    }),
    User.create({
      firstName: "Kenji",
      lastName: "Zhang",
      email: "kenji@gmail.com",
      password: "123",
      isAdmin: true,
    }),
    User.create({
      firstName: "Jack",
      lastName: "Yu",
      email: "jack@gmail.com",
      password: "123",
      isAdmin: true,
    }),
    User.create({
      firstName: "Junbeom",
      lastName: "Chun",
      email: "jun@gmail.com",
      password: "123",
      isAdmin: true,
    }),
    User.create({
      firstName: "jackyu123",
      lastName: "yu",
      email: "jackyu@gmail.com",
      password: "123",
      isAdmin: false,
    }),
  ]);

  const [manny, kenji, jack, jun, jackyu] = users;

  // Creating Product Categories
  const allCats = await Promise.all(
    categories.map((cat) => ProductCategory.create(cat))
  );

  const [
    salty,
    sweet,
    health,
    cold,
    grocery,
    drinks,
    alcohol,
    cleaning,
    icecream,
    quickmeals,
    bathandbeauty,
    healthproducts,
    homeandoffice,
    pets,
    baby,
  ] = allCats;

  // Creating Products
  const allProducts = await Promise.all(
    products.map((snack) => Product.create(snack))
  );

  const [
    snack1,
    snack2,
    snack3,
    snack4,
    snack5,
    snack6,
    snack7,
    snack8,
    snack9,
    snack10,
    snack11,
    snack12,
    snack13,
    snack14,
    snack15,
    snack16,
    snack17,
    snack18,
    snack19,
    snack20,
    snack21,
    snack22,
    snack23,
    snack24,
    snack25,
    snack26,
    snack27,
    snack28,
    snack29,
    snack30,
    snack31,
    snack32,
    snack33,
    snack34,
    snack35,
    snack36,
    snack37,
    snack38,
    snack39,
    snack40,
    snack41,
    snack42,
    snack43,
    snack44,
    snack45,
    snack46,
    snack47,
    snack48,
    snack49,
    snack50,
    snack51,
    snack52,
    snack53,
    snack54,
    snack55,
    snack56,
    snack57,
    snack58,
    snack59,
    snack60,
    snack61,
    snack62,
    snack63,
    snack64,
    snack65,
    snack66,
    snack67,
    snack68,
    snack69,
    snack70,
    snack71,
    snack72,
    snack73,
    snack74,
    snack75,
    snack76,
    snack77,
    snack78,
    snack79,
    snack80,
    snack81,
    snack82,
    snack83,
    snack84,
    snack85,
  ] = allProducts;

  await snack1.setCat(salty);
  await snack2.setCat(salty);
  await snack3.setCat(salty);
  await snack4.setCat(salty);
  await snack5.setCat(salty);
  await snack6.setCat(salty);
  await snack7.setCat(salty);
  await snack8.setCat(salty);
  await snack9.setCat(salty);
  await snack10.setCat(salty);

  await snack11.setCat(sweet);
  await snack12.setCat(sweet);
  await snack13.setCat(sweet);
  await snack14.setCat(sweet);
  await snack15.setCat(sweet);
  await snack16.setCat(sweet);
  await snack17.setCat(sweet);
  await snack18.setCat(sweet);
  await snack19.setCat(sweet);
  await snack20.setCat(sweet);

  await snack21.setCat(health);
  await snack22.setCat(health);
  await snack23.setCat(health);
  await snack24.setCat(health);
  await snack25.setCat(health);
  await snack26.setCat(health);
  await snack27.setCat(health);
  await snack28.setCat(health);
  await snack29.setCat(health);
  await snack30.setCat(health);

  await snack31.setCat(cold);
  await snack32.setCat(cold);
  await snack33.setCat(cold);
  await snack34.setCat(cold);
  await snack35.setCat(cold);
  await snack36.setCat(cold);
  await snack37.setCat(cold);
  await snack38.setCat(cold);
  await snack39.setCat(cold);
  await snack40.setCat(cold);

  await snack41.setCat(grocery);
  await snack42.setCat(grocery);
  await snack43.setCat(grocery);
  await snack44.setCat(grocery);
  await snack45.setCat(grocery);
  await snack46.setCat(grocery);
  await snack47.setCat(grocery);
  await snack48.setCat(grocery);
  await snack49.setCat(grocery);
  await snack50.setCat(grocery);

  await snack51.setCat(drinks);
  await snack52.setCat(drinks);
  await snack53.setCat(drinks);
  await snack54.setCat(drinks);
  await snack55.setCat(drinks);
  await snack56.setCat(drinks);
  await snack57.setCat(drinks);
  await snack58.setCat(drinks);
  await snack59.setCat(drinks);
  await snack60.setCat(drinks);
  await snack61.setCat(drinks);
  await snack62.setCat(drinks);

  await snack63.setCat(alcohol);
  await snack64.setCat(alcohol);
  await snack65.setCat(alcohol);
  await snack66.setCat(alcohol);
  await snack67.setCat(alcohol);
  await snack68.setCat(alcohol);
  await snack69.setCat(alcohol);
  await snack70.setCat(alcohol);
  await snack71.setCat(alcohol);
  await snack72.setCat(alcohol);
  await snack73.setCat(alcohol);

  await snack74.setCat(cleaning);
  await snack75.setCat(cleaning);
  await snack76.setCat(cleaning);
  await snack77.setCat(cleaning);
  await snack78.setCat(cleaning);
  await snack79.setCat(cleaning);
  await snack80.setCat(cleaning);
  await snack81.setCat(cleaning);
  await snack82.setCat(cleaning);
  await snack83.setCat(cleaning);
  await snack84.setCat(cleaning);
  await snack85.setCat(cleaning);

  // Creating shopping sessions for everyone
  const allShoppingSessions = await Promise.all(
    shoppingSession.map((ss) => ShoppingSession.create(ss))
  );
  const [shopping1, shopping2, shopping3, shopping4, shopping5] =
    allShoppingSessions;

  await manny.setShopping_session(shopping1);
  await kenji.setShopping_session(shopping2);
  await jack.setShopping_session(shopping3);
  await jun.setShopping_session(shopping4);
  await jackyu.setShopping_session(shopping5);

  // Creating fake order items and orders for Cody
  // const allOrderItems = await Promise.all(
  //   orderItems.map((orderItem) => OrderItem.create(orderItem))
  // );
  // const [orderItem1, orderItem2, orderItem3] = allOrderItems;

  // await orderItem1.setProduct(snack1);
  // await orderItem2.setProduct(snack2);
  // await orderItem3.setProduct(snack3);

  // when checkout button is pushed, create a new orderDetail for that user, grab cart items from that shopping session and make orderItems for each cart item, associate orderItems with new orderDetail
  // const allOrderDetails = await Promise.all(
  //   orders.map((order) => OrderDetails.create(order))
  // );

  // const [order1, order2] = allOrderDetails;
  // await orderItem1.setOrder_detail(order1);
  // await orderItem2.setOrder_detail(order2);
  // await orderItem3.setOrder_detail(order2);

  // await jun.addOrder_details(order1);
  // await jun.addOrder_details(order2);

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
