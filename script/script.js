$(() => {
    // mascot
    const $mascot = $('#mascot-img');
    
    function handlerIn() {
        $mascot.attr('src', './css/images/mascot-closed-eye.png');
    }

    function handlerOut() {
        $mascot.attr('src', './css/images/mascot.png');
    }

    function clickHandler() {
        $mascot.attr('src', './css/images/mascot-happy.png');
    }

    const $inputs = $('.email-input');
    $inputs.on('mouseenter', handlerIn);
    $inputs.on('mouseleave', handlerOut);

    const $submit = $('#submit-button button');
    $submit.on('click', clickHandler);

    $("#email").emailautocomplete({
        suggClass: "autocomplete",
        domains:[""]
      });

    
});


