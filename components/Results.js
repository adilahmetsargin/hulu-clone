import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

function Results({results, query, setQuery}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 
        xl:grid-cols-3 3xl:flex flex-wrap justify-center">
             {results.filter((res)=>res.title?.toLowerCase().includes(query))
             .map(result =>(
                 <Thumbnail key={result.id} result={result} />
             ))}        
        </FlipMove>
    )
}

export default Results
