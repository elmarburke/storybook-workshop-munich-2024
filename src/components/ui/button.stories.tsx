import { UserIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './button'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Button',
        onClick: fn(),
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        variant: 'default',
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    },
}

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link',
    },
}

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large',
    },
}

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small',
    },
}

export const Icon: Story = {
    args: {
        size: 'icon',
        children: <UserIcon />,
    },
}
