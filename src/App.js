
import './App.css';
// import { Clear } from './components/Clear';
import { Footer } from './components/Footer'
// import { Sign } from './components/Sign';
// import { Download } from './components/Download';
import SignatureCanvas from 'react-signature-canvas'
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
        {/* <Clear handleclear={handleclear} /> */}
        <div className=' mr-4'><button onClick={handleclear} className='border-2 border-black bg-red-500 text-white w-28 h-9'>clear</button></div>
        {/* <Download /> */}
        <div className='    '><button onClick={()=>console.log('download')} className='border-2 border-black bg-red-500 text-white w-28 h-9'>Download</button></div>
        </div>
        <div className='border-2 border-gray-300  w-[600px] h-[400px]'  >
          <SignatureCanvas
          ref={signatureRef} // Reference to the signature canvas component
            penColor='black'
            canvasProps={{ width: 600, height: 400, className: 'sigCanvas ' }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;




