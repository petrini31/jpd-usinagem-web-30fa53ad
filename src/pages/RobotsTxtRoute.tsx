
import { useEffect } from 'react';

const RobotsTxtRoute = () => {
  useEffect(() => {
    // Fetch and serve the robots.txt file with correct content-type
    fetch('/robots.txt')
      .then(response => response.text())
      .then(text => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        // Create a temporary link to download/serve the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'robots.txt';
        
        // Set the document content-type and body
        document.body.innerHTML = `<pre>${text}</pre>`;
        document.contentType = 'text/plain';
        
        // Clean up
        URL.revokeObjectURL(url);
      });
  }, []);

  return null;
};

export default RobotsTxtRoute;
