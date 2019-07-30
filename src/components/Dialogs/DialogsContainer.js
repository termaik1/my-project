import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { dialogs, messages, newMessagesText } from "store/dialogs/selectors";
import { userAuth } from "store/authorization/selectors";


const mapStateToProps = store => {
    return {
      dialogs: dialogs(store),
      messages: messages(store),
      newMessagesText: newMessagesText(store),
      isAuth: userAuth(store)
    };
  };
  
  export default connect(mapStateToProps)(Dialogs);
  