import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    const classes = cx('wrapper', className);
    return <div className={classes}>{children}</div>;
}

Wrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
