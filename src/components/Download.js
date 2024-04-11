import React from 'react'


export const Download = ({ handleDownload, signatureRef }) => {
    
    return (
        <div className='mb-4'>
            <button
               onClick={handleDownload}
                className='border-2 border-black bg-red-500 text-white w-28 h-9'
                
            >
                Download
            </button>
        </div>
    )
}
