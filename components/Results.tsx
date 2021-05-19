import FlipMove from 'react-flip-move'
import Thumbnail from './Thumbnail'

const Results = ({ results }) => {
  return (
    <FlipMove className="flex-wrap items-center justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
