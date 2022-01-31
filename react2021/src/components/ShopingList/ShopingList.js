import React, { useState, useEffect, setState } from 'react';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";



function ShopingList({zakupyToDisplay}) {

  const [ zakupToDisplay, setValue ] = useState(zakupyToDisplay);

  //function zakupClick(zakup){
  const zakupClick = (zakup, koszyk) => {

   console.log(zakup.nazwa +' id: ' + zakup.id);
   console.log(koszyk);
    // this.setState({zakup: ''});

    koszyk.splice(zakup.id, 1);
     
    //setValue(zakup);
  };

  const zakupClick2 = (zakup, e) => {
    e.preventDefault();
    //console.log(zakup.id);
    if(zakup.podkreslony === true){
      zakup.podkreslony=false;
    }else{
      zakup.podkreslony=true;
    };
  }

 
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeaderR}>
        <b>Shoping List</b>
        <ul className={commonColumnsStyles.AppList}>
          {zakupToDisplay.map((zakup) => <li onClick={()=>zakupClick(zakup, zakupToDisplay)} onContextMenu={(e) =>zakupClick2(zakup, e)} key={zakup.id}    
          
          style={{"textDecoration": `${zakup.podkreslony === true ? "line-through" : "auto" }`}}
          
          > {`${zakup.nazwa}`} </li>)}  
        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
