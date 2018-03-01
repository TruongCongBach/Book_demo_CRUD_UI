exports.Title = function (req, res, next) {
    if((req.body.title.length === 0) || (req.body.title.length > 40 )){
        return res.send({message: 'update  error title < 40 and title not null'});
    }
    next();
};
exports.Author = function (req, res, next) {
    if((req.body.author.length === 0) || (req.body.author.length > 100 )){
        return res.send({message: 'update  error title < 100 and title not null'});
    }
    next();
};
exports.idDie = function (req, res, next) {
    let repository = req.app.get('books');
    repository.seach(req.params.id).then(result=>{
      if(result.length === 0) {
          res.send(' nothing id '+req.params.id+' in mysql');
      }else {
          next();
      }
  })
};