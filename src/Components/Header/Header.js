import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Avatar, Badge, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSidebar } from 'redux/reducers/uiControlReducer';

const cx = classNames.bind(styles);

export default function Header() {
    const dispatch = useDispatch();
    const { isCollapsed } = useSelector(state => state.uiControlReducer);
    const { currentUser } = useSelector(state => state.userReducer);

    return (
        <div className={cx("wrapper")}>

            <div className={cx("leftSide")}>
                <Button
                    className={cx('sidebarBtn', 'iconBtn')}
                    type="text"
                    icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => dispatch(setSidebar())}
                />
            </div>

            <div className={cx("rightSide")}>
                <Button
                    className={cx('sidebarBtn', 'iconBtn')}
                    type="text"
                    icon={
                        <Badge count={3} color='var(--info)' size='small' style={{ fontSize: '8px' }}>
                            <FontAwesomeIcon icon={faMessage} className={cx(`icon`)} />
                        </Badge>
                    }
                />

                <Button
                    className={cx('sidebarBtn', 'iconBtn')}
                    type="text"
                    icon={
                        <Badge count={6} color='var(--error)' size='small' style={{ fontSize: '8px' }}>
                            <FontAwesomeIcon icon={faBell} className={cx(`icon`)} />
                        </Badge>
                    }
                />

                <div className={cx(`divider`)} />

                <Button
                    className={cx(`userBtn`)}
                    type="text"
                >
                    <Avatar className={cx("avatar")} src={currentUser.avatar || "https://api.multiavatar.com/Binx.png"} />

                    <span>Hi, <span className={cx(`name`)}>{currentUser.name || 'Anonymous'}</span></span>

                    <FontAwesomeIcon icon={faChevronDown} />
                </Button>


            </div>

        </div>
    );
}
