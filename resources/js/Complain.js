$(document).ready(function(){
    var fileTarget = $('#complain_file #complainFile');
    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            filename = $(this).val().split('/').pop().split('\\').pop();
        } 
        
        $(this).siblings('#complainFileName').val(filename); 
    });
    
    $('#wrapper_top').hover(function() {
        $('h1').css('transform', 'scale(1.2)');
        $('h1').css('cursor', 'pointer');
        $('h1').css('transition', 'all 0.2s');
    }, function() {
        $('h1').css('transform', 'scale(1.0)');
        $('h1').css('cursor', 'normal');
        $('h1').css('transition', 'all 0.2s');
    });
    
    $('#complainType').focus(function() {
        $('#complainType').css('border', '1px solid rgb(252, 180, 22)');
        $('#complainType').css('transition', 'all 0.2s');
    });
    
    $('#complainType').blur(function() {
        $('#complainType').css('border', '1px solid rgb(206, 212, 218)');
        $('#complainType').css('transition', 'all 0.2s');
    });
    
    $('#complainContent').focus(function() {
        $('#complainContent').css('border', '1px solid rgb(252, 180, 22)');
        $('#complainContent').css('transition', 'all 0.2s');
    });
    
    $('#complainContent').blur(function() {
        $('#complainContent').css('border', '1px solid rgb(206, 212, 218)');
        $('#complainContent').css('transition', 'all 0.2s');
    });
});