interface BoardBlock {
  type: string
  contents: string
}

interface Title {
  created: Date
  edited: Date
  title: string
}

export interface Board {
  title: Title
  board_blocks: BoardBlock[]
}
