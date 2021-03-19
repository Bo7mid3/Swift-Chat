import React, {useState}  from "react";
import { connect } from "react-redux";
import setSelected from "store/actions/selected/setSelected";

const FriendElem = ({friendName, lastMsg: logLastMsg, selected , dispatch}) => {

    const [ lastMsg, setLastMsg ] = useState(logLastMsg);

    return (
        <div className={`chat_list ${(selected==friendName) && "active"}`} onClick={()=> { dispatch(setSelected(friendName)) }}>
            <div className="chat_people" >
                <div className="chat_img">
                    <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                    />
                </div>
                <div className="chat_ib">
                    <h5>
                        {friendName} <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>
                        {lastMsg}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default connect(({selected}) => ({ selected }))(FriendElem);