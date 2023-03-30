import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const dfFnc = () => {};

function Menu({ children, menuItems = [], onChange = dfFnc, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: menuItems }]);

    let current = history[history.length - 1];

    const renderItems = () =>
        current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });

    const handleShowInitialMenu = () => setHistory((prev) => prev.slice(0, 1));
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[null, 300]}
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <PopperWrapper className={cx('menu-inner')}>{renderItems()}</PopperWrapper>
                </div>
            )}
            onHide={handleShowInitialMenu}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    menuItems: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
