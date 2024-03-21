import type { Meta, StoryObj } from '@storybook/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import ErrorPage from './error-page'

const meta = {
    title: 'Pages/ErrorPage',
    component: ErrorPage,
    args: {},
    decorators: [
        (Story) => {
            const router = createMemoryRouter(
                [
                    {
                        path: '/',
                        errorElement: <Story />,
                    },
                ],
                {
                    initialEntries: ['/not-found'],
                }
            )

            return <RouterProvider router={router} />
        },
    ],
} satisfies Meta<typeof ErrorPage>

export default meta

type Story = StoryObj<typeof ErrorPage>

export const Default: Story = {
    args: {
        variant: 'default',
    },
}
