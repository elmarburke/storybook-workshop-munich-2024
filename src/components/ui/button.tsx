import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, FunctionComponent } from 'react'

const variants = {
    default:
        'bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 disabled:bg-slate-900/50 disabled:dark:bg-slate-50/50 disabled:cursor-not-allowed',
    destructive:
        'bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90 disabled:bg-red-500/50 disabled:dark:bg-red-900/50 disabled:cursor-not-allowed',
    outline:
        'border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
    secondary:
        'bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
    ghost: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
    link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
}

const sizeVariants = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9 *:size-6',
}

export type ButtonProps = {
    /**
     * If true, the button will be rendered as a child of a Slot component, use it for composition
     * @see https://www.radix-ui.com/primitives/docs/guides/composition
     */
    asChild?: boolean
    variant?: keyof typeof variants
    size?: keyof typeof sizeVariants
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FunctionComponent<ButtonProps> = ({
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={cn(
                'flex items-center justify-center font-medium transition rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                variants[variant],
                sizeVariants[size],
                className
            )}
            {...props}
        />
    )
}
Button.displayName = 'Button'

export { Button }
