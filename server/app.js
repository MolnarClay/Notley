var express = require ('express');
var app = express();

app.get('/notes', function(reg,res){
  res.json([
    {
      title: 'note 1',
      body_html: 'body 1'
    },
    {
      title: 'note 2',
      body_html: 'body 2'

    }
  ]);
});

app.listen(3000,function(){
  console.log('listening on http://localhost:3000');
});
