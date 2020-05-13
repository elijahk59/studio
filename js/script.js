$(document).ready(function() {

    //what we do section toggle
    $('#design').click(function() {
        $(this).hide();
        $('.design').show();
    });
    $('.design').click(function() {
        $(this).hide();
        $('#design').show();
    });
    $('#develop').click(function() {
        $(this).hide();
        $('.develop').toggle();
    });
    $('.develop').click(function() {
        $(this).hide();
        $('#develop').toggle();
    });
    $('#product').click(function() {
        $(this).hide();
        $('.product').toggle();
    });
    $('.product').click(function() {
        $(this).hide();
        $('#product').toggle();
    });


      //submit message
    $("form#my-form").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Dear " + name + " we have received your message. Thank you for reaching out to us.");
        document.getElementById("my-form").reset();
    });
});
