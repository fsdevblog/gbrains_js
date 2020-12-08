import React, { createRef, useEffect } from 'react';
import Prism from 'prismjs';
import cx from 'classnames';
import PropTypes from 'prop-types';

const WrapTag = ({ as, children, ...rest }) => { // eslint-disable-line react/prop-types
  const WrapComponent = as;
  if (as) {
    return <WrapComponent {...rest}>{children}</WrapComponent>;
  }
  return <>{ children }</>;
};

function HighLight({
  language, source, children, lineNumbers, inline,
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
    <WrapTag className={cx({ 'line-numbers': lineNumbers })} as={inline ? undefined : 'pre'}>
      <code ref={ref} className={cx(`language-${language}`)}>
        { source || children }
      </code>
    </WrapTag>
  );
}

HighLight.defaultProps = {
  source: '',
  language: 'js',
  lineNumbers: false,
  inline: false,
};

HighLight.propTypes = {
  language: PropTypes.string,
  source: PropTypes.string,
  lineNumbers: PropTypes.bool,
  inline: PropTypes.bool,
  children: PropTypes.any, // eslint-disable-line
};

export default HighLight;
