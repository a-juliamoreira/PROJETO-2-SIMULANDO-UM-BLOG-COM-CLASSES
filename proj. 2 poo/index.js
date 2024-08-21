const Author = require('./Author')
const Post = require('./Post')
const Comment = require('./Comment')

const author = new Author('Ray')

const post = author.create_post('POO é um terror', 'Dê muita paciência!')

const comment1 = new Comment('Agatha', 'Muita viu')
const comment2 = new Comment('Ygona', 'Aprende bonito')

post.adicionar_comentario(comment1)
post.adicionar_comentario(comment2)

console.log(author)

console.log(post)