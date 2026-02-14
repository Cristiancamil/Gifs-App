// Hook de React para manejar estado dentro del componente.
import { useState } from "react"

// Componentes reutilizables de la aplicación.
import CustomHeader from "./components/CustomHeader"
import SearchBar from "./components/SearchBar"
import GifList from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"

// Datos simulados (mock) para mostrar GIFs mientras no hay conexión real a una API.
import { mockGifs } from "./mock-data/gifs.mock"

/**
 * Componente principal de la aplicación de búsqueda de GIFs.
 *
 * Responsabilidades:
 * - Mantener el historial de búsquedas.
 * - Manejar eventos de búsqueda.
 * - Renderizar la estructura principal de la aplicación.
 *
 * @returns {JSX.Element} Vista principal de la aplicación.
 */

export const GifsApp = () => {

  /** 
   * Estado que almacena los términos buscados previamente.
   * Se inicializa con "Dragon Ball" como búsqueda por defecto.
   */
  const [previousTerms, setPreviousTerms] = useState(['Dragon Ball'])

  /**
   * Se ejecuta cuando el usuario hace clic en una búsqueda previa.
   * @param term Término seleccionado del historial.
   */
  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  /**
   * Se ejecuta cuando el usuario realiza una nueva búsqueda.
   * @param query Texto ingresado en la barra de búsqueda.
   */
  const handleSearch = (query: string) => {
    console.log({ query });
  }

  return (
    <>
      {/* Header: Encabezado principal de la aplicación */}
      <CustomHeader
        title="Buscador de gif"
        description="Descubre y comparte el Gif"
      />

      {/* Search: Barra de búsqueda que envía el texto al ejecutar onQuery */}
      <SearchBar
        placeHolder="Buscar"
        textButton="Buscar"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas: Listado de búsquedas realizadas anteriormente */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs: Listado de GIFs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
