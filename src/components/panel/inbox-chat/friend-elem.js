import React, {useEffect, useState}  from "react";
import { connect } from "react-redux";
import setSelected from "store/actions/selected/setSelected";
import { getMonthShort } from "utils/index";

const FriendElem = ({friendName, liveLastMsg, lastMsg: logLastMsg, selected , dispatch}) => {

    const [ lastMsg, setLastMsg ] = useState(logLastMsg);

    useEffect(()=>{
        //console.log(liveLastMsg);
        if ( liveLastMsg && [liveLastMsg.from,liveLastMsg.to].includes(friendName) )
            setLastMsg({content: liveLastMsg.content, time: new Date(liveLastMsg.time)});
    },[liveLastMsg]);

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
                        {friendName} <span className="chat_date">{lastMsg?`${getMonthShort(lastMsg.time.getMonth())} ${lastMsg.time.getDate()}`:null}</span>
                    </h5>
                    <p>
                        {lastMsg?lastMsg.content:null}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default connect(({selected, lastMsg}) => ({ selected, liveLastMsg: lastMsg }))(FriendElem);