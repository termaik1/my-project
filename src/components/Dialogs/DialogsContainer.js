import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { dialogsPage_dialogs, dialogsPage_messages, dialogsPage_newMessagesText } from "store/dialogs/selectors";


const mapStateToProps = store => {
    return {
      dialogs: dialogsPage_dialogs(store),
      messages: dialogsPage_messages(store),
      newMessagesText: dialogsPage_newMessagesText(store)
    };
  };
  
  export default connect(mapStateToProps)(Dialogs);
  