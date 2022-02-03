import React from 'react';
import styles from './Header.module.scss';
import Modal from "../../components/Modal/Modal";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: '',
            searchOnlyCars: false,
            searchEngineType: '',
            show: false
        }

    }

    handleSearchPhraseChange = (event) => {
        this.setState({ searchPhrase: event.target.value }, () => this.filterVehicles());
    }

    handleOnlyCarsChange = (event) => {
        this.setState({ searchOnlyCars: event.target.checked }, () => this.filterVehicles());
    }

    handleSelectEngineType = (event) => {
        this.setState({ searchEngineType: event.target.value }, () => this.filterVehicles());
    }

    filterVehicles = () => {
        const { vehicles } = this.props;
        const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;

        // odfiltrowanie zgodnych wyników
        let filteredVehicles = vehicles.filter((vehicle) => vehicle.brand.includes(searchPhrase));
        if (searchOnlyCars) {
            filteredVehicles = filteredVehicles.filter((vehicle) => vehicle.type === 'car');
        }
        if (searchEngineType) {
            filteredVehicles = filteredVehicles.filter((vehicle) => vehicle.engineType === searchEngineType);
        }
        // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
        this.props.sendFilteredVehiclesToParentComponent(filteredVehicles);
    }

    handleResetFilters = () => {
        this.setState({
            searchPhrase: '',
            searchOnlyCars: false,
            searchEngineType: ''
        },() => {
            this.filterVehicles();
        });
    }

    getUniqueVehicleEngineTypes = () => {
        const { vehicles } = this.props;
        const vehicleEngineList = vehicles.map((vehicle) => vehicle.engineType)
        const uniqueVehicleEngineList = [...new Set(vehicleEngineList)];
        return uniqueVehicleEngineList
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };

    render() {
        const uniqueVehicleEngineTypes = this.getUniqueVehicleEngineTypes();
        const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;
        return (
            <div className={styles.HeaderWrapper}>

                <Modal show={this.state.show} handleClose={this.hideModal}>

                
                </Modal>
                <button type="button" onClick={this.showModal}>Help</button>

                <input className={styles.HeaderItems} value={searchPhrase} onChange={this.handleSearchPhraseChange}></input>
                <p> Tylko samochody </p>
                <input type='checkbox' onChange={this.handleOnlyCarsChange} value={searchOnlyCars} ></input>
                <p className={styles.HeaderItems}> Typ silnika </p>
                <select value={searchEngineType} onChange={this.handleSelectEngineType}>
                    <option key={'all'} value={''}>All types</option>
                    {uniqueVehicleEngineTypes.map((engineType) =><option key={engineType} value={engineType}>{engineType}</option>)}
                </select>
                {/* <button onClick={this.filterVehicles}>Wyszukaj</button> */}
                <button className={styles.HeaderItems} onClick={this.handleResetFilters}>Zresetuj filtry</button>
            

        </div>
        )
    }
  }

  export default Header;