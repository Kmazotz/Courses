$( document ).ready(function(){

  $( '#open-menu' ).click(function(){
    $( '.bar' ).toggleClass( 'active' );
    $( '.column-menu' ).toggleClass( 'active' );
  });

  $( '.Link' ).click(function(){
    $( '.bar' ).toggleClass( 'active' );
    $( '.column-menu' ).toggleClass( 'active' );
  });

  $( '#showVars' ).click(function(e){
    e.preventDefault();
     $("#include").load("App/Controller/include/vars.txt");
  });

  $( '#showFunctions' ).click(function(e){
    e.preventDefault();
     $("#include").load("App/Controller/include/functions.txt");
  });

  $( '#showArrays' ).click(function(e){
    e.preventDefault();
     $("#include").load("App/Controller/include/arrays.txt");
  });

  /*
  $( '#showObjects' ).click(function(e){
    e.preventDefault();
     $("#include").load("App/Controller/include/objects.txt");
  });
  */
  $( '#showConstructor' ).click(function(e){
    e.preventDefault();
     $("#include").load("App/Controller/include/construct.txt");
  });

  $( '#showLoop' ).click(function(e){
    e.preventDefault();
     $("#include").load("App/Controller/include/loop.txt");
  });

})
