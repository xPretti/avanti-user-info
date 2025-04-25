import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './UserInfoResult.module.css'

interface UserInfo {
    login: string
    name: string
    avatar_url: string
    bio: string
    public_repos: number
    followers: number
}

interface Props {
    username: string
}

export const UserInfoResult = ({ username }: Props) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUserInfo = async () => {
            setLoading(true)
            setError(null)

            try {
                const encodedUsername = encodeURIComponent(username)
                const response = await axios.get(`https://api.github.com/users/${encodedUsername}`)
                setUserInfo(response.data)
            } catch (err) {
                setError('Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchUserInfo()
    }, [username])


    if (loading) return (
        <div className={styles.container}>
            <p className={styles.loading}>Carregando...</p>
        </div>
    )
    if (error) return (
        <div className={styles.container}>
            <p className={styles.error}>{error}</p>
        </div>
    )
    if (!userInfo) return null

    return (
        <div className={styles.container}>
            <img src={userInfo.avatar_url} alt={userInfo.login} className={styles.avatar} />
            <div className={styles.content}>
                <h3>{userInfo.name || userInfo.login}</h3>
                <p>{userInfo.bio || 'Este usuário ainda não possui uma biografia.'}</p>
            </div>
        </div>
    )
}
