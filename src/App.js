
import './App.css';
import { Clear } from './components/Clear';
import { Footer } from './components/Footer'
import { Sign } from './components/Sign';
import { Download } from './components/Download';

import { Header } from './components/Header';
import { useRef } from 'react';


function App() {
  const signatureRef=useRef(null);
  const handleclear = () => {
    if (signatureRef.current) {
      signatureRef.current.clear(); // Clear the signature canvas
    }
  }
  return (
    <>
    <Header/>
      <div className="flex flex-col justify-center items-center h-screen  ">
        <div className=' flex space-x-14 items-start mb-4'>
        <Clear handleclear={handleclear} />
        
        
        <Download />
        
        </div>
        <Sign signatureRef={signatureRef}/>
        
      </div>

      <Footer />
    </>
  );
}

export default App;




