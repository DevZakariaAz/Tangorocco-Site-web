/*=============  javascript for more styling and good user experience  ===========*/
document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');
    const replyButtons = document.querySelectorAll('.reply-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Change the color of the button to red
            button.style.color = 'red';
            alert('You want to like this review!');
        });
    });

    replyButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('You want to reply to this review! This action is intended for admin review.');
    });
});

});
