import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
        <Header />
        <ItemListContainer greeting="Bienvenido a ASKENT" />
        <ItemListContainer greeting={"Numero aleatorio " + Math.floor(Math.random() * 1000)} />
    </>
  )
}

export default App
