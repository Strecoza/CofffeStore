import React from "react";

function ButtonAll({allData}){
    return(
        <button className="filter" onClick = {() => allData()}>All products</button>
    )
}
export default ButtonAll;