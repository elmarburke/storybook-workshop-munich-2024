import LoginPage from '@/components/login-page'
import { FunctionComponent, useState } from 'react'

const Login: FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const handleLogin = async () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return <LoginPage isLoading={isLoading} onLogin={handleLogin} />
}

export default Login
