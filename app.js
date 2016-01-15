$(document).ready(function(){
    $('#top-text').keyup(function(){
        var value = $(this).val();
        $('.top-text').text(value);
    });
    
    $('#bottom-text').keyup(function(){
        var value = $(this).val();
        $('.bottom-text').text(value);
    });
    
    $('#image-link').keyup(function(){
        var imgValue = $(this).val();
        $('.pic-gen').attr('src',imgValue);
    });
});