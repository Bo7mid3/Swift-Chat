import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import FriendSearch from "./friend-search";
import InboxChat from "./inbox-chat";

const SubPanel = ({ url }) => { 

    return (<>
    <Route exact path={`${url}/`} component={InboxChat} />
    <Route path={`${url}/search-frnd`} component={FriendSearch} />
    </>)
}

export default SubPanel;