const {Database, Model} = require('mongorito');

async function init(){
    const db = new Database('192.168.215.224/blog');
    await db.connect();
    
    class Post extends Model {}
    
    db.register(Post);
    
    const post = new Post({
        title: 'Steve Angello rocks',
        author: {
            name: 'Emma'
        }
    });
    
    await post.save();
    
    post.set('author.name', 'Rick');
    await post.save();
}

init().then(()=>{
    console.log("done");
});
