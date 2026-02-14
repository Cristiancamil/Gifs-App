
/**
 * Representa la estructura de un objeto GIF dentro de la aplicación.
 *
 * Este tipo define cómo deben recibirse y manejarse los datos
 * relacionados con cada GIF.
 */
export interface Gif {
  id: string;      // Identificador único del GIF
  title: string;   // Título descriptivo del GIF
  url: string;     // URL donde se encuentra alojado el GIF
  width: number;   // Ancho en píxeles
  height: number;  // Alto en píxeles
}


/**
 * Datos simulados (mock) utilizados para pruebas locales.
 *
 * Se utilizan mientras no exista conexión real a una API externa.
 * Permiten desarrollar y probar la interfaz sin depender del backend.
 */
export const mockGifs: Gif[] = [
  {
    id: '1',
    title: "Superman's Cake",
    url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVxbHY0dncxMHJlZXRvOTY3MXl5cHp0dWs4aG5iY3d0ZWhlcDM5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0GtVKtagi2GvWuY3vm/giphy.gif',
    width: 300,
    height: 300,
  },
  {
    id: '2',
    title: 'Funny Cat',
    url: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
    width: 400,
    height: 250,
  },
  {
    id: '3',
    title: 'Happy BDay!',
    url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG40N2cyZm1iZGM2aWlhbHF1bnZmdzkxZ29idTY3ZzZkbnowNDg4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xatKdEypHxBjzabUPV/giphy.gif',
    width: 280,
    height: 350,
  },
  {
    id: '4',
    title: 'Thumbs Up',
    url: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
    width: 300,
    height: 200,
  },
  {
    id: '5',
    title: 'Elmo is the best',
    url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5zMmVsNDFzam56bmR6azl0bmFvbHQxdDczeDNzZTdxczhtejNrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUQ4rhUZJYiQsas6WD/giphy.gif',
    width: 300,
    height: 400,
  },
  {
    id: '6',
    title: 'Messi is the best',
    url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThyZXBwbHFtdHNpYnh4ZnN0aGswcWJydXNwdnpjaXV0eXNlYXp1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8BSJinJ8of9L0unCqW/giphy.gif',
    width: 350,
    height: 280,
  },
];