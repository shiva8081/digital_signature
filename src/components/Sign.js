import React from 'react'

import SignatureCanvas from 'react-signature-canvas'

export const Sign = ({signatureRef}) => {
  return (
    <div className='border-2 border-gray-300  w-[600px] h-[400px]'  >
        
    <SignatureCanvas
    ref={signatureRef}
      penColor='black'
      canvasProps={{ width: 600, height: 400, className: 'sigCanvas ' }}
    />
  </div>
  )
}
