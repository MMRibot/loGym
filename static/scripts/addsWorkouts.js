$(document).ready(function() {
  console.log('Document ready');

  // function to add sets to specific exercise
  $('#add-set').on('click', function() {
    console.log ('Button add-set clicked');

        var htmlSets = '<div class="sets">' +
            '<label for="reps" class="labels">Reps</label><input type="text" name="reps" class="reps-column" placeholder="How many reps?" />' +
            '<label for="kilos" class="labels">Kg\'s</label><input type="text" name="kilos" class="kilos-column" placeholder="How much Kg?" />' +
        '</div>';

    $('div.sets:last').append(htmlSets);
  });

});