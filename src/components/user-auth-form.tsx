import { FormEventHandler, FunctionComponent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Spinner } from './ui/icon-spinner'

type UserAuthFormProps = {
    className?: string | undefined
    isLoading: boolean
    onSubmit: (values: { email: string }) => void
}

const UserAuthForm: FunctionComponent<UserAuthFormProps> = ({
    className,
    isLoading,
    onSubmit,
}) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        if (typeof email !== 'string') {
            throw new Error('Email is not a string')
        }
        onSubmit({ email })
    }

    return (
        <div className={cn('grid gap-6', className)}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    'GitHub'
                )}
            </Button>
        </div>
    )
}

export default UserAuthForm
