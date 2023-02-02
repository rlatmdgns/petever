import { fireEvent, render, screen } from '@testing-library/react'
import MainHeader from '@/components/layouts/MainHeader/index'
import Themes from '@/styles/Themes'
import { ThemeProvider } from 'styled-components'

describe('MainHeader', () => {
  test('renders MainHeader', () => {
    render(
      <ThemeProvider theme={Themes}>
        <MainHeader />
      </ThemeProvider>
    )
    const name = '펫에버'
    const img = screen.getByRole('img', { name })

    expect((img as HTMLInputElement).alt).toBe(name)
  })

  test('Before scrolling MainHeader', () => {
    render(
      <ThemeProvider theme={Themes}>
        <MainHeader />
      </ThemeProvider>
    )

    expect(window.scrollY).toBe(0)
  })
  test('After scrolling MainHeader', () => {
    render(
      <ThemeProvider theme={Themes}>
        <MainHeader />
      </ThemeProvider>
    )

    fireEvent.scroll(window, { target: { scrollY: 300 } })

    expect(window.scrollY).toBe(300)
  })
})
