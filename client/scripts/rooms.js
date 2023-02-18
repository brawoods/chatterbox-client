// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  _list: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function(roomName) {
    // I: key variable - string of room name
    // O: add key to _data
    // create new object with roomName as key, property []
    Rooms._data[roomName] = [];
    Rooms.updateList();
  },

  updateList: function(roomName) {
    // DOM render
    // sorted list array
    // push roomName to list
    // roomsView.render(list)
    Rooms._list.push(roomName);
    roomsView.render(Rooms._list);
  },

  markRoomSelected: function() {

  }

};