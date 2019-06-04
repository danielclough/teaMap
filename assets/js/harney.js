$(document).ready(function() {

    // process the form
    $('form[method=post]').submit(function(event) {

        $.ajax({
            url: "https://formspree.io/" + {{ pageform.to }},
            method: "POST",
            data: {
                message: $('textarea').val(),
                from: $('input[businessname=businessname]').val(),
                email: $('input[type=email]').val()
            },
            dataType: "json",
            success: function() {
                alert("Thanks! We'll get back to you soon.");
            }
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});