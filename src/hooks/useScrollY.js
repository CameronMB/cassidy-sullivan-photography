// src/hooks/useScrollY.js
export const useScrollY = () => {
    const [scrollY, setScrollY] = React.useState(0);
  
    React.useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return scrollY;
  };