const Post = require('./Post')

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }
    
create_post(titulo, conteudo){
    const post = new Post(titulo, conteudo, this)
    this.posts.push(post)
    return post
    }
}

module.exports = Author
