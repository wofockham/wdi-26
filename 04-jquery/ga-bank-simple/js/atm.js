const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = +$('#checking-balance').text().slice(1); // TODO: make this a function
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = +$('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
    const amount = +$('#checking-amount').val();
    const balance = +$('#checking-balance').text().slice(1); // Strip off the $
    $('#checking-balance').text( '$' + (balance + amount) );
    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = +$('#checking-amount').val();
    const balance = +$('#checking-balance').text().slice(1); // Strip off the $
    const otherBalance = +$('#savings-balance').text().slice(1);
    const newBalance = balance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text( '$' + newBalance );
    } else if (amount <= balance + otherBalance) {
      const difference = amount - balance;
      $('#checking-balance').text('$0');
      $('#savings-balance').text( '$' + (otherBalance - difference) )
    }
    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const amount = +$('#savings-amount').val();
    const balance = +$('#savings-balance').text().slice(1); // Strip off the $
    $('#savings-balance').text( '$' + (balance + amount) );
    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = +$('#savings-amount').val();
    const balance = +$('#savings-balance').text().slice(1); // Strip off the $
    const otherBalance = +$('#checking-balance').text().slice(1);
    const newBalance = balance - amount;

    if (newBalance >= 0) {
      $('#savings-balance').text( '$' + newBalance );
    } else if (amount <= balance + otherBalance) {
      const difference = amount - balance;
      $('#savings-balance').text('$0');
      $('#checking-balance').text( '$' + (otherBalance - difference ) );
    }
    checkForZero();
  });
});
