import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import FriendSearch from "../../components/panel/side-sub-panel/friend-search";
import InboxChat from "../../components/panel/side-sub-panel/inbox-chat";

const SideSubPanel = () => { 

    return (<>
    <Route exact path={`/panel`} render={()=><Redirect to={{ pathname: `/panel/chat` }}/>} />
    <Route path={`/panel/chat`} component={InboxChat} />
    <Route path={`/panel/search-frnd`} component={FriendSearch} />
    </>)
}

export default SideSubPanel;