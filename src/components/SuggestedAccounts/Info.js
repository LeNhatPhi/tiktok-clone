import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function Info() {
    return (
        <>
            <div className={cx('info')}>
                <div className={cx('info__top')}>
                    <h4 className={cx('nickname')}>dannnnnnn</h4>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <p className={cx('username')}>Be Minh Dan</p>
            </div>
        </>
    );
}

export default Info;
