import { Fragment } from 'react'

const BreakLine = ({ text = '' }) => {
  return (
    <>
      {text.split('\n').map((line, idx) => (
        <Fragment key={`line_${idx}`}>
          {line}
          <br />
        </Fragment>
      ))}
    </>
  )
}
export default BreakLine
