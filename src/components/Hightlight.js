import React, { createRef, useEffect } from 'react';
import Prism from 'prismjs';
import cx from 'classnames';
import PropTypes from 'prop-types';

function HighLight({
  language, source, children, lineNumbers,
}) {
  const ref = createRef();
  async function hlight() {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }

  useEffect(() => {
    hlight();
  }, [language, source, children, lineNumbers]);

  return (
    <pre className={cx({ 'line-numbers': lineNumbers })}>
      <code ref={ref} className={cx(`language-${language}`)}>
        { source || children }
      </code>
    </pre>
  );
}

HighLight.defaultProps = {
  source: '',
  language: 'js',
  lineNumbers: false,
};

HighLight.propTypes = {
  language: PropTypes.string,
  source: PropTypes.string,
  lineNumbers: PropTypes.bool,
  children: PropTypes.any, // eslint-disable-line
};

export default HighLight;
