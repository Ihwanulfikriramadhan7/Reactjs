
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Produk from './components/Produk'
// import FormProduk from './components/FormProduk'
// import Nonlift from './lifting/Nonlift'
// import Lift from './lifting/Lift'
// import { useState } from 'react'



function App() {
  // const [input, setInput] = useState("");

  // const handleInputChange = (value) => {
  //   setInput(value);
  // };


  return (
    // kumpulan Component
    <div>
      <Header />
      
      {/* <Home /> */}
      <About />
      <Services />
      <Produk />
      {/* <FormProduk/>
      <Nonlift/>
      <Lift  input={input} onInputChange={handleInputChange}/> */}
      <Contact />
      <div className='text-center mt-4'>
        <button className='btn btn-primary'>Learn More</button>
        <button className='btn btn-danger'>Contact Us</button>
      </div>
      <Footer />
      
    </div>
  )
}
// function userProfile() {
//   const user = useContext(UseContext);
//   return <p>Welcome, {user.name}!</p>;
// }
//contoh usecontext
export default App
// Digunakan untuk mengirim file lain sebagai component