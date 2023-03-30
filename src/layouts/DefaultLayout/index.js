import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
