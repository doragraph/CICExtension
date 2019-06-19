$(document).ready(function() {

    /*
    $("#txt_seedphrase").on('keyup', function() {
        if(this.value != ""){
            var words = this.value.match(/\S+/g).length;
            if (words > 12) {
                // Split the string on first 200 words and rejoin on spaces
                var trimmed = $(this).val().split(/\s+/, 12).join(" ");
                // Add a space at the end to keep new typing making new words
                $(this).val(trimmed + " ");
            }
            else {
            //$('#display_count').text(words);
            //$('#word_left').text(12-words);
            }
        }
    });*/

    $('#newpassword').on('keyup', function () {
        if($('#newpassword').val().length < 8){
            $('#lbl_passworderror').html('Password not long enough').css('color', 'red');
            $('#btnlogin').prop('disabled', true);
        }
       else 
        {
            $('#btnlogin').prop('disabled', false);
            $('#lbl_passworderror').html('');
        }
    });

    $('#btnlogin').on('click',function(){
        var password = $('#newpassword').val().trim();

        if(password.length >= 8){
            
        localStorage.password = password;

        chrome.browserAction.setPopup({
        popup:"login.html"
        });
        window.location.href = 'login.html';
        }
    })
 }); 

 