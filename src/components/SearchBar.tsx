
// Importamos tipos y hooks necesarios desde React.
// - KeyboardEvent: para tipar eventos del teclado en TypeScript.
// - useState: para manejar estado interno.
// - useEffect: para ejecutar efectos secundarios (debounce en este caso).
import { KeyboardEvent, useEffect, useState } from "react";


/**
 * Props que recibe el componente CustomSearch.
 *
 * @property placeHolder Texto que aparece como ayuda dentro del input.
 * @property textButton Texto que se mostrará en el botón de búsqueda.
 * @property onQuery Función callback que envía el texto de búsqueda al componente padre.
 */
interface Props {
  placeHolder: string;
  textButton: string;
  onQuery: (query: string) => void;
}


/**
 * Componente de búsqueda reutilizable.
 *
 * Responsabilidades:
 * - Controlar el texto ingresado en el input.
 * - Ejecutar búsqueda automática con debounce.
 * - Permitir búsqueda manual con botón o tecla Enter.
 */
const CustomSearch = ({ placeHolder, textButton, onQuery }: Props) => {

  /**
   * Estado que almacena el texto actual del input.
   */
  const [query, setQuery] = useState('')


  /**
   * useEffect que implementa un debounce.
   *
   * Cada vez que "query" cambia:
   * - Espera 700ms antes de ejecutar la búsqueda.
   * - Si el usuario sigue escribiendo antes de los 700ms,
   *   se limpia el timeout anterior y se reinicia.
   *
   * Esto evita ejecutar búsquedas en cada tecla presionada.
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    // Cleanup: se ejecuta antes de que el efecto vuelva a correr
    // o cuando el componente se desmonta.
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);


  /**
   * Ejecuta la búsqueda manualmente (botón o Enter).
   * Luego limpia el input.
   */
  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  };


  /**
   * Maneja la tecla presionada dentro del input.
   * Si el usuario presiona "Enter", ejecuta la búsqueda.
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      {/* 
        Input controlado:
        - value depende del estado "query".
        - onChange actualiza el estado en cada cambio.
      */}
      <input
        type="text"
        placeholder={placeHolder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Botón que ejecuta búsqueda manual */}
      <button onClick={handleSearch}>{textButton}</button>
    </div>
  );
};

export default CustomSearch;
