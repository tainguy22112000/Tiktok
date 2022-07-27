import classNames from 'classnames/bind';
import styles from './Header.module.sass';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok logo"></img>
                </div>

                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck="false"></input>
                    <button>
                        {/* Clear */}
                        {<FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />}
                    </button>
                    <button>
                        {/* Loading */}
                        {<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </button>
                    <button className={cx('search-btn')}>
                        {/* Searching */}
                        {<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    </button>
                </div>
                <div className={cx('action')}>ACTION</div>
            </div>
        </header>
    );
}

export default Header;
