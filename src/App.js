
import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  const handleDownload = () => {
    // if (signatureRef.current) {
    //   const dataUrl = signatureRef.current.toDataURL(); // Convert canvas content to data URL
    //   const a = document.createElement('a');//create new anchor
    //   a.href = dataUrl;
    //   a.download = 'signature.png'; // Set download filename
    //   document.body.appendChild(a);
    //   a.click(); // Trigger click event to initiate download
    //   document.body.removeChild(a); // Remove anchor element
    // }

    const input = document.getElementById('pdf-content'); 
    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('downloaded-file.pdf'); 
      // Specify the name of the downloaded PDF file
    });
  };
  return (
    <>
    <Header/>
      <div className="flex flex-col justify-center items-center h-screen  ">
        <div className=' flex space-x-14 items-start mb-4'>
        <Clear handleclear={handleclear} />
        
        
        <Download signatureRef={signatureRef} handleDownload={handleDownload} />
        
        </div>
        <Sign  signatureRef={signatureRef}/>
        
      </div>

      <Footer />
    </>
  );
}

export default App;




