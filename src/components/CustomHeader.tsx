
/**
 * Props que recibe el componente CustomHeader.
 *
 * @property title Texto principal que se mostrará como encabezado.
 * @property description Texto opcional que se mostrará debajo del título.
 */
interface Props {
  title: string;          // Título principal (obligatorio)
  description?: string;   // Descripción secundaria (opcional)
}


/**
 * Componente reutilizable para mostrar un encabezado con título
 * y una descripción opcional.
 *
 * @param props Props del componente.
 * @returns {JSX.Element} Elemento visual del encabezado.
 */
const CustomHeader = ({ title, description }: Props) => {
  return (
    // Se utiliza <header> por semántica HTML (mejor accesibilidad y estructura)
    <header className="content-center">
      {/* Título principal */}
      <h1>{title}</h1>

      {/* 
        Render condicional:
        Solo muestra el párrafo si "description" existe.
        Si es undefined, React no renderiza nada.
      */}
      {description && <p>{description}</p>}
    </header>
  );
};

export default CustomHeader;
