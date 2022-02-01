import React , { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from "./common/consts/produkty";



  const zakupy =  [{
    id: 0,
    nazwa: "mleko",
    podkreslony: false
  },
  {
    id: 1,
    nazwa: "sałata",
    podkreslony: true
  }];

  

function App() {
  const [resultsToDisplay, setResultsToDisplay] = useState(produkty);
  const [koszykToDisplay, setZakupyToDisplay] = useState(zakupy);
  const [rerender, setRerender] = useState(false);

  const sendDataToParent = (produkt) => { // the callback. Use a better name!
    let iloscWKoszyku = koszykToDisplay.length
    let maxid = 0;
    for(let i = 0; i < iloscWKoszyku; i++){
      const a = koszykToDisplay[i].id;
      if(a >= maxid) maxid= a + 1; 
    }
    koszykToDisplay.push({id: maxid, nazwa: produkt.nazwa, podkreslony: false});
    console.log(koszykToDisplay);
    setZakupyToDisplay(koszykToDisplay);
    setRerender(!rerender);
  };

  const sendNewProductToParent = (produkt) => {
    produkty.push({nazwa: produkt.newProduct, kategoria: produkt.newCategory, produktSpozywczy: produkt.isFood});
    setZakupyToDisplay(koszykToDisplay);
    setRerender(!rerender);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts  sendNewProductToParent={sendNewProductToParent} />
      <ProductsFilters produkty={produkty} sendFilteredProductsToParentComponent={setResultsToDisplay} />
      <div className={styles.columnsWrapper}>
        <ProductsList produktyToDisplay={resultsToDisplay} sendDataToParent={sendDataToParent}/>
        <ShopingList zakupyToDisplay={koszykToDisplay}/>
      </div>
    </ div>
  );
}

export default App;
