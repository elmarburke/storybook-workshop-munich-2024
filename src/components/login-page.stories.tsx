import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'
import { MemoryRouter } from 'react-router-dom'
import LoginPage from './login-page'

const meta = {
    title: 'Pages/LoginPage',
    component: LoginPage,
    args: {
        isLoading: false,
        onLogin: fn(),
    },
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/login']}>
                <Story />
            </MemoryRouter>
        ),
    ],
} satisfies Meta<typeof LoginPage>

export default meta

type Story = StoryObj<typeof LoginPage>

export const Default: Story = {
    args: {},
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}

export const SignInWithEmail: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const emailInput = canvas.getByLabelText('Email')
        await userEvent.type(emailInput, 'me@email.com')

        const submitButton = canvas.getByRole('button', {
            name: 'Sign In with Email',
        })
        await userEvent.click(submitButton)
    },
}
