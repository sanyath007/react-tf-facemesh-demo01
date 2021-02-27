/**
 * Work flow
 * - install dependencies DONE
 * - import dependencies DONE
 * - setup webcam and canvas DONE
 * - define references to those DONE
 * - load facemesh DONE
 * - detect function
 * - drawing utilities
 * - load triangulation
 * - setup triangle path
 * - setup point drawing
 * - and drawMesh to detect function
 */
import React, { useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import Webcam from 'react-webcam';
import './App.css';

function App() {
  // Define references
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
  };

  // Load facemesh
  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: {
        width: 640,
        height: 480
      },
      scale: 0.8
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          style={
            {
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              zIndex: 9,
              width: 640,
              height: 480,
            }
          }
        />

        <canvas
          ref={canvasRef}
          style={
            {
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              zIndex: 9,
              width: 640,
              height: 480,
            }
          }
        />
      </header>
    </div>
  );
}

export default App;



