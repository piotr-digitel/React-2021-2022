import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
    render() {
        const { currentTimerValue } = this.props;
        return (
            <div className={styles.HeaderWrapper}>
                {currentTimerValue}
            </div>
          );
    }
  }

  export default Header;