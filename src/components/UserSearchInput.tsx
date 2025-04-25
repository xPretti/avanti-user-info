import { useState } from 'react'
import styles from './UserSearchInput.module.css'

type UserSearchInputProps = {
    onSearch: (username: string) => void
}

export const UserSearchInput = ({ onSearch }: UserSearchInputProps) => {
    const [username, setUsername] = useState('')

    const handleSearch = () => {
        if (username) {
            onSearch(username)
            setUsername('')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                    placeholder="Digite um usuário do GitHub"
                    className={styles.input}
                />
                <button onClick={handleSearch} className={styles.button}>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </div>
    )
}
