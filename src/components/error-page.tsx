import { FunctionComponent } from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage: FunctionComponent = () => {
    const error = useRouteError()

    console.error(error)

    return (
        <div className="flex items-center justify-center bg-white p-4 m-4 rounded-lg">
            <ErrorMessages error={error} />
        </div>
    )
}

export default ErrorPage

const ErrorMessages: FunctionComponent<{ error: unknown }> = ({ error }) => {
    if (
        error &&
        typeof error === 'object' &&
        'status' in error &&
        error.status === 404
    )
        return <h2>Not Found</h2>
    if (error instanceof Error) return <h2>{error.message}</h2>

    return <h2>Something went wrong unexpectedly</h2>
}
