
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './App.module.css'
import { UserInfoMenu } from './components/UserInfoMenu';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.container}>
        <UserInfoMenu />
      </div>
    </>
  )
}

export default App
