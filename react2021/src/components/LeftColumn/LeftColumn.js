import React from 'react';
import logo from '../.././logo.svg';
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

class LeftColumn extends React.Component {
    static defaultProps = {
        text: 'Missing text from props'
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 100
        };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.timerValue % 2 === 0) {
    //         return true
    //     }
    //     return false
    // }

    render() {
        const { timerValue } = this.props;
        return (
            <div className={commonColumnsStyles.App}>
                <header className={commonColumnsStyles.AppHeader}>
                    <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
                    <p> {`${this.props.text} count from ${this.state.counter} only even numbers`} </p>
                    <p> {this.state.counter + (timerValue % 2 === 0 ? timerValue : timerValue -1 )} </p>
                </header>
            </div>
        );
    }
}

export default LeftColumn;