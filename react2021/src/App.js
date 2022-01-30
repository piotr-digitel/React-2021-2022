import React , { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from "./common/consts/produkty";



  const koszykToDisplay =  [{
    id: 0,
    nazwa: "mleko",
    podkreslony: true
  },
  {
    id: 1,
    nazwa: "sałata",
    podkreslony: true
  }];

function App() {
  const [resultsToDisplay, setResultsToDisplay] = useState(produkty);

    //console.log(koszykToDisplay);

    const sendDataToParent = (index) => { // the callback. Use a better name
      console.log(index);
    };


  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList produktyToDisplay={resultsToDisplay} sendDataToParent={sendDataToParent}/>
        <ShopingList zakupyToDisplay={koszykToDisplay}/>
      </div>
    </ div>
  );
}

export default App;
