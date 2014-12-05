Template.body.rendered = function () {
  $('#main').waypoint(function(direction) {
    var button = $('#chats').find('button');
    var klass = 'btn-header';

    if (direction == 'up') {
      button.addClass(klass)
    } else {
      button.removeClass(klass)
    }
  }, { offset: 50 });
}
