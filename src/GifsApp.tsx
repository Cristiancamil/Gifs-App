import { useState } from "react"
import CustomHeader from "./components/CustomHeader"
import SearchBar from "./components/SearchBar"
import GifList from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"



/**
* COMPONENTE PRINCIPAL GifsApp
* 
 */
export const GifsApp = () => {

  const [previousTerms, setPriviousTerms] = useState(['Dragon Ball'])

  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  const handleSearch = (query: string) => {
    console.log({ query });
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de gif" description="Descubre y comparte el Gif" />

      {/* Search */}
      <SearchBar
        placeHolder="Buscar"
        textButton="Buscar"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
