$(".rearend").hide();
$(".punch").hide();
$(".win").hide();
$(".stunt").hide();
$(".wipeout").hide();


$(".first").click(function() {
    $(".home").hide();
     $(".stunt").fadeIn();
});
$(".redo").dblclick(function() {
    $(".wipeout").hide();
    $(".punch").hide();
     $(".home").fadeIn();
});
$(".ramp").click(function() {
    $(".stunt").hide();
     $(".wipeout").slideDown();
});
$(".redo").click(function() {
    $("body").css("background","radial-gradient(circle, rgba(175,0,0,1) 0%, rgba(209,169,115,1) 96%, rgba(32,43,46,1) 100%)");
     $(".finalMessage").text("follow the instructions");
    $(".final").attr("src", "https://c.tenor.com/nfp9QFEljwQAAAAM/emoji-gun.gif");
});
$(".nitro").click(function() {
    $(".stunt").hide();
     $(".rearend").slideDown();
});
$(".nonchalant").click(function() {
    $(".win").show();
     $(".rearend").hide();
    $("body").css("background","radial-gradient(circle, rgba(0, 29, 175, 1) 0%, rgba(113, 201, 218, 1) 100%)");
});
$(".fight").click(function() {
    $(".punch").show();
     $(".rearend").hide();
});