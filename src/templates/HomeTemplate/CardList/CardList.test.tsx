import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardList from '@/templates/HomeTemplate/CardList/CardList'
import { ThemeProvider } from 'styled-components'
import Themes from '@/styles/Themes'

describe('<CardList />', () => {
  const sampleBoards = [
    {
      created: '2022. 12. 12.',
      creator: '김승훈',
      edited: '김승훈',
      title: '테스트 테스트',
      image: 'https://petever.pet/images/default-banner.png',
      uid: '12312321313',
      main_category: '반려동물',
    },
  ]

  test('renders CardList', () => {
    render(
      <ThemeProvider theme={Themes}>
        <CardList boards={sampleBoards} />
      </ThemeProvider>
    )
    expect(screen.getByText(sampleBoards[0].title)).toBeInTheDocument()
  })
})
