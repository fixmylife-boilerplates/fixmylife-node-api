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
            username: "james",
            password: bcrypt.hashSync("password", 10),
            email: "user1@gmail.com",
            avatar:
              "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80"
          },
          {
            username: "jessica",
            password: bcrypt.hashSync("password", 10),
            email: "user2@gmail.com",
            avatar:
              "https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          },
          {
            username: "bert",
            password: bcrypt.hashSync("password", 10),
            email: "user3@gmail.com",
            avatar:
              "https://images.unsplash.com/photo-1480406537807-00c0914e8d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          },
          {
            username: "richard",
            password: bcrypt.hashSync("password", 10),
            email: "user4@gmail.com",
            avatar:
              "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          }
        ]);
      })
  );
};
