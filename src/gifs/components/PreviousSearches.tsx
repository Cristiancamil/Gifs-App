
/**
 * Props que recibe el componente PreviousComponent.
 *
 * @property searches Arreglo con los términos buscados previamente.
 * @property onLabelClick Función callback que se ejecuta cuando
 * el usuario hace clic en una búsqueda previa.
 */
interface Props {
  searches: string[];
  onLabelClick: (term: string) => void;
}


/**
 * Componente que muestra el historial de búsquedas.
 *
 * Responsabilidades:
 * - Renderizar una lista de términos anteriores.
 * - Notificar al componente padre cuando se selecciona uno.
 */
const PreviousComponent = ({ searches, onLabelClick }: Props) => {
  return (
    <div className="previous-searches">

      {/* Título de la sección */}
      <h2>Búsquedas previas</h2>

      {/* Lista de búsquedas anteriores */}
      <ul className="previous-searches-list">
        {
          // Recorremos el arreglo de búsquedas para renderizar cada término
          searches.map(search => (
            /*
              Cada elemento necesita una key única para que React
              pueda identificar correctamente los cambios en la lista.
            */
            <li
              key={search}
              onClick={() => onLabelClick(search)}
            >
              {search}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default PreviousComponent;
