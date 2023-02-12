import { render, screen } from '@testing-library/react'
import Card from '@/components/molecules/Card/Card'
import { ThemeProvider } from 'styled-components'
import Themes from '@/styles/Themes'

describe('Card', () => {
  test('renders Card', () => {
    const board = {
      created: '2022. 12. 12.',
      creator: '김승훈',
      edited: '김승훈',
      title: '테스트 테스트',
      image: 'https://petever.pet/images/default-banner.png',
      uid: '12312321313',
      main_category: '반려동물',
    }

    render(
      <ThemeProvider theme={Themes}>
        <Card board={board} />
      </ThemeProvider>
    )

    expect(screen.getByText(board.title)).toBeInTheDocument()
    expect(screen.getByText(board.main_category)).toBeInTheDocument()
    expect(screen.getByText(board.created)).toBeInTheDocument()
  })
})
