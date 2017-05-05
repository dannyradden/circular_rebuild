$(document).ready(() => {
  $('#address_search').on('click', (event) => { 
    event.preventDefault()
    let streetAddress = $('input[name=apartment]').val()
    if (!streetAddress) {
      $('.panel-body').append("Street address can't be blank").css('color', 'red')
    } else {
      $.ajax({
        url: '/apartments',
        method: 'POST',
        data: {'apartment': {'street_address': streetAddress}}
      })
      .done(response => {
        response()
      }) 
      .fail((error) => {
        $('.modal').modal()
      })
    }
  })
}) 
