import React, {useState, useEffect} from "react";
import SrchBar from "../srch-bar";
import { connect } from "react-redux";
import Spinner from "components/shared/spinner";
import axios from "axios";

const FriendSearch = ({search, token}) => {

    const [result, setResult] = useState({data: [], status: "empty"});
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    useEffect(()=> {
        axios("https://SwiftChatServer.ahmedbahloul.repl.co/search",
        {
            cancelToken: source.token,
            method: "GET",
            headers: {
                'Authorization': `BEARER ${token}`
            }
        })
    } ,[search])

    const ShowResults = () => {
        if (result.status=="empty")
            return <div className="no-selected"><p>Type something in the search box to find users</p></div>
        if (result.status=="pending")
            return <div className="friend-search"><Spinner /></div>
        return <div className="friend-search">
            test
        </div>
    }

    return (
        <div className="sub-panel">
            <div className="sub-panel-header">
                <div className="cur-heading">
                    <h4>Search</h4>
                </div>
                <SrchBar />
            </div>
            <ShowResults />
            { /*<div className="friend-search">*/}
            {/*</div>*/}
        </div>)
}

export default connect(({search, user: {token}})=>({search, token}))(FriendSearch);