import { connect } from "react-redux";
import Dialogs from "./Dialogs";


const mapStateToProps = store => {
    return {
      dialogs: store.dialogsPage.dialogs,
      messages: store.dialogsPage.messages,
      newMessagesText: store.dialogsPage.newMessagesText
    };
  };
  
  export default connect(mapStateToProps)(Dialogs);
  