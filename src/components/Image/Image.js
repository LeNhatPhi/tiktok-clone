import { useState } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';

function Image({ alt, src, fallback: customFallback = images.imgError, ...props }) {
    const [fallback, setFallback] = useState('');
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img src={fallback || src} alt={alt} {...props} onError={() => setFallback(customFallback)} />;
}

Image.prototype = {
    alt: PropTypes.string,
    src: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
