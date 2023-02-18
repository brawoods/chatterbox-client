// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  addTo: function(username, room, text) {
    // I: user message input via Parse.create, username, *room
    // O: store new message in _data, create object with parameters as properties
    // numbered keys, property is object with keys username, room, text
    // create object, push to data
    var newMessage = {
      username: username,
      room: room,
      text: text
    };
    this._data.push(newMessage);
    // MessagesView.renderMessage(newMessage);
    // invoke Parse.create
    Parse.create(newMessage, function () {
      MessagesView.renderMessage(newMessage);
    });

  },

  retrieve: function() {

  },
};