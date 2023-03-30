import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        lineUpper: data.lineUpper,
        fz14: data.fz14,
    });
    return (
        <Button onClick={onClick} className={classes} to={data.to}>
            {data.images ? <img src={data.images} alt={data.item} /> : data.icon}
            {data.title}
        </Button>
    );
}

MenuItem.prototype = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
