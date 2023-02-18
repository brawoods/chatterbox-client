// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //setTimeout
    var refresh = function() {
      MessagesView.render();
      setTimeout(refresh, 3000);
    };

    refresh();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // $chats and remove the children
    MessagesView.$chats.empty();

    Parse.readAll((data) => {
      // console.log(data);
      for (let message of data) {
        // invoke renderMessage on each message object
        MessagesView.renderMessage(message);
      }
    });

    // iterate over messages


  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // I: message template object
    // O: render input message to the DOM
    // html = MessageView.render(message)
    // append html to $chats
    var html = MessageView.render(message);

    this.$chats.append(html);
    console.log(this.$chats.textContent);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};