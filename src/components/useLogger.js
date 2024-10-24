import { useState } from 'react';

const useLogger = (scope, logType, message) => {
    const [consoleOutput, setConsoleOutput] = useState([]);
  
    const logMessage = () => {
      if (message) {
        const currTime = new Date().toLocaleTimeString();
        const consoleMessage = `[${scope}] [${currTime}] ${message}`;
        setConsoleOutput((prev) => [...prev, consoleMessage]);
        console[logType](consoleMessage);
      } else {
        alert('please enter message');
      }
    };
  
    return { consoleOutput, logMessage };
}

export default useLogger;