$(document).ready(function() {
  $(".pokemon").each(function(i) {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/" + i
    }).then(function(item) {
       $('.pokemon'+(i)).append(item.name);
    });
    $(this).addClass("pokemon" + (i+1));
    });
  
    $(".hp").each(function(i) {
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/" + i
    }).then(function(item) {
       $('.hp' +(i)).append(item.stats[5].base_stat +"hp");
    });
    $(this).addClass("hp" + (i+1));
    });

    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon-form/12/"
    }).then(function(item) {
      $('.pokemon12').append(item.name);
    });

    $.ajax({
      url: "http://pokeapi.co/api/v2/pokemon/12/"
    }).then(function(item) {
      $('.hp12').append(item.stats[5].base_stat +"hp");
    });
});


