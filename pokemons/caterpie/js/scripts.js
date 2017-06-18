$(document).ready(function() {
  $(".stat").each(function(i) {
  $(this).addClass("stat" + (i+1));
    });
});

$(document).ready(function() {
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat1').append(item.stats[4].base_stat);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat2').append(item.stats[3].base_stat);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat3').append(item.stats[2].base_stat);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat4').append(item.stats[1].base_stat);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat5').append(item.stats[0].base_stat);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat6').append(item.base_experience);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat7').append(item.height);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.stat8').append(item.weight);
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/11/"
    }).then(function(item) {
       $('.stat9').append(item.name);
    });
});


