import React, { useEffect, useRef } from 'react';

const SplineViewer = ({ url }) => {
  const splineRef = useRef(null);

  useEffect(() => {
    if (splineRef.current) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.7.6/build/spline-viewer.js';
      script.onload = () => {
        splineRef.current.setAttribute('url', url);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [url]);

  return <spline-viewer ref={splineRef} style={{ width: '100%', height: '100vh' }}></spline-viewer>;
};

export default SplineViewer;
