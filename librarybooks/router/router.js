const express = require('express');
const Router = express.Router;
const Book = require('../public/js/book');
const spCheck = require('../controller/super-check');
let router = new Router();


router.get('/',(request, response)=>{
    response.send('page home 300');
    console.log('page home 3000');
});

router.get('/listBook',(request,response, next)=>{
    let repository = request.app.get('books');
    repository.all().then( listAll =>{
        response.json(listAll);
        next();
    })
});

router.get('/book/:id',spCheck.idDie,(request,response, next)=>{
    let repository = request.app.get('books');
    repository.seach(request.params.id).then(myBook =>{
        if(myBook.length === 0)
            response.send('search not book is id '+ request.params.id);
        else
            response.json(myBook);

    }).catch((err)=>{
        if(err) response.send('false error');
        next();
    })
});

router.delete('/deleteBook/:id',spCheck.idDie,(request, response,next)=>{
    let repository = request.app.get('books');
    repository.delete(request.params.id).then(()=>{
        response.send('delete success!!');
    }).catch(()=>{
            response.send('delete false');
            next();
        }
    )
});

router.delete('hardDelete/:id',spCheck.idDie,(request, response, next)=>{
   let repository = request.app.get('books');
   //console.log(request.params.id);
   repository.hardDelete(request.params.id).then(()=>{
       response.send('delete success!!');
   }).catch(()=>{
           response.send('delete false');
           next();
       }
   )
});

router.put('/editBook',spCheck.Title,spCheck.Author,(request, response, next)=>{
    let repository = request.app.get('books');
    let book = new Book(request.body.title);
    book.setId(request.body.id);
    // console.log(request.body.id+" "+request.body.title);
    repository.save(book).then(() => {
        response.send('change success!')
    }).catch(()=> {
            response.send('change error!');
            next();
        })
});

router.post('/addBook', spCheck.Title, spCheck.Author, (request, response, next) => {
    let repository = request.app.get('books');
    let book = new Book(request.body.title);
    book.setAuther(request.body.author);
    book.setPublishor(request.body.publisher);
    book.setPrice(request.body.price);

     // console.log(request.body.author);

    repository.save(book).then(() => {
        response.send('add success!')
    }).catch(()=> {
        response.send('add error!');
        next();
    })
});


module.exports = router;
