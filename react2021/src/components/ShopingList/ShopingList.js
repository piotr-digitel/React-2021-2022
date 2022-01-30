
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function zakupClick(zakup){
  console.log(zakup.nazwa +' id: ' + zakup.id)
  //this.setState({data: 'nannsd'});

  //zakupyToDisplay.splice(zakup.id, 1);
}


function ShopingList({zakupyToDisplay}) {

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <b>Shoping List</b>
        <ul className={commonColumnsStyles.AppList}>
          {zakupyToDisplay.map((zakup) => <li onClick={() =>zakupClick(zakup)} key={zakup.id}> {`${zakup.nazwa}`} </li>)}  

         

        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
