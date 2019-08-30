# Fixmylife-Node-Api
boilerplate for node express backend to make my life simpler<br>
This is a set up I personally use when building a backend.<br>

## Using the Api
When you login a user, in return you get a Token. You'll want to return that token in your headers when making a axios call for **post**, **put** or **delete**.

- [Api Doc](https://documenter.getpostman.com/view/7133880/SVfQRUJX?version=latest) - Documentation on all the endpoints this api comes with.

## Getting Started

First lets fork and clone this project so its yours.<br>
After you have it downloaded, you can run these commands to get it started.

```sh
yarn install
yarn server
```

<p align="left">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarnserver.PNG?raw=true' alt='yarn server'>
  </p
  
Then open [http://localhost:4000/](http://localhost:4000/) to see that your api is running.<br>
When you know your app is running you are ready to make axios calls!

<p align="left">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/localhost4000.PNG?raw=true'>
  </p
  
## Dependencies Included
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors) 
- [helmet](https://www.npmjs.com/package/helmet)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) 
- [dotenv](https://www.npmjs.com/package/dotenv) 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [knex](https://www.npmjs.com/package/knex)
- [sqlite](https://www.npmjs.com/package/sqlite)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Change the api info
<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarninit.PNG?raw=true' width="100%">
</p
  
If you are planning on using this Api for a project we should start by giving it a name. Go to your [package.json](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/package.json) file and you'll want up update **name**, **description**, **repository** and **author**.


  
##  Users Seeded data
<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/usersseed.PNG?raw=true'>
  </p
  
You can change the [**users**](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/database/seeds/001-users.js)  seeded data to fit your projects needs you can get creative and add as many users as you need to get your project started.
**Where to find 001-users.js**
```
database
└── seeds
    └──**001-users.js**
```


## Posts Seeded data
<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/postsseeds.PNG?raw=true'>
  </p
  
You can change the [**posts**](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/database/seeds/002-posts.js) seeded data to fit your projects needs you can get creative and add as posts just remember to add a user id to user_id.
 **Where to find 002-posts.js**
```
database
└── seeds
    └──**002-posts.js**
```

## Important! If you do change the seeds
You will need to run these command to make the changes.
```
npx knex migrate:rollback   
npx knex migrate:latest  
npx knex seed:run 
```

## Acknowledgements
Photos used for this api for the seeded data were provided by [unsplash.com](https://unsplash.com/).

## License
Fixmylife Node Api is free to anyone who would like to use it [licensed as MIT](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/LICENSE).

## Say Thanks
If you use this Api feel free to let me know or if you have any feed back on things I can change or do better thats always appreciated thank you. You can email me [contact@duranirving.com](mailto:contact@duranirving.com) or drop a message in my website [duranirving.com](https://www.duranirving.com).

