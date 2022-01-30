import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component{

  produktClick(produkt){
    console.log(produkt.nazwa)
    //this.setState({data: 'nannsd'});
    //sendDataToParent(produkt.nazwa);
  }

  render() {
    const { produktyToDisplay } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p><b>Products list</b></p>
          <ul className={commonColumnsStyles.AppList}>
            {produktyToDisplay.map((produkt) => <li onClick={() =>this.produktClick(produkt)} key={produkt.nazwa}> {`${produkt.nazwa}`} </li>)}   
          </ul>
        </header>
      </div>
    );
  }
}

export default ProductsList;