# Fixmylife-Node-Api
boilerplate for node express backend to make my life simpler<br>
This is a set up I personally use when building a backend.
It will also include the routers, models and middleware.
I'll also make a how to and what needs to be changed to customize for your project.

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
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/localhost4000.PNG?raw=true' width='600' alt='localhost4000'>
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

## What to do next
### Change the api info
If you are planning on using this Api for a project we should start by giving it a name. Go to your [package.json](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/package.json) file and you'll want up update **name**, **description**, **repository** and **author**

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarninit.PNG?raw=true' width='400' alt='yarn server'>
  </p
  
### Change the api info
Next you can change the seeded data to fit your projects needs 
### Users Seeded data
[package.json](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/package.json) file and you'll want up update **name**, **description**, **repository** and **author**

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarninit.PNG?raw=true' width='400' alt='yarn server'>
  </p



## License

Fixmylife Node Api is free to anyone who would like to use it [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE).
