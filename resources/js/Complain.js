$(document).ready(function () {
    $('select').material_select();
    
    $('div', '#top_content').hover(function() {
        $('h2', '#top_title').css("font-size", "56px");
        $('h2', '#top_title').css("cursor", "pointer");
        $('h2', '#top_title').css("transition", "all 0.2s");
    }, function() {
        $('h2', '#top_title').css("font-size", "48px");
        $('h2', '#top_title').css("cursor", "normal");
        $('h2', '#top_title').css("transition", "all 0.2s");
    });
});