// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(list) {
    // TODO: Render out the list of rooms.
    var html = '';
    // iterate over list
    //for (var roomName in list) {
    html += RoomView.render(list);
    //}
    // check if room has not been rendered, if so,
    // html += roomView.render(roomName)
    RoomsView.$select.append(html);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // call addRoom(roomname)
    var x = {roomName: roomname};
    RoomsView.render(x);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
