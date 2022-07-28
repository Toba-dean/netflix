import useContent from "../hooks/useContent";
import { selectionFilter } from "../utils";
import { BrowseContainer } from "../container/BrowseContainer";


export default function Browse() {

  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });
  
  return (
    <BrowseContainer slides={slides} />
  )
}
