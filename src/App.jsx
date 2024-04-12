import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

function App() {
  return(
    <>
      <div className='container'>
        <Header/>
        <Card/><Card/><Card/><Card/><Card/>
        <Footer/>
      </div>
    </>
  );
  
}

export default App
