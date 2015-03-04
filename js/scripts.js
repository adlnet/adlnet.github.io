$(function() {
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

			$grid.shuffle({
				itemSelector: '.item', // the selector for the items in the grid
        sizer: $sizer
			});

  /* reshuffle when user clicks a filter item */
  $('#filter a').click(function (e) {

    // set active class
    $('#filter a').parent("li").removeClass('active');
    $(this).parent("li").addClass('active');

    // get group name from clicked item
    var groupName = $(this).attr('data-group');
    console.log(groupName);

    // reshuffle grid
    $grid.shuffle('shuffle', groupName );

    e.preventDefault();

  });
});
