import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component{

  render() {
    const { produktyToDisplay } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
        <p className={commonColumnsStyles.ListL}>
          <b><u>Lista produktów:</u></b>
          <ul className={commonColumnsStyles.AppListProd}>
            {produktyToDisplay.map((produkt) => <li onClick={() => {this.props.sendDataToParent(produkt);}}  key={produkt.nazwa}> {`${produkt.nazwa}`} </li>)}   
          </ul>
        </p>
        </header>
      </div>
    );
  }
}

export default ProductsList;