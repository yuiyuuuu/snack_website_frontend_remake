# Bullseye

<em>Hey there! Thanks for checking out Bullseye.</em>
<em>This project was originally built by a team of 4 including me. I decided to rebuild the frontend to strengthen my css skills and build a website that does not fully depend on a frontend library like MaterialUI. Please check out the video walkthrough below and I hope you enjoy the presentation!</em>

<em>Original project repo: https://github.com/2204-Federation/federation-store</em>

<em>Rebuild Dev: Yingson Yu</em><br/>
<em>LinkedIn: https://www.linkedin.com/in/yingson-yu-3b0a581b9/</em>

---

## About Bullseye

Bullseye is an eCommerce website for snacks and a clone of a very popular store. Shop around for snacks based on your current craving. Don't want to checkout right away? No problem! Create an account and add items to your cart. Sign in again later when you're ready to purchase!

## Video Walkthrough :movie_camera:

insert video here

## Key Features :key:

- Create a user account your email
- Filter through snacks based on your current cravings
- Add to cart functionality with persistent shopping sessions to save cart contents for later
- Implementation of Stripe API for checkout

## Tech Stack :books:

Below is a non-exhaustive list of technologies used throughout the project.

|  Front End  |  Back End   |  APIs  | Libraries/Frameworks |
| :---------: | :---------: | :----: | :------------------: |
| React/Redux | PostgresSQL | Stripe |         CSS          |
|    HTML     |   Node.js   |        |
|     CSS     |             |        |

## Setup :rocket:

If you want to dabble with Bullseye, feel free to clone our repo! After cloning, please enter the following commands:

```
npm createdb bullseye (must have postgres installed)
npm install (install node modules)
npm run seed (seed database)
npm run start:dev (start express with nodemon and compile frontend with webpack)

Runs the app in the development mode.
Open [http://localhost:3002](http://localhost:3002) to view it in your browser.
```
