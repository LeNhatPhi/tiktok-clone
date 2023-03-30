// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import HeadlessTippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Info from './Info';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div className={cx('suggested-account')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('suggested-account__wrapper', 'account-item')}>
                <header className={cx('header')}>
                    <Image className={cx('avatar-preview')} alt="avatar" src={images.imgDan} />
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </header>
                <Info />
                <footer className={cx('footer')}>
                    <p className={cx('quantity')}>
                        8M
                        <span className={cx('unit')}>Followers</span>
                    </p>
                    <p className={cx('quantity')}>
                        532.2M
                        <span className={cx('unit')}>Likes</span>
                    </p>
                </footer>
            </PopperWrapper>
        </div>
    );

    return (
        //todo Tippy
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                offset={[-12, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} alt="avatar" src={images.imgDan} />
                    <Info />
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
