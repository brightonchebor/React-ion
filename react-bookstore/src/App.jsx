import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import "./App.css";


const App = () => {

  return (
    <>
    
      <Header />
      <br/>
      <br/>
      <ProductList title={'Romeo and Juliet'} author={'William Shakespear'} year={2000} lang={'Arabic'} pages={879} price={2900} />
      <br />
      <br />
      <ProductList title={'Romeo and Juliet'} author={'William Shakespear'} year={2000} lang={'Arabic'} pages={879} price={2900} />
      <br />
      <br />
      <ProductList title={'Romeo and Juliet'} author={'William Shakespear'} year={2000} lang={'Arabic'} pages={879} price={2900} />     
      <Footer />

    </>
  );

}

export default App;
