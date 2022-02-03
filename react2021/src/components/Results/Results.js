import React from 'react';
// import styles from './Results.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

class Results extends React.Component {
    render() {
      const { vehiclesToDisplay } = this.props;
        return (
            <div className={commonColumnsStyles.App}>
              <header className={commonColumnsStyles.AppHeader}>
                <ul className={commonColumnsStyles.AppList}>
                  {vehiclesToDisplay.map((vehicle) => <li key={vehicle.model}> {`${vehicle.brand} ${vehicle.model}`} </li>)}
                </ul>
              </header>
            </div>
          );
    }
  }

  export default Results;