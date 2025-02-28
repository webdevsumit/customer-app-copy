import React from 'react'
import './style.css'

function FancyButton2({
    label="SIGNUP",
    onClick
}) {
  return (
    <div>
        <div className="FancyButton2-buttons">
            <button onClick={onClick} className="FancyButton2-blob-btn">
                {label}
                <span className="FancyButton2-blob-btn__inner">
                <span className="FancyButton2-blob-btn__blobs">
                    <span className="FancyButton2-blob-btn__blob"></span>
                    <span className="FancyButton2-blob-btn__blob"></span>
                    <span className="FancyButton2-blob-btn__blob"></span>
                    <span className="FancyButton2-blob-btn__blob"></span>
                </span>
                </span>
            </button>
            <br/>

            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
            </defs>
            </svg> */}
        </div>
    </div>
  )
}

export default FancyButton2