import React,  { useContext, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import './App.css';
import MeuProviderML from './context/Context';

function App() {
  const { 
    getCategorieMl,
    setCategoriasML,
    categoriasML,
    web, 
    setWeb,
   } = useContext(MeuProviderML)

   const escolhaSite = (a) => {
    setWeb(a)
   }
  useEffect(() => {
      getCategorieMl()
  },[])
  useEffect(()=> {
    console.log(web)
    if(web === 'Mercado Livre / BuscaPé'){
      getCategorieMl()
    }
   if(web === 'Mercado Livre')  getCategorieMl()
   if(web === 'BuscaPé') {
    window.Error('BuscaPé')
    setCategoriasML([])
  }
  },[escolhaSite])
  return (
    <div>
     <Header web={web} setWeb ={ escolhaSite }/>
     <main>
     <nav>
    <Categories categoriasML={ categoriasML } web={ web } />
    </nav>
    <aside>
      
    </aside>
    </main>
     <Footer/>
    </div>
  );
}

export default App;
