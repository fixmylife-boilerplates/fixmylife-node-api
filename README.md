# Fixmylife-Node-Api
boilerplate for node express backend to make my life simpler<br>
This is a set up I personally use when building a backend.<br>

## Using the Api
When you login a user, in return you get a Token. You'll want to return that token in your headers when making a axios call for **put** or **delete**.

- [Api Doc](https://documenter.getpostman.com/view/7133880/SVfQRUJX?version=latest) - Documentation on all the endpoints this api comes with.

## Getting Started

```sh
yarn install
yarn server
```

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarnserver.PNG?raw=true' width='400' alt='yarn server'>
  </p
  
  
Then open [http://localhost:4000/](http://localhost:4000/) to see that your api is running.<br>
When you know your app is running you are ready to make axios calls!

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/localhost4000.PNG?raw=true'>
  </p
  
## Dependencies Included
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors) 
- [helmet](https://documenter.getpostman.com/view/7133880/SVfQRUJX?version=latest)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) 
- [dotenv](https://www.npmjs.com/package/dotenv) 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [knex](https://documenter.getpostman.com/view/7133880/SVfQRUJX?version=latest)
- [sqlite](https://www.npmjs.com/package/sqlite)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Change the api info
If you are planning on using this Api for a project we should start by giving it a name. Go to your [package.json](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/package.json) file and you'll want up update **name**, **description**, **repository** and **author**.

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarninit.PNG?raw=true'>
</p

### Users Seeded data
You can change the users seeded data to fit your projects needs you can get creative and add as many users as you need to get your project started.
[001-users.js](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/database/seeds/001-users.js) 

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/usersseed.PNG?raw=true'>
  </p

### Posts Seeded data
You can change the posts seeded data to fit your projects needs you can get creative and add as posts just remember to add a user id to user_id.
[002-posts.js](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/database/seeds/002-posts.js) 

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/postsseeds.PNG?raw=true'>
  </p


## License

Fixmylife Node Api is free to anyone who would like to use it [licensed as MIT](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/LICENSE).
