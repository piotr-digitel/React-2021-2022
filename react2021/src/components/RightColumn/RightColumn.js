import { useState } from 'react';
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

function RightColumn(props) {
  const [currentInputValue, setCurrentInputValue] = useState('')
  const buttonText = 'Double click should reset a timer';

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  }

  const handleChangeInputValue = (event) => {
    setCurrentInputValue(event.target.value);
  };

  const handleSetTimerFromValue = () => {
    props.onSetTimerToValue(currentInputValue);
  }

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}> {buttonText} </button>
        <input type='number' onChange={handleChangeInputValue} value={currentInputValue} />
        <button onClick={handleSetTimerFromValue}>
          Set value from input to timer
        </button>
      </header>
    </div>
  );
}

export default RightColumn;
