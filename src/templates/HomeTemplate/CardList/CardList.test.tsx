import { render, screen } from '@testing-library/react'
import CardList from '@/templates/HomeTemplate/CardList/CardList'
import { ThemeProvider } from 'styled-components'
import Themes from '@/styles/Themes'

describe('<CardList />', () => {
  const sampleFirstBoard = {
    created: '2022. 12. 12.',
    creator: '김승훈',
    edited: '김승훈',
    title: '테스트1',
    image: 'https://petever.pet/images/default-banner.png',
    uid: '1',
    main_category: '반려동물',
  }

  const sampleBoards = [
    {
      created: '2022. 12. 12.',
      creator: '김승훈',
      edited: '김승훈',
      title: '테스트2',
      image: 'https://petever.pet/images/default-banner.png',
      uid: '2',
      main_category: '반려동물',
    },
    {
      created: '2022. 12. 12.',
      creator: '김승훈',
      edited: '김승훈',
      title: '테스트3',
      image: 'https://petever.pet/images/default-banner.png',
      uid: '3',
      main_category: '반려동물',
    },
  ]

  test('renders CardList', () => {
    render(
      <ThemeProvider theme={Themes}>
        <CardList firstBoard={sampleFirstBoard} boards={sampleBoards} />
      </ThemeProvider>
    )
    
    expect(screen.getByText(sampleFirstBoard.title)).toBeInTheDocument()
  })
})
