$(function(){
   var includes = $('[data-include]');
   jQuery.each(includes, function(){
     var file = 'https://workingpanda.github.io/antikviteti/' + $(this).data('include') + '.html';
     $(this).load(file);
   });
 });