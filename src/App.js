import SignatureCanvas from 'react-signature-canvas'
import './App.css';

function App() {
  return (
    <>
    <div className='bg-blue-300'>
      hy
    </div>
    <SignatureCanvas penColor='black'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
    </>
  );
}

export default App;