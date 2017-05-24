
exports.seed = function(knex, Promise) {

  const text1 = [
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  ].join("\n")

  const text2 = [
    "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
    "The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
    "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
  ].join("\n\n")

  const text3 = [
    "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    "I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
    "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with",
  ].join("\n\n")

  return knex('comments').del()
    .then(() => knex('posts').del())
    .then(function () {
      return Promise.all([
        createPost(
          'A poem from me',
          text1,
          'Ironic Irma',
          'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?h=350&auto=compress',
          new Date(2004, 12, 17)
        ),
        createPost(
          'Oh poem my poem',
          text2,
          'Emo Emma',
          'https://images.pexels.com/photos/1994/red-vintage-shoes-sport.jpg?h=350&auto=compress',
          new Date(2011, 11, 11)
        ),
        createPost(
          "It's all about me",
          text3,
          'Hipster Henry',
          'https://images.pexels.com/photos/4787/feet-hipster-longboard-skateboard.jpg?h=350&auto=compress',
          new Date(2008, 5, 12)
        ),
      ])
    })
    .then(function (postIds) {
      return Promise.all([
        knex('comments').insert({post_id: postIds[0], content: 'Firsties!'}),
        knex('comments').insert({post_id: postIds[0], content: 'I did it for the lulz'}),
        knex('comments').insert({post_id: postIds[2], content: 'This comment thread is so lonely'}),
      ])
    })

  function createPost(title, body, author, image_url, created_at) {
    return knex('posts')
      .insert({title, body, author, image_url, created_at})
      .returning('id')
      .then(ids => ids[0])
  }
};
