const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("users")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          {
            username: "user1",
            password: bcrypt.hashSync("password", 10),
            email: "user1@gmail.com",
            avatar:
              "https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/default-avatar.png?raw=true"
          },
          {
            username: "user2",
            password: bcrypt.hashSync("password", 10),
            email: "user2@gmail.com",
            avatar:
              "https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/default-avatar.png?raw=true"
          },
          {
            username: "user3",
            password: bcrypt.hashSync("password", 10),
            email: "user3@gmail.com",
            avatar:
              "https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/default-avatar.png?raw=true"
          },
          {
            username: "user4",
            password: bcrypt.hashSync("password", 10),
            email: "user4@duranirving.com",
            avatar:
              "https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/brokenulocklogo.png?raw=true"
          }
        ]);
      })
  );
};
