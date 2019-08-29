exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("posts")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("posts").insert([
          {
            user_id: 1,
            image:
              "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            description:
              "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square."
          },
          {
            user_id: 2,
            image:
              "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
            description:
              "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City. It connects the boroughs of Manhattan and Brooklyn, spanning the East River. The Brooklyn Bridge has a main span of 1,595.5 feet and a height of 133 ft above Mean High Water."
          },
          {
            user_id: 3,
            image:
              "https://images.unsplash.com/photo-1534736153994-8a10fdde9164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
            description:
              "Queens is a New York City borough on Long Island across the East River from Manhattan. Flushing Meadows Corona Park, with the Unisphere, a 12-story 1964 World's Fair globe sculpture, hosts the annual U.S. Open tennis tournament. The park’s Queens Museum is known for the Panorama, a building-for-building model of New York City. Nearby Citi Field is the stadium of pro baseball team, the Mets."
          }
        ]);
      })
  );
};
