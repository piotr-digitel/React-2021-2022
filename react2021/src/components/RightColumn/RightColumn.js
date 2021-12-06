import logo from '../.././logo.svg';
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

function RightColumn(props) {
  const buttonText = 'Double click should reset a timer';

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  }

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}> {buttonText} </button>
        <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
        <p>
          Right column
        </p>
      </header>
    </div>
  );
}

export default RightColumn;
