import {useEffect} from 'react'
function App() {
  useEffect(()=>{
    const webgazer=window.webgazer
    webgazer.setRegression("weightedRidge")
    webgazer.setTracker("clmtrackr")
    webgazer.setGazeListener((data,clock)=>{
      console.log(data,clock)
    }).begin()
    webgazer.showPredictionPoints(true);
  },[])
  return;
};

export default App;
