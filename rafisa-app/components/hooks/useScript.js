import { useEffect } from 'react';

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    document.body.appendChild(script);
  }, [url]);
}

export default useScript;