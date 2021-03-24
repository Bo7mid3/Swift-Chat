import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import FriendSearch from "../../components/panel/sub-panel/friend-search";
import InboxChat from "../../components/panel/sub-panel/inbox-chat";

const SubPanel = ({ url }) => { 

    return (<>
    <Route exact path={`${url}/`} component={InboxChat} />
    <Route path={`${url}/search-frnd`} component={FriendSearch} />
    </>)
}

export default SubPanel;