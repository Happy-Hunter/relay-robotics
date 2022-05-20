$(() => {
    // mascot
    const $mascot = $('#mascot-img');
    
    function handlerIn() {
        $mascot.attr('src', './css/images/mascot-closed-eye.png');
    }

    function handlerOut() {
        $mascot.attr('src', './css/images/mascot.png');
    }

    function submitHandler() {
        $mascot.attr('src', './css/images/mascot-happy.png');
        window.scrollTo(0, 0);
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

    
    const $form = $('form');
    $form.on('submit', submitHandler);
});


