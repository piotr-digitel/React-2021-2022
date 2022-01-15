import Results from "./components/Results/Results";
// import RightColumn from './components/RightColumn/RightColumn';
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import vehicles from "./common/consts/vehicles";

function App() {
  console.log('wszystkie pojazdy', vehicles)
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.columnsWrapper}>
        <Results vehiclesToDisplay={vehicles} />
        {/* <RightColumn /> */}
      </div>
    </div>
  );
}

export default App;
