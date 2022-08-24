# Bullseye

<em>Hey there! Thanks for checking out Bullseye.</em>
<em>This project was originally built by a team of 4 including me. I decided to rebuild the frontend to strengthen my HTML and CSS skills and build a website that does not fully depend on a frontend library like MaterialUI. I also wanted added more features, such as a search bar and added new product categories and backend functionality. Please check out the deployed project below and I hope you enjoy the presentation!</em>

<em>Original project repo: https://github.com/2204-Federation/federation-store</em>

<em>Rebuild Dev: Yingson Yu</em><br/>
<em>LinkedIn: https://www.linkedin.com/in/yingson-yu-3b0a581b9/</em>

<em>Rebuild Dev: Junbeom Chun</em><br/>
<em>LinkedIn: https://www.linkedin.com/in/junbeomchun/</em>

---

## About Bullseye

Have your daily essentials delivered right to you in minutes! Bullseye is an ecommerce store inspired by the popular Gopuff delivery service. Browse through hundreds of products and checkout within seconds. Don't want to checkout right away? Your cart will be waiting for you when you come back.

## Deployed Project

https://snack-website2.herokuapp.com/

To check out admin features:</br>
Email: jack@gmail.com
</br>
Password: 123

For stripe checkout, please use 4242424242424242 as card to pay.</br>
For paypal checkout, please use these credentials to log in:</br>
Email: sb-BUYER8br474317161919@personal.example.com</br>
Password: ]N1$<E$p

Have fun editing/adding/deleting.

## Key Features :key:

User:

- Create a user account your email.
- Add to cart functionality with persistent shopping sessions to save cart contents for later.
- Save addresses to autofill for quick checkouts.
- Implementation of Stripe API, Paypal Checkout and Paypal Buttons for checkout.
- View your previous orders and add/delete addresses in the accounts section.
- Use the search bar to easily find a product or category
- Send a message to admins in /contact to ask for support or ask a general question

Admins:

- Admins can see all orders, and users.
- Admins can cancel orders, delete users, give other users admin.
- Admins can create new products, delete products, and edit product quantities.
- Admin can see support requests from users.

## Tech Stack :books:

Below is a non-exhaustive list of technologies used throughout the project.

|  Front End  |  Back End   |  APIs  | Libraries/Frameworks |
| :---------: | :---------: | :----: | :------------------: |
| React/Redux | PostgresSQL | Stripe |                      |
|    HTML     |   Node.js   |        |
|     CSS     |  Sequelize  |        |

## Setup :rocket:

If you want to dabble with Bullseye, feel free to clone our repo! After cloning, please enter the following commands:

```
createdb bullseye (must have postgres installed)
npm install (install node modules)
npm run seed (seed database)
npm run start:dev (start express with nodemon and compile frontend with webpack)

Runs the app in the development mode.
Open [http://localhost:3002](http://localhost:3002) to view it in your browser.
```
