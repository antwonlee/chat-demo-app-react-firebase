import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  long(args) {
    return (dispatce) => {
      var firebaseRef = new Firebase('https://chat-52cc7.firebaseio.com/messages');
      firebaseRef.authWithOAuthPopup("google", (error, user) => {
        if(error) {
          return;
        }

        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);

