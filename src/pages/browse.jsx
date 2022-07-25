import useContent from "../hooks/useContent";
import { selectionFilter } from "../utils";


export default function Browse() {

  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });
  console.log(slides);
  
  return (
    <div>Browse</div>
  )
}
