import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    GroupUserIcon,
    LiveIconSideBar,
    HomeActiveIcon,
    GroupActiveUserIcon,
    LiveIconActiveSideBar,
} from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupActiveUserIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIconSideBar />}
                    activeIcon={<LiveIconActiveSideBar />}
                />
            </Menu>

            <SuggestedAccount label="Suggested accounts" />
            {/* <SuggestedAccount label="Following" /> */}
        </aside>
    );
}

export default SideBar;
