
import { useState } from 'react'
import { GitHubLogo } from './GitHubLogo'
import styles from './UserInfoMenu.module.css'
import { UserInfoResult } from './UserInfoResult'
import { UserSearchInput } from './UserSearchInput'

export const UserInfoMenu = () => {
    const [username, setUsername] = useState('');

    const handleSearch = (value: string) => setUsername(value);
    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <GitHubLogo />
                <UserSearchInput onSearch={(value) => handleSearch(value)} />
                <UserInfoResult username={username} />
            </div>
        </div>
    )
}