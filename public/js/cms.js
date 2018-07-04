

    $('#SubmitPost').on('click', function (event) {
      event.preventDefault();
      var AuthorId = $('#AuthorId').val();

      $.post('/api/posts', {
        AuthorId: AuthorId,
      }).done(function (response) {
        window.location.href = "/dashboard";
      });
    });

