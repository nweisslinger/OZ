$(Document).ready(function(){
  $("#search-input").on('input', function(e){
      $("#highlight-span").text(function(){
          return (e.target.value.replace(/ /g, "\u00a0"));
      });
  });
});