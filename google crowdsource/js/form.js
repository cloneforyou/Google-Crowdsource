(function() {
  $(document).ready(function() {
    return $('#contact-form').submit(function(e) {
      var email, message, name;
      name = document.getElementById('inputName');
      email = document.getElementById('inputEmail');
      message = document.getElementById('inputMessage');
      console.log(name);
      if (!name.value || !email.value || !message.value) {
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/vervedofficial@gmail.com',
          data: $(this).serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();

      }
    });
  });

}).call(this);
