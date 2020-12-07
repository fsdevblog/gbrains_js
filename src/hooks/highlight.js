import { useEffect } from 'react';
import Prism from 'prismjs';

export default () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
};
