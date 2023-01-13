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
      photoURL: "/assets/snack-images/salty2/tortilla.jpeg",
    },
    {
      name: "Doritos : Nacho Chesse",
      desc: "Your favorite bold nacho cheese flavored tortilla chips",
      price: 5.99,
      photoURL: "/assets/snack-images/salty2/nachocheese.jpeg",
    },
    {
      name: "Lay's Potato Chips",
      desc: "Farm-grown potatoes seasoned with just the right amount of salt",
      price: 3.99,
      photoURL: "/assets/snack-images/salty2/laysoriginal.jpeg",
    },
    {
      name: "Cheddar Crackers",
      desc: "Packed with sharp cheddar flavor and a pinch of sea salt, these cheese crisps go great with everything",
      price: 2.99,
      photoURL: "/assets/snack-images/salty2/cheeseits.jpeg",
    },
    {
      name: "Triscuit Original Crackers",
      desc: "Baked kosher snacks feature a hearty, crunchy woven texture that easily holds all of your favorite toppings",
      price: 5.99,
      photoURL: "/assets/snack-images/salty2/triscuit.jpeg",
    },
    {
      name: "Goldfish Baked Crackes",
      desc: "Flavor Blasted Cheddar and Sour Cream Goldfish crackers are a snack-time favorite, baked with big, bold flavor",
      price: 4.99,
      photoURL: "/assets/snack-images/salty2/goldfish.jpeg",
    },
    {
      name: "Spicy Queso Blanco",
      desc: "Packed with sharp cheddar flavor and a pinch of sea salt, these cheese crisps go great with everything",
      price: 2.99,
      photoURL: "/assets/snack-images/salty2/quesoblanco.jpeg",
    },
    {
      name: "Sabra Classic Hummus",
      desc: "Keep it simple with our classic hummus - a creamy, delicious blend of chickpeas, tahini (ground sesame seeds), oil and seasonings",
      price: 3.99,
      photoURL: "/assets/snack-images/salty2/sabra.jpeg",
    },
    {
      name: "Homestyle Guacamole",
      desc: "Made with tomatoes, onions, garlic and cilantro for homestyle flavor",
      price: 7.99,
      photoURL: "/assets/snack-images/salty2/guac.jpeg",
    },
    {
      name: "Tostitos Chunky Salsa",
      desc: "Tostitos salsas are made with real chunks of garden vegetables, and TOSTITOS dips are so creamy, you can't resist either",
      price: 4.99,
      photoURL: "/assets/snack-images/salty2/salsachunky.jpeg",
    },
    {
      name: "Frosted Sugar Cookies",
      desc: "Cotton Candy Frosted Sugar Cookies",
      price: 2.99,
      photoURL: "/assets/snack-images/sweet/frostedcookies.jpeg",
    },
    {
      name: "Oreo Firework Cookies",
      desc: "OREO Firework Chocolate Sandwich Cookies with Popping Candy",
      price: 3.99,
      photoURL: "/assets/snack-images/sweet/oreofirework.jpeg",
    },
    {
      name: "Keebler Coconut Dreams Cookies",
      desc: "A delightful anytime dessert snack; enjoy with an ice-cold glass of milk",
      price: 3.99,
      photoURL: "/assets/snack-images/sweet/keeblercoco.jpeg",
    },
    //
    {
      name: "M&M's Peanut Chocolate Candies",
      desc: "This colorful candy is made with real peanuts and milk chocolate and surrounded by a candy shell",
      price: 2.99,
      photoURL: "/assets/snack-images/sweet/mmpeanut.jpeg",
    },
    {
      name: "HARIBO Gold-Bears Gummi Candy",
      desc: "America's #1 Gummi Bear. Lemon, Orange, Pineapple, Raspberry, and Strawberry",
      price: 5.99,
      photoURL: "/assets/snack-images/sweet/goldbears.jpeg",
    },
    {
      name: "Trolli Sour Brite Crawlers Original Gummy Candy",
      desc: "Trolli Sour Brite Crawler, these sour gummy worms pack a punch of tangy sweetness in weirdly-awesome fruity flavor combinations like orange-lime, cherry-lemon, & strawberry-grape",
      price: 3.99,
      photoURL: "/assets/snack-images/sweet/trolli.jpeg",
    },
    {
      name: "Ben & Jerry's Ice Cream Half Baked",
      desc: "Ben & Jerry's Chocolate & Vanilla Ice Creams with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies",
      price: 4.99,
      photoURL: "/assets/snack-images/sweet/halfbaked.jpeg",
    },
    {
      name: "Noosa Frozen Yogurt Gelato Chocolate Fudge",
      desc: "Chocolate Fudge frozen yogurt gelato made with whole milk yogurt",
      price: 3.99,
      photoURL: "/assets/snack-images/sweet/frozenyogurt.jpeg",
    },
    {
      name: "Triple Chocolate Truffle Ice Cream",
      desc: "Favorite Day Gourmet triple chocolate truffle ice cream makes for a delectable treat",
      price: 7.99,
      photoURL: "/assets/snack-images/sweet/triplecho.jpeg",
    },
    {
      name: "Toll House Mini Ice Cream Sandwiches",
      desc: "These delicious treats are perfect for sharing with family, friends and a fun activity",
      price: 6.99,
      photoURL: "/assets/snack-images/sweet/tollhouse.jpeg",
    },

    {
      name: "S'mores Trail Mix",
      desc: "Blend of s'mores marshmallow bites, semi-sweet chocolate chunks, dried marshmallows, graham cookies and peanuts",
      price: 4.99,
      photoURL: "/assets/snack-images/salty/smores.jpeg",
    },
    {
      name: "Neapolitan Sundae Trail Mix",
      desc: "Blend of cashews, creme brulee almonds, dried sweetened strawberries, semi-sweet chocolate chips, white chocolate drops and strawberry drops",
      price: 4.99,
      photoURL: "/assets/snack-images/salty/neap.jpeg",
    },
    {
      name: "Caramel Cashew Trail Mix",
      desc: "Delicious medley of milk chocolate caramel balls, cashews, M&M'S® milk chocolate candies and peanuts",
      price: 4.99,
      photoURL: "/assets/snack-images/salty/crmel.jpeg",
    },
    {
      name: "Date and Nut Bars Chocolate Chip Cookie Dough",
      desc: "Chocolate chip cookie dough flavor offers rich taste. Made with dates, cashews, chocolate chips and sea salt for wholesome taste. Vegan and gluten-free certified to accommodate a variety of diets. 10pk for more value per bar",
      price: 5.99,
      photoURL: "/assets/snack-images/salty/datenut.jpeg",
    },
    {
      name: "Power Crunch Protein Energy Bars - Strawberry Creme",
      desc: "Smooth strawberry and velvet cream flavors. Our Power Crunch Original Strawberry Cream protein bar is sure to make snack time a success. This delicious cream-filled wafer energy bar delivers 13g of protein, 5 grams of sugar and contains no sugar alcohols",
      price: 7.99,
      photoURL: "/assets/snack-images/salty/strawberryprotein.jpeg",
    },
    {
      name: "MadeGood Chocolate Dipped Granola Bar Birthday Cake",
      desc: "A MadeGood Granola Bar drizzled and dipped in chocolate, that's what. Vegan, organic, and free from the most common allergens including dairy",
      price: 4.99,
      photoURL: "/assets/snack-images/salty/madegoodg.jpeg",
    },
    {
      name: "Freeze Dried Strawberry Slices",
      desc: "Dried strawberry slices are perfect for yogurt parfaits, oatmeal, salads and more",
      price: 3.99,
      photoURL: "/assets/snack-images/salty/freezestraw.jpeg",
    },
    {
      name: "Organic Dried Unsweetened Mango Snacks",
      desc: "USDA organic mango snacks are sure to become a family favorite",
      price: 3.99,
      photoURL: "/assets/snack-images/salty/goodmango.jpeg",
    },
    {
      name: "Organic Dried Unsweetened Pineapple Ring Snacks",
      desc: "USDA organic dried pineapple snacks are non-GMO with no added sulfites",
      price: 3.99,
      photoURL: "/assets/snack-images/salty/goodpine.jpeg",
    },
    {
      name: "Dried Sweetened Cherries",
      desc: "This package of dried sweetened cherries has all the vibrant flavor you expect with just a touch of added sweetness, and it has no added sulfites, artificial flavors or artificial colors, making for an instant pantry staple",
      price: 3.99,
      photoURL: "/assets/snack-images/salty/goodcherry.jpeg",
    },
    {
      name: "Frozen Pork Bao Buns",
      desc: "These mini bao buns come stuffed with pork covered in sweet barbecue sauce flavored with onion and garlic for outstanding flavor, and the six-count pack lets you choose your portion size to suit your appetite",
      price: 5.99,
      photoURL: "/assets/snack-images/frozen/porkbao.jpeg",
    },
    {
      name: "Auntie Anne's Classic All Beef Frozen Pretzel Dogs",
      desc: "Warm, soft pretzel dough wrapped around a juicy hot dog",
      price: 5.99,
      photoURL: "/assets/snack-images/frozen/pretzeldogs.jpeg",
    },
    {
      name: "Frozen Breaded Mozzarella Sticks",
      desc: "Whether it's game day, movie night or just time for a snack, frozen Mozzarella Cheese Sticks from market pantry™ are sure to hit the spot",
      price: 4.99,
      photoURL: "/assets/snack-images/frozen/cheesesticks.jpeg",
    },
    {
      name: "Vegetable Tray with Ranch Dip",
      desc: "This 18-ounce veggie tray contains an array of veggies that come washed, trimmed and ready to eat, saving you the time and effort of having to prep the veggies yourself",
      price: 5.99,
      photoURL: "/assets/snack-images/frozen/vegtray.jpeg",
    },
    {
      name: "Hormel Gatherings Pepperoni, Cheddar Cheese & Crackers Snack Tray",
      desc: "The complete party tray; Comes with meat, cheese, and crackers",
      price: 9.99,
      photoURL: "/assets/snack-images/frozen/snacktray1.jpeg",
    },
    {
      name: "Sampler Pack Calabrese Salami, Prosciutto and Capocollo",
      desc: "Sliced meat sampler pack is great for sandwiches or charcuterie boards",
      price: 9.99,
      photoURL: "/assets/snack-images/frozen/snacktray2.jpeg",
    },
    {
      name: "Sargento Natural Mozzarella String Cheese",
      desc: "Sargento® String Cheese is a natural source of Calcium, each individual stick contains 20% DV Calcium and 80 Calories",
      price: 7.99,
      photoURL: "/assets/snack-images/frozen/cheese1.jpeg",
    },
    {
      name: "Mini Babybel Gouda Semisoft Cheeses",
      desc: "Mini Babybel® Gouda cheese has a creamy, nutty taste the whole family will love",
      price: 8.99,
      photoURL: "/assets/snack-images/frozen/cheesebag1.jpeg",
    },
    {
      name: "Mini Babybel Original Semisoft Cheeses",
      desc: "Mini Babybel® Gouda cheese has a creamy, nutty taste the whole family will love",
      price: 8.99,
      photoURL: "/assets/snack-images/frozen/cheesebag2.jpeg",
    },
    {
      name: "Mini Babybel Light Semisoft Cheeses",
      desc: "Mini Babybel® Gouda cheese has a creamy, nutty taste the whole family will love",
      price: 8.99,
      photoURL: "/assets/snack-images/frozen/cheesebag3.jpeg",
    },
    {
      name: "Banana",
      desc: "Tasty on their own or added into smoothies, oatmeal or dessert",
      price: 0.19,
      photoURL: "/assets/snack-images/grocery/banana.jpeg",
    },
    {
      name: "Strawberries- 1b Package",
      desc: "A great fruit to add to your child's lunchbox",
      price: 2.59,
      photoURL: "/assets/snack-images/grocery/strawberries.jpeg",
    },
    {
      name: "Organic Honeycrisp Apples - 2lb",
      desc: "A two-pound bag of Organic Honeycrisp Apples from Good & Gather™ makes it easy to stay stocked up on the perfect lunchtime side, grab-and-go snack or baking choice, all in one go!",
      price: 7.99,
      photoURL: "/assets/snack-images/grocery/apples.jpeg",
    },
    {
      name: "Red Grapefruit - 1 Count",
      desc: "Packed with essential nutrients and a great amount of Vitamin C, Red Grapefruits also make a refreshing, healthy treat any time of the day.",
      price: 0.99,
      photoURL: "/assets/snack-images/grocery/grapefruit.jpeg",
    },
    {
      name: "Driscoll's Raspberries - 6oz Package",
      desc: "For the finest in raspberries the world try Driscoll's.",
      price: 3.99,
      photoURL: "/assets/snack-images/grocery/raspberries.jpeg",
    },
    {
      name: "Mini Watermelon - 1 Count",
      desc: "Mini seedless watermelons have a deep red flesh that provides a crisp, juicy flavor.",
      price: 3.99,
      photoURL: "/assets/snack-images/grocery/watermelon.jpeg",
    },
    {
      name: "Iceberg Lettuce Head - 1 Count",
      desc: "This Iceberg Lettuce from Green Giant® offers a variety of uses while being low in calories, making it an excellent component in your veggie drawer.",
      price: 1.99,
      photoURL: "/assets/snack-images/grocery/lettuce.jpeg",
    },
    {
      name: "Blueberries - 1pt",
      desc: "Fresh blueberries to add into your baking recepies.",
      price: 2.99,
      photoURL: "/assets/snack-images/grocery/blueberries.jpeg",
    },
    {
      name: "Green Cabbage - 1 Count",
      desc: "Green cabbage is a winter vegetable and one of several cabbage varieties.",
      price: 1.99,
      photoURL: "/assets/snack-images/grocery/cabbage.jpeg",
    },
    {
      name: "Lemon - 1 Count",
      desc: "Lemons are a type of citrus fruit used in many ways as the flesh, juice and peel all have various uses.",
      price: 0.69,
      photoURL: "/assets/snack-images/grocery/lemon.jpeg",
    },
    {
      name: "Coca-Cola - 12pk/12 fl oz Cans",
      desc: "12 cans of Coca-Cola Original Taste—the refreshing, crisp taste you know and love",
      price: 6.99,
      photoURL: "/assets/snack-images/drinks/coke.jpeg",
    },
    {
      name: "Dr Pepper Soda - 12pk/12 fl oz Cans",
      desc: "The 23 signature flavors of Dr Pepper are blended to create one satisfyingly unique beverage.",
      price: 6.99,
      photoURL: "/assets/snack-images/drinks/pepper.jpeg",
    },
    {
      name: "Canada Dry Ginger Ale Soda - 12pk/12 fl oz Cans",
      desc: "Relax Your Way with Canada Dry when you want, the way you want.",
      price: 6.99,
      photoURL: "/assets/snack-images/drinks/ginger.jpeg",
    },
    {
      name: "A&W Root Beer Soda - 12pk/12 fl oz Cans",
      desc: "Treat yourself to the All-American classic flavor with A&W Root Beer.",
      price: 6.99,
      photoURL: "/assets/snack-images/drinks/rootbeer.jpeg",
    },
    {
      name: "Sunkist Orange Soda - 12pk/12 fl oz Cans",
      desc: "Beaming with bold, orange flavor, Sunkist always satisfies your thirst.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/orangesoda.jpeg",
    },
    {
      name: "Sprite - 12pk/12 fl oz Cans",
      desc: "The OG Sprite, lemon-lime flavored soda for bold personalities.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/sprite.jpeg",
    },

    {
      name: "Pepsi Cola Soda - 12pk/12 fl oz Cans",
      desc: "Enjoy an ice cold Pepsi, the bold, refreshing cola.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/pepsi.jpeg",
    },
    {
      name: "Mountain Dew Citrus Soda - 12pk/12 fl oz Cans",
      desc: "Charged for anything, keep on doing you with Mtn Dew.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/mtndew.jpeg",
    },
    {
      name: "Coca-Cola Cherry - 12pk/12 fl oz Cans",
      desc: "Delicious combination of Coca-Cola and cherry flavor.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/cokecherry.jpeg",
    },
    {
      name: "Sprite - 2 L Bottle",
      desc: "The OG Sprite, lemon-lime flavored soda for bold personalities.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/sprite2l.jpeg",
    },
    {
      name: "Coca-Cola - 2 L Bottle",
      desc: "2L bottle of Coca-Cola Original Taste—the refreshing, crisp taste you know and love.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/coke2l.jpeg",
    },
    {
      name: "Sunkist Orange Soda - 2 L Bottle",
      desc: "Beaming with bold, orange flavor, Sunkist always satisfies your thirst.",
      price: 6.49,
      photoURL: "/assets/snack-images/drinks/sunskit2l.jpeg",
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
      photoURL: "/assets/snack-images/cleaning/c1.jpeg",
    },

    {
      name: "Clorox Disinfecting Wipes Value Pack Bleach Free Cleaning Wipes - 75ct Each/3pk",
      desc: "Clorox® Disinfecting Wipes are proven to kill -19 Virus* in 15 seconds; cleans and kills 99.9% of viruses and bacteria with powerful, triple-layered wipe; Package may vary",
      price: 12.99,
      photoURL: "/assets/snack-images/cleaning/c2.jpeg",
    },

    {
      name: "Clorox Fresh Scent Disinfecting Wipes - Fresh",
      desc: "Clorox Disinfecting Wipes clean, disinfect, deodorize and remove allergens for 5x cleaning power* and leave a fresh scent.",
      price: 2.89,
      photoURL: "/assets/snack-images/cleaning/c3.jpeg",
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

    {
      name: "Ben & Jerry's Chunky Monkey Ice Cream 16oz",
      desc: "Give in to your wild side with Ben & Jerry's Chunky Monkey Ice Cream. Featuring fudge chunks and walnuts mixed into smooth banana ice cream, this toothsome treat kicks snack time into high gear.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/229/625/xlarge/hh9q7he4s7vaing8e6ot.png?1660238536",
    },

    {
      name: "Ben & Jerry's Netflix & Chill'd Ice Cream 16oz",
      desc: "Ben & Jerry's Netflix & Chilled is made with Peanut Butter Ice Cream with Sweet & Salty Pretzel Swirls & Fudge Brownies.",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/230/229/xlarge/jqqhfepjcqlsxjpmogee.png?1660320049",
    },

    {
      name: "Ben & Jerry's Strawberry Cheesecake Ice Cream 16oz",
      desc: "Ben & Jerry's Strawberry Cheesecake Ice Cream tastes exactly like you'd expect: rich, creamy and utterly irresistible.",
      price: 6.99,
      photoURL: "/assets/snack-images/icecream/i1.jpeg",
    },

    {
      name: "Ben & Jerry's Half Baked Ice Cream 16oz",
      desc: "Filled with luscious chunks of fudge brownie and cookie dough, Ben & Jerry's Half Baked Ice Cream pint is a time-tested favorite among snack lovers of all persuasions.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/225/283/xlarge/k1aveznitz25zcvbbttc.png?1660140629",
    },

    {
      name: "Ben & Jerry's Chocolate Chip Cookie Dough Ice Cream 16oz",
      desc: "If you're looking to cool off on a hot summer day, then a pint of Ben & Jerry's ice cream is the way to go.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/225/252/xlarge/sgyoc6ynljcpnckvioar.png?1660139498",
    },

    {
      name: "Ben & Jerry's Chocolate Fudge Brownie Ice Cream 16oz",
      desc: "Looking for some ice cream that you can feel extra good about eating? Ben & Jerry's Chocolate Fudge Brownie ice cream is made of creamy chocolate ice cream with fudgy brownies from New York’s Greyston Baker.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/229/639/xlarge/xfuvpxjtor8ssprxwzlv.png?1660239180",
    },

    {
      name: "Ben & Jerry's The Americone Dream Ice Cream 16oz",
      desc: "Ben & Jerry's AmeriCone Dream Ice Cream is made of sweet vanilla Ice Cream with fudge-covered waffle cone pieces and a caramel swirl.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/032/706/xlarge/1479.jpg?1574269054",
    },
    {
      name: "Ben & Jerry's The Tonight Dough Ice Cream 16oz",
      desc: "Curated with Tonight Show host Jimmy Fallon, Ben & Jerry's Tonight Dough has all the ingredients to cure those late night cravings.",
      price: 6.99,
      photoURL: "/assets/snack-images/icecream/i2.jpeg",
    },

    {
      name: "Talenti Gelato Layers Vanilla Fudge Cookie 10.6oz",
      desc: "Don't sleep on Talenti Gelato Layers Vanilla Fudge Cookie gelato!",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/029/483/xlarge/13409.jpg?1560177021",
    },

    {
      name: "Talenti Dairy Free Sorbetto Alphonso Mango 16oz",
      desc: "Made with real mangoes, pure sugar and fresh lemon, Talenti Alphonso Mango Sorbetto is a flavorful and refreshing treat anyone can enjoy.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/032/212/xlarge/talenti-mango.jpg?1572980269",
    },

    {
      name: "Talenti Gelato Layers Salted Caramel Truffle 11.6oz",
      desc: "Talenti Gelato Layers Salted Caramel Truffle is a decadent 5-layer dessert inspired by the brand's popular Sea Salt Caramel Gelato.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/029/484/xlarge/13408.jpg?1560177039",
    },

    {
      name: "Talenti Gelato Mediterranean Mint 16oz",
      desc: "We can't deliver a Mediterranean vacation, but this is the next best thing. Talenti Mediterranean Mint Gelato is made with real mint leaves and pieces of bittersweet chocolate to add a touch of sweetness.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/032/214/xlarge/talenti-mint.jpg?1572980461",
    },

    {
      name: "Lunchables Turkey & Cheddar with Crackers 3.2oz",
      desc: "Turkey and Cheddar Lunchables feature Kraft Cheddar cheese, Oscar Mayer lean turkey and crackers.",
      price: 3.99,
      photoURL: "/assets/snack-images/quickmeals/q1.jpeg",
    },

    {
      name: "Lunchables Pizza Pepperoni 4.3oz",
      desc: "Whether your feeding the kids or feeling like a kid, Pepperoni Pizza Lunchables are the perfect treat.",
      price: 3.49,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/022/877/xlarge/1543_0990.jpg?1541663906",
    },

    {
      name: "Lunchables Ham & Cheddar with Crackers 3.2oz",
      desc: "Ham and cheese? It’s a match made in heaven. And with Lunchables Ham & Cheddar, it’s the perfect snack to sate cravings at home or on the go.",
      price: 3.79,
      photoURL: "/assets/snack-images/quickmeals/q2.jpeg",
    },

    {
      name: "Lunchables Extra Cheesy Pizza Lunch Combinations 10.6oz",
      desc: "Make lunchtime something they can dip into. Includes a Capri Sun and Air Head.",
      price: 5.79,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/004/201/xlarge/lunchables_extra_cheesy_BOSTON.jpg?1438202990",
    },

    {
      name: "Kraft Original Flavor Macaroni & Cheese Dinner 7.25oz",
      desc: "Imported from your childhood. Chances are you'll be serving Kraft Original Flavor Macaroni & Cheese Dinner to your kids but at the same time helping yourself to a spoonful or two.",
      price: 2.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/022/785/xlarge/1329_0084.jpg?1541663692",
    },

    {
      name: "Velveeta Shells & Creamy Cheese Sauce 12oz",
      desc: "Let the cheese sauce fill all the nooks and crannies of the shells in this Velveeta Shells and Cheese.",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/870/xlarge/7708_1.png?1581438182",
    },

    {
      name: "Rice-A-Roni Cheddar Broccoli Rice Cup 2.11oz",
      desc: "See... you do like broccoli.",
      price: 2.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/028/684/xlarge/12969_104.jpg?1557857044",
    },

    {
      name: "Jack’s Pepperoni Pizza 14.3oz",
      desc: "Pepperoni Pizza will never fade away. You can't do much better than crispy crust, 100% real Wisconsin cheese and scrumptious pepperoni.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/039/610/xlarge/22457.png?1602271661",
    },

    {
      name: "Jack's Sausage & Pepperoni Pizza 15oz",
      desc: "Meat lovers rejoice over this Sausage and Pepperoni Pizza! And don't have a cow - we didn't skimp on the 100% real Wisconsin cheese.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/039/606/xlarge/22453.png?1602271600",
    },

    {
      name: "Hot Pockets Frozen Garlic Buttery Crust Pepperoni Pizza 2ct 9oz",
      desc: "Real ooey gooey cheese. Garlic butter seasoned crust. Flavorful pepperoni... are you drooling yet?",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/101/945/xlarge/r1rjht98jmbtpimxsufa.png?1642699060",
    },

    {
      name: "Totino's Frozen Combination Pizza Rolls 15ct 7.5oz",
      desc: "It's not a party without pizza rolls.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/023/524/xlarge/3396_1264.jpg?1541665465",
    },

    {
      name: "White Castle Frozen Classic Cheeseburger Sliders 4ct 7.3oz",
      desc: "Craving White Castle but there’s no location nearby to drive up to? We’ve got ya covered.",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/056/726/xlarge/25548-2%281%29.png?1617049952",
    },

    {
      name: "Q-Tips Cotton Swabs 170ct",
      desc: "Q-tips cotton swabs are the ultimate home, hygiene, and beauty tool.",
      price: 3.29,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/065/379/xlarge/bqlcjwbe8wkhcptxih45.png?1629167031",
    },

    {
      name: "Sally Hansen Insta-Dri Nail Polish Taupe Priority 0.31oz",
      desc: "Sally Hansen Insta-Dri Nail Color is America's #1 quick-dry polish.",
      price: 2.29,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/140/522/xlarge/vyytoenjjw8drofn0xk0.png?1645480462",
    },

    {
      name: "Sally Hansen Insta-Dri Nail Polish Against the Grey 0.31oz",
      desc: "Sally Hansen Insta-Dri Nail Color is America's #1 quick-dry polish.",
      price: 2.29,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/038/951/xlarge/21501_1.png?1600181655",
    },

    {
      name: "Quip Plastic Electric Toothbrush Blue 1ct",
      desc: "Get a full two-minute clean with quip’s sensitive sonic vibrations, built-in timer and 30-second pulses to remind you when to switch sides.",
      price: 29.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/156/257/xlarge/k6rkmdshdkd9vlwwyul5.png?1646321361",
    },

    {
      name: "Harry's Truman Indigo Blue Razor with Refill Cartridge",
      desc: "A rubberized handle with a textured pattern provides optimal control, even when wet.",
      price: 9.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/069/458/xlarge/zxnr1ach36a3hsgzc5ev.png?1631890391",
    },

    {
      name: "Harry's Shave Gel with Aloe 6.7oz",
      desc: "The rich lather protects your face and keeps you in control of your shave. The gel quickly lathers into a rich, cushioning foam.",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/174/612/xlarge/u1m8uc6eaetvpniyuznc.png?1649888275",
    },

    {
      name: "Dove Refreshing Cool Moisture Cucumber & Green Tea Body Wash 12oz",
      desc: "A nourishing body wash with a refreshing cucumber and green tea scent. Lasting moisture and a fresh clean.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/039/886/xlarge/10125.png?1602871821",
    },

    {
      name: "Irish Spring Original Deodorant Soap Bars 3pk 3.7oz",
      desc: "Deodorant soap bar with an invigorating scent and long lasting Irish Spring Original fragrance 12-hour deodorant protection lets you feel fresh throughout the day.",
      price: 2.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/037/326/xlarge/35000141088_R1C1_ISS_ORIG_3.png?1594304573",
    },

    {
      name: "Dove Men Extra Fresh Cooling Agent Body Wash 13.5oz",
      desc: "How fresh will you be today? Extra Fresh.",
      price: 7.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/021/831/xlarge/dove-men-extra-fresh.jpg?1540825839",
    },
    {
      name: "Chapstick Total Hydration Soothing Oasis .12oz",
      desc: "ChapStick Total Hydration Soothing Oasis Moisturizing Lip Balm Tube has a Korean-inspired, 3-in-1 formula that provides triple action lip care in one lip balm.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/030/186/xlarge/14048.jpg?1564681064",
    },

    {
      name: "Colgate Cavity Protection Toothpaste 2.5oz",
      desc: "Cavity free is the way to be.",
      price: 2.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/029/746/xlarge/810.jpg?1561144525",
    },

    {
      name: "Crest Pro-Health Advanced Multi-Protection Fresh Mint Mouthwash 16.9oz",
      desc: "Crest Pro-Health Advanced Multi-Protection Mouthwash with Fluoride helps you have stronger teeth for a healthier mouth.",
      price: 7.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/030/455/xlarge/13558.jpg?1566418698",
    },

    {
      name: "Childrens Tylenol Pain + Fever Relief Liquid - Acetaminophen - 4 fl oz",
      desc: "Children's Tylenol Liquid Oral Suspension Medicine with acetaminophen for pain & fever relief.",
      price: 6.99,
      photoURL: "/assets/snack-images/health/h1.jpeg",
    },

    {
      name: "Tylenol Extra Strength Pain Reliever and Fever Reducer Caplets - Acetaminophen",
      desc: "Tylenol Extra Strength Caplets with acetaminophen to relieve minor aches & pains & reduce fever.",
      price: 6.99,
      photoURL: "/assets/snack-images/health/h2.jpeg",
    },

    {
      name: "Vicks SpeedRead Digital Thermometer - White",
      desc: "Oral, underarm use and accurate readings within +/- 0.2F, 8 second readings",
      price: 9.99,
      photoURL: "/assets/snack-images/health/h3.jpeg",
    },

    {
      name: "FLTR No Contact Infrared Digital Forehead Thermometer",
      desc: "Non-Contact, One Second Instant Reading - Take your body temperature instantly from 1.2-2.0 inches away.",
      price: 39.99,
      photoURL: "/assets/snack-images/health/h4.jpeg",
    },

    {
      name: "Delsym Cough Relief Liquid - Grape",
      desc: "Controls & Suppresses Cough, advanced time-release formula that works immediately.",
      price: 13.99,
      photoURL: "/assets/snack-images/health/h5.jpeg",
    },

    {
      name: "Mucinex 12 Hour Maximum Strength Cough Suppressant Tablets - 14ct",
      desc: "MAXIMUM STRENGTH MUCINEX DM COUGH & CHEST CONGESTION MEDICINE: Clinically proven to last up to 12 hours to control cough and provide relief for your severe chest congestion.",
      price: 13.49,
      photoURL: "/assets/snack-images/health/h6.jpeg",
    },

    {
      name: "Robitussin Maximum Strength Cough and Chest Congestion Relief Syrup - Elderberry - 8.0 fl oz",
      desc: "8 fl oz bottle of Robitussin Elderberry Maximum Strength Chest Congestion Relief and Cough Medicine.",
      price: 10.49,
      photoURL: "/assets/snack-images/health/h7.jpeg",
    },

    {
      name: "Dramamine Nausea Long Lasting Tablets - 10ct",
      desc: "Dramamine Nausea Long Lasting relieves nausea, dizziness and vomiting for up to 24 hours.",
      price: 5.99,
      photoURL: "/assets/snack-images/health/h8.jpeg",
    },

    {
      name: "Seaband Nausea Relief Acupressure Wristbands - 2ct",
      desc: "Natural nausea relief with no side effects",
      price: 8.99,
      photoURL: "/assets/snack-images/health/h9.jpeg",
    },

    {
      name: "Bayer Headache Pain Reliever Coated Aspirin 500mg with Caffeine Tablets (NSAID) - 100ct",
      desc: "Bayer Aspirin Headache is designed to provide fast relief at first site of pain and starts working in minutes.",
      price: 9.99,
      photoURL: "/assets/snack-images/health/h10.jpeg",
    },

    {
      name: "Vitafusion MultiVites Vitamin Gummies - Berry, Peach & Orange - 150ct",
      desc: "Delicious and Nutritious: Vitamins fused with delicious berry, peach and orange flavors for a taste you'll love!",
      price: 11.99,
      photoURL: "/assets/snack-images/health/h11.jpeg",
    },

    {
      name: "Nature's Truth B12 Vitamin 1000mcg | 100 Tablets",
      desc: "ESSENTIAL VITAMIN: Cyanocobalamin, is a beneficial nutrient in wellness",
      price: 11.99,
      photoURL: "/assets/snack-images/health/h12.jpeg",
    },

    {
      name: "Febreze Odor-Eliminating Linen & Sky Air Freshener 8.8oz",
      desc: "Febreze Air Effects actually eliminates air odors.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/034/713/xlarge/8347_1.png?1585072489",
    },

    {
      name: "Enviroscent Scent Spring Water & Lotus Stix Refill",
      desc: "No flames, no liquids, no spills, no mess Now with 4 Scent Stix.",
      price: 7.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/064/575/xlarge/obdupnihzziwtsbhcyu6.png?1627922623",
    },

    {
      name: "P.F. Candle Co Teakwood & Tobacco Soy Candle 7.2oz",
      desc: "The one that started it all. Some call it the boyfriend scent, we call it the O.G. Leather, teak, and orange.",
      price: 24.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/056/347/xlarge/41704.png?1616512225",
    },

    {
      name: "Dove Purely Pampering Shea Butter & Warm Vanilla Beauty Soap Bars 2ct",
      desc: "Formulated with Dove’s gentle cleansers and 1/4 moisturizing cream, the Shea Butter Beauty Bar leaves skin feeling soft and smooth and looking radiant.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/034/026/xlarge/10124.jpg?1582130818",
    },

    {
      name: "Dove Deep Moisture Nourishing Hand Sanitizer 2oz",
      desc: "Looking for a hand sanitizer that will moisturize your skin? Dove Deep Moisture Hand Sanitizer is 99.99% effective against many common germs and provides 8 hours of moisturization.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/038/573/xlarge/21259_1.png?1597710736",
    },

    {
      name: "Medix Instant Hand Sanitizer 8oz",
      desc: "75% Alcohol with Aloe Vera.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/036/398/xlarge/IMG_7390.png?1591030188",
    },

    {
      name: "Lysol Crisp Linen Disinfectant Spray 19oz",
      desc: "Kills 99.9% of viruses, bacteria and fungi. Kills cold & flu viruses and COVID-19 virus.",
      price: 9.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/039/878/xlarge/21423.png?1602723176",
    },

    {
      name: "Lysol Lemon & Lime Blossom Disinfecting Wipes 35ct",
      desc: "Kills 99.9% of viruses and bacteria*, including 8 cold and flu viruses Kills the COVID-19 virus.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/020/445/xlarge/lysol-wipes.jpg?1535566238",
    },

    {
      name: "Homesmart Toilet Bowl Brush",
      desc: "Sturdy toliet bowl brush, sleek and compact design.",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/018/231/xlarge/Toilet_Bowl_Brush.jpg?1528400628",
    },

    {
      name: "Toilet Plunger",
      desc: "Wooden handle toilet plunger, good grip.",
      price: 6.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/029/749/xlarge/6760.jpg?1561145015",
    },

    {
      name: "Duracell Coppertop AA Batteries - 20 Pack Alkaline Battery",
      desc: "Formulated with POWER BOOST™ ingredients which deliver lasting performance in your devices.",
      price: 17.99,
      photoURL: "/assets/snack-images/office/o1.jpeg",
    },

    {
      name: "Paper Mate Write Bros. 20pk Ballpoint Pens 1.00mm Medium Tip Black",
      desc: "Ballpoint pen with sleek design at affordable price",
      price: 2.99,
      photoURL: "/assets/snack-images/office/o2.jpeg",
    },

    {
      name: "Ticonderoga #2 Pre-Sharpened Pencil, 18ct",
      desc: "Exclusive #2 graphite formula provides extra smooth performance",
      price: 2.99,
      photoURL: "/assets/snack-images/office/o3.jpeg",
    },

    {
      name: "Texas Instruments TI-30XIIS Scientific Calculator - Blue",
      desc: "Fundamental, two-line calculator combines statistics and advanced scientific functions.",
      price: 9.99,
      photoURL: "/assets/snack-images/office/04.jpeg",
    },

    {
      name: "Shameless Pets Blueberried Dog Treats 6oz",
      desc: "Shameless Pets Blueberried Treasure Flavor Soft Baked Treat for Dogs will send your fuzzy first mate on a new adventure!",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/057/823/xlarge/42286-1.png?1618542138",
    },

    {
      name: "Shameless Pets Duck Duck Beets Dog Treats 6oz",
      desc: "Shameless Pets Duck, Duck, Beet Flavor Soft Baked Treat for Dogs will give your pet a taste of the good life!",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/057/825/xlarge/42284-1.png?1618542171",
    },

    {
      name: "Milk Bones Small Dog Biscuits 24oz",
      desc: "For the big dogs who bring us such big joy, these small dog biscuits are a snack worthy of their size.",
      price: 9.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/021/037/xlarge/small-milk-bone.jpg?1538151110",
    },

    {
      name: "Beggin' Strips Bacon Dog Treats 25oz",
      desc: "Each Beggin' Strip gives him the savory, meaty goodness he deserves, since they're made with the mouthwatering taste of real bacon with real meat as their #1 ingredient.",
      price: 19.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/836/xlarge/9406_1.png?1581436117",
    },

    {
      name: "Redbarn Cheese & Bacon Filled Bone 3in 1ct",
      desc: "Natural Beef femur bone, supports dental health, durable and long lasting",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/021/496/xlarge/bacon-cheddar-filled-bone-1.jpg?1539355357",
    },

    {
      name: "Redbarn Bully Stick 7in",
      desc: "Redbarn Braided Bully Stick supports dental health all natural and grain free bully sticks",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/026/087/xlarge/7in-bully-stick.jpg?1551196384",
    },

    {
      name: "Dogsters Nutley Peanut Butter and Cheese Cups 4ct 3.5oz",
      desc: "Treats for Dogs, Ice Cream Style, Nutly Peanut Butter and Cheese Flavor",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/021/875/xlarge/dogsters.jpg?1540834800",
    },

    {
      name: "Purina Tidy Cats 24/7 Performance Clumping Cat Litter 14lb",
      desc: "Put an end to overpowering odors in your home with Purina Tidy Cats Performance Clumping litter for multiple cats.",
      price: 13.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/011/667/xlarge/TidyCats_Litter_Clay.jpg?1487628601",
    },

    {
      name: "Purina Friskies Meaty Bits Chicken in Gravy Wet Cat Food 5.5oz",
      desc: "Quench your curious cat's cravings for savory goodness when you serve Purina Friskies Meaty Bits Chicken Dinner in Gravy wet cat food.",
      price: 1.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/024/156/xlarge/4119_0162.jpg?1544620533",
    },

    {
      name: "Whiskas Temptations Tempting Tuna Flavor Cat Treats Mega Bag 6.3oz",
      desc: "Cats can’t resist the delectable taste of TEMPTATIONS, so give your cat these purrfect TEMPTATIONS Classic Cat Treats.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/029/366/xlarge/12997_01.jpg?1559747063",
    },

    {
      name: "Nutro Perfect Portions Trays Grain-Free Pate Real Chicken Recipe Wet Cat Food 2.6oz",
      desc: "This NUTRO Pate recipe features chicken as the #1 ingredient and is a natural cat food plus vitamins, minerals, and other nutrients to help nourish your healthy cat. ",
      price: 2.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/457/xlarge/13004.jpg?1580162910",
    },

    {
      name: "Resolve Pet Stain & Odor Carpet Cleaner 22oz",
      desc: "Resolve Pet Expert Stain Remover for Carpet is specially formulated to lift and remove tough ground-in dirt & messes left behind by pets.",
      price: 7.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/020/460/xlarge/RESOLVE-STAIN-REMOVER.jpg?1535569784",
    },

    {
      name: "WaterWipes Sensitive Baby Diaper Wipes 60ct",
      desc: "Our fragrance-free baby wipes contain 99.9% purified water with a drop of fruit extract, suitable for eczema-prone skin and allergy sufferers.",
      price: 5.99,
      photoURL: "/assets/snack-images/baby/b1.jpeg",
    },

    {
      name: "Seventh Generation Free & Clear Baby Wipes 64ct",
      desc: "Smooth, soft, and clean - the way a baby's bottom should be. Seventh Generation Free & Clear sensitive Baby Wipes are made for baby's sensitive skin and contain 0% fragrance, alcohol, parabens, or phenoxyethanol.",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/018/737/xlarge/7th-gen-baby-wipes.jpg?1531155346",
    },

    {
      name: "Huggies Pure Baby Wipes 56ct",
      desc: "Huggies Natural Care Sensitive Baby Wipes are plant-based wipes, made with 99% purified water and 1% skin essential ingredients for a gentle clean.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/033/900/xlarge/2764_1.png?1581442385",
    },

    {
      name: "Similac Advance Baby Powder Formula 12.4oz",
      desc: "Similac Advance Infant Formula is a nutritionally complete milk-based and iron-fortified baby formula.",
      price: 19.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/125/480/xlarge/nhbzwc87oyeg332gckk2.png?1644250150",
    },

    {
      name: "Similac Sensitive Ready to Feed Infant Formula 32oz",
      desc: "Similac Sensitive Infant Formula is an easy-to-digest, milk based formula designed for sensitive tummies.",
      price: 9.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/128/389/xlarge/zfpq7n8sqijxaaqf0sba.png?1644594963",
    },

    {
      name: "Happy Baby Organic Sweet Potato & Carrot Puffs 2.1oz",
      desc: "Happy Baby Superfood Puffs are the perfect finger food for crawling babies, enriched with nutrients, made with whole grains and a yummy way to learn self-feeding.",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/028/782/xlarge/happybabypuffscarrot2.1oz_1.jpg?1557930180",
    },

    {
      name: "Gerber 2nd Foods Banana Orange Medley Baby Food 4oz 2ct",
      desc: "Continue your baby's love for fruits and vegetables with Gerber 2nd Foods. ",
      price: 2.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/028/867/xlarge/gerber2ndfoodsbananaorange.jpg?1558104580",
    },

    {
      name: "Sun Bum Foaming Baby Shampoo and Wash 12oz",
      desc: "Ultra-Gentle Foaming Wash with Sea Minerals, Monoi Coconut Oil, Banana, Aloe and White Ginger Keeping squeaky clean is super fun with our foaming head to toe, tear-free Shampoo & Wash. ",
      price: 9.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/039/992/xlarge/21470-1.png?1603148629",
    },

    {
      name: "Johnson's Baby Oil 3oz",
      desc: "Pure baby mineral oil forms a silky, protective moisturizing barrier to lock in up to 10x more moisture on wet skin than an ordinary lotion can on dry skin.",
      price: 3.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/017/827/xlarge/baby_oil.jpg?1525214605",
    },

    {
      name: "Lansinoh Lanolin Nipple Cream for Breastfeeding 1.41oz",
      desc: "Lansinoh Lanolin is the #1 recommended nipple cream by moms and doctors in the US. Clinically tested. Lansinoh Lanolin soothes and protects sore nipples for breastfeeding moms.",
      price: 10.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/064/780/xlarge/dgqfuf41sz8uxhm5pzhn.png?1628103357",
    },

    {
      name: "Nuby Snack Keepers 2ct",
      desc: "Holds 9 ounces of dry snacks that won't spill all over the floor. Protective bottom of Snack Keeper keeps tabletops scratch-free.",
      price: 4.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/059/881/xlarge/26232_-_1.png?1621265334",
    },

    {
      name: "Nuby No Spill Easy Grip Trainer Cup 2ct",
      desc: "Nuby's No-Spill Soft Flex spout with Touch Flo Technology is perfect for beginner.",
      price: 5.99,
      photoURL:
        "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/059/886/xlarge/26270.png?1621265410",
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
    snack86,
    snack87,
    snack88,
    snack89,
    snack90,
    snack91,
    snack92,
    snack93,
    snack94,
    snack95,
    snack96,
    snack97,
    snack98,
    snack99,
    snack100,
    snack101,
    snack102,
    snack103,
    snack104,
    snack105,
    snack106,
    snack107,
    snack108,
    snack109,
    snack110,
    snack111,
    snack112,
    snack113,
    snack114,
    snack115,
    snack116,
    snack117,
    snack118,
    snack119,
    snack120,
    snack121,
    snack122,
    snack123,
    snack124,
    snack125,
    snack126,
    snack127,
    snack128,
    snack129,
    snack130,
    snack131,
    snack132,
    snack133,
    snack134,
    snack135,
    snack136,
    snack137,
    snack138,
    snack139,
    snack140,
    snack141,
    snack142,
    snack143,
    snack144,
    snack145,
    snack146,
    snack147,
    snack148,
    snack149,
    snack150,
    snack151,
    snack152,
    snack153,
    snack154,
    snack155,
    snack156,
    snack157,
    snack158,
    snack159,
    snack160,
    snack161,
    snack162,
    snack163,
    snack164,
    snack165,
    snack166,
    snack167,
    snack168,
    snack169,
    snack170,
    snack171,
    snack172,
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

  await snack86.setCat(icecream);
  await snack87.setCat(icecream);
  await snack88.setCat(icecream);
  await snack89.setCat(icecream);
  await snack90.setCat(icecream);
  await snack91.setCat(icecream);
  await snack92.setCat(icecream);
  await snack93.setCat(icecream);
  await snack94.setCat(icecream);
  await snack95.setCat(icecream);
  await snack96.setCat(icecream);
  await snack97.setCat(icecream);
  await snack98.setCat(icecream);

  await snack99.setCat(quickmeals);
  await snack100.setCat(quickmeals);
  await snack101.setCat(quickmeals);
  await snack102.setCat(quickmeals);
  await snack103.setCat(quickmeals);
  await snack104.setCat(quickmeals);
  await snack105.setCat(quickmeals);
  await snack106.setCat(quickmeals);
  await snack107.setCat(quickmeals);
  await snack108.setCat(quickmeals);
  await snack109.setCat(quickmeals);
  await snack110.setCat(quickmeals);

  await snack111.setCat(bathandbeauty);
  await snack112.setCat(bathandbeauty);
  await snack113.setCat(bathandbeauty);
  await snack114.setCat(bathandbeauty);
  await snack115.setCat(bathandbeauty);
  await snack116.setCat(bathandbeauty);
  await snack117.setCat(bathandbeauty);
  await snack118.setCat(bathandbeauty);
  await snack119.setCat(bathandbeauty);
  await snack120.setCat(bathandbeauty);
  await snack121.setCat(bathandbeauty);
  await snack122.setCat(bathandbeauty);

  await snack123.setCat(healthproducts);
  await snack124.setCat(healthproducts);
  await snack125.setCat(healthproducts);
  await snack126.setCat(healthproducts);
  await snack127.setCat(healthproducts);
  await snack128.setCat(healthproducts);
  await snack129.setCat(healthproducts);
  await snack130.setCat(healthproducts);
  await snack131.setCat(healthproducts);
  await snack132.setCat(healthproducts);
  await snack133.setCat(healthproducts);
  await snack134.setCat(healthproducts);

  await snack135.setCat(homeandoffice);
  await snack136.setCat(homeandoffice);
  await snack137.setCat(homeandoffice);
  await snack138.setCat(homeandoffice);
  await snack139.setCat(homeandoffice);
  await snack140.setCat(homeandoffice);
  await snack141.setCat(homeandoffice);
  await snack142.setCat(homeandoffice);
  await snack143.setCat(homeandoffice);
  await snack144.setCat(homeandoffice);
  await snack145.setCat(homeandoffice);
  await snack146.setCat(homeandoffice);
  await snack147.setCat(homeandoffice);
  await snack148.setCat(homeandoffice);

  await snack149.setCat(pets);
  await snack150.setCat(pets);
  await snack151.setCat(pets);
  await snack152.setCat(pets);
  await snack153.setCat(pets);
  await snack154.setCat(pets);
  await snack155.setCat(pets);
  await snack156.setCat(pets);
  await snack157.setCat(pets);
  await snack158.setCat(pets);
  await snack159.setCat(pets);
  await snack160.setCat(pets);

  await snack161.setCat(baby);
  await snack162.setCat(baby);
  await snack163.setCat(baby);
  await snack164.setCat(baby);
  await snack165.setCat(baby);
  await snack166.setCat(baby);
  await snack167.setCat(baby);
  await snack168.setCat(baby);
  await snack169.setCat(baby);
  await snack170.setCat(baby);
  await snack171.setCat(baby);
  await snack172.setCat(baby);

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
