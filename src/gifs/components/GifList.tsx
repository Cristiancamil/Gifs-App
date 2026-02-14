
// Importamos el tipo Gif desde el archivo de datos mock.
// "import type" se usa cuando solo necesitamos el tipo en TypeScript
// y no el valor en tiempo de ejecución.
import type { Gif } from "../../mock-data/gifs.mock";


/**
 * Props que recibe el componente GifList.
 *
 * @property gifs Arreglo de objetos Gif que se mostrarán en pantalla.
 */
interface Props {
  gifs: Gif[];
};


/**
 * Componente encargado de renderizar la lista de GIFs.
 *
 * Responsabilidades:
 * - Recibir una colección de GIFs.
 * - Renderizar cada GIF como una tarjeta individual.
 */
const GifList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {
        // Recorremos el arreglo de GIFs para renderizar cada uno.
        gifs.map((gif) => (
          /*
            Cada elemento necesita una "key" única.
            En este caso usamos gif.id, que es ideal porque
            debe ser único en la colección.
          */
          <div key={gif.id} className="gif-card">

            {/* Imagen del GIF */}
            <img
              src={gif.url}
              alt={gif.title}
            />

            {/* Título del GIF */}
            <h3>{gif.title}</h3>

            {/* Información adicional del GIF */}
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default GifList;
