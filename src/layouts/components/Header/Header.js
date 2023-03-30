import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    InboxIcon,
    LangIcon,
    MsgIcon,
    UserIcon,
    FeedbackIcon,
    KeyboardIcon,
    LiveIcon,
    SettingsIcon,
    CoinsIcon,
    LogoutIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LangIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    fz14: '14px',
                },
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                    fz14: '14px',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
    },
    {
        icon: <CoinsIcon />,
        title: 'Get Coins',
    },
    {
        icon: <LiveIcon />,
        title: 'LIVE Studio',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        lineUpper: true,
    },
];

function Header() {
    const handleChange = (e) => {
        console.log(e);
    };

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logoLink')}>
                    <img src={images.logo} alt="Tiktok-logo" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    <Button basic>
                        <FontAwesomeIcon icon={faPlus} />
                        Upload
                    </Button>

                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Messages">
                                <div className={cx('messages')}>
                                    <MsgIcon />
                                </div>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox">
                                <div className={cx('inbox')}>
                                    <InboxIcon />
                                    <span className={cx('quantity-inbox')}>12</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary to="/">
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu menuItems={currentUser ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <div className={cx('user')}>
                                <Image
                                    src={images.imgDan}
                                    alt="avatar-user"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('more-btn__icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
