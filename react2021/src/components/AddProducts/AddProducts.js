import React from 'react';
import styles from '../../common/styles/Headers.module.scss';

class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newProduct: '',
            isFood: false,
            newCategory: ''
        }
    }

    handleProductChange = (event) => {
        this.setState({ newProduct: event.target.value });
    }

    handleCategoryChange = (event) => {
        this.setState({ newCategory: event.target.value });
    }

    handleOnlyFoodChange = (event) => {
        this.setState({ isFood: event.target.checked });
    }

    handleAddProduct = () => {
        const { newProduct, isFood, newCategory } = this.state;
       // console.log(newProduct);
      //  console.log(newCategory);
       // console.log(isFood);
        // przekazanie nowego produktu do komponentu rodzica (App)
        this.props.sendNewProductToParent({newProduct, newCategory, isFood});
    }



    render() {
        const { newProduct, isFood, newCategory } = this.state;
        return (
            <div className={styles.Wrapper}>
                Nazwa:
                <input className={styles.HeaderItems} value={newProduct} onChange={this.handleProductChange}></input>
                Kategoria:
                <input className={styles.HeaderItems} value={newCategory} onChange={this.handleCategoryChange}></input>
                <p> Produkt spożywczy: </p>
                <input type='checkbox' onChange={this.handleOnlyFoodChange} value={isFood} ></input>
                <button className={styles.HeaderItems} onClick={this.handleAddProduct}>Dodaj</button>
            </div>
          );
    }





















    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         newProduct: '',
    //         isFood: false,
    //         newCategory: ''
    //     }

    //    // this.handleChangeName = this.handleChangeName.bind(this);
    //     this.handleChangeCategory = this.handleChangeCategory.bind(this);
    //     //this.handleChangeisFood = this.handleChangeisFood.bind(this);
    // }

    // handleChangeName(event) {  
    //     this.setState({newProduct: event.target.value});  
    // }
    
    // handleChangeCategory(event) {    
    //     this.setState({newCategory: event.target.value});  
    // }

    // handleChangeisFood(event) {    
    //     this.setState({isFood: event.target.value});  
    //     //console.log(event.target.value)
    // }

    // handleAddProduct = () => {
    //     const { newProduct, isFood } = this.state;
    //     console.log(newProduct);
    //     console.log(this.state.newCategory);
    //     console.log(isFood);
    // }

    // render(){   
    //        const { newProduct, isFood } = this.state;
    //     return (
    //         <div className={styles.Wrapper}>
    //            Dodaj produkt: 
    //             <input type="text" className={styles.HeaderItems} value={newProduct} onChange={this.handleChangeName} ></input>
    //             <input type="text" className={styles.HeaderItems} value={this.state.newCategory} onChange={this.handleChangeCategory} ></input>
    //             <input type='checkbox' value={isFood} onChange={this.handleChangeisFood} ></input>
    //             <button className={styles.HeaderItems} onClick={this.handleAddProduct}>Dodaj</button>
    //         </div>
    //     );
    // };
}

export default AddProducts;