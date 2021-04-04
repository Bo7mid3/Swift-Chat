import React, {useEffect} from "react";
import { connect } from "react-redux";
import setSearch from "store/actions/search/setSearch";

const SrchBar = ({setSearch, search}) => {

    useEffect(()=> { 
      setSearch("")
     } ,[]);

    return (
        <div className="srch_bar">
              <div className="stylish-input-group">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search"
                  value={search}
                  onChange={ (e)=> { setSearch(e.target.value) } }
                />
                <span className="input-group-addon">
                  <button type="button">
                    {" "}
                    <i className="fa fa-search" aria-hidden="true" />{" "}
                  </button>
                </span>{" "}
              </div>
            </div>
    )
}

export default connect(({search})=>({search}), { setSearch })(SrchBar);