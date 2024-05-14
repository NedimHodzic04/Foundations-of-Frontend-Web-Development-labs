$(document).ready(function() {

  var app = $.spapp({
    defaultView  : "#view_xxx",
    templateDir  : "./tpl/",
    pageNotFound : "error_404"
  });
  
  app.route({
    view : "view_1",
    load : "tpl/view_1.html",
    onCreate: function() {  },
    onReady: function() {  }
  });

  app.route({
    view: "view_3"
  })
  
  app.run();

});