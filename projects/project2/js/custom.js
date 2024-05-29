$(document).ready(function() {

  var app = $.spapp({
    defaultView  : "#view_1",
    templateDir  : "./tpl/",
    pageNotFound : "error_404"
  });
  

  app.route({
    view:"view_more",
    load: "view_more.html"
  })
  
  app.run();

});