import React from 'react';
import styles from '../../common/styles/Headers.module.scss';

class ProductsFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: '',
            searchOnlyFood: false,
            searchCategory: ''
        }
    }

    handleSearchPhraseChange = (event) => {
        this.setState({ searchPhrase: event.target.value }, () => this.filterProdukty());
    }

    handleOnlyFoodChange = (event) => {
        this.setState({ searchOnlyFood: event.target.checked }, () => this.filterProdukty());
    }

    handleSelectCategory = (event) => {
        this.setState({ searchCategory: event.target.value }, () => this.filterProdukty());
    }

    filterProdukty = () => {
        const { produkty } = this.props;
        const { searchPhrase, searchOnlyFood, searchCategory } = this.state;

        // odfiltrowanie zgodnych wyników
        let filteredProdukty = produkty.filter((produkt) => produkt.nazwa.includes(searchPhrase.toLowerCase()));
        if (searchOnlyFood) {
            filteredProdukty = filteredProdukty.filter((produkt) => produkt.produktSpozywczy === true);
        }
        if (searchCategory) {
            filteredProdukty = filteredProdukty.filter((produkt) => produkt.kategoria === searchCategory);
        }
        // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
        this.props.sendFilteredProductsToParentComponent(filteredProdukty);
    }

    handleResetFilters = () => {
        this.setState({
            searchPhrase: '',
            searchOnlyFood: false,
            searchCategory: ''
        },() => {
            this.filterProdukty();
        });
    }

    getUniqueCategories = () => {
        const { produkty } = this.props;
        const CategoryList = produkty.map((produkt) => produkt.kategoria)
        const uniqueCategoryList = [...new Set(CategoryList)];
        return uniqueCategoryList
    }


    render() {
        const uniqueCategories = this.getUniqueCategories();
        const { searchPhrase, searchOnlyFood, searchCatType } = this.state;
        return (
            <div className={styles.Wrapper}>
                Szukaj po nazwie: 
                <input className={styles.HeaderItems} value={searchPhrase} onChange={this.handleSearchPhraseChange}></input>
                <p> Tylko produkty spożywcze: </p>
                <input type='checkbox' onChange={this.handleOnlyFoodChange} value={searchOnlyFood} ></input>
                <p className={styles.HeaderItems}> Kategorie: </p>
                <select value={searchCatType} onChange={this.handleSelectCategory}>
                    <option key={'all'} value={''}>Wszystkie</option>
                    {uniqueCategories.map((kategoria) =><option key={kategoria} value={kategoria}>{kategoria}</option>)}
                </select>
                {/* <button onClick={this.filterVehicles}>Wyszukaj</button> */}
                <button className={styles.HeaderItems} onClick={this.handleResetFilters}>Zresetuj filtry</button>
            </div>
          );
    }
  }

  export default ProductsFilters;