export default {
  name: 'post',
  title: 'Journal (Pensamiento)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Artículo',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Enlace (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Contenido del Artículo',
      type: 'array',
      of: [
        { type: 'block' }, // Permite texto con formato (negritas, listas)
        { type: 'image' }  // Permite insertar imágenes dentro del texto
      ]
    }
  ]
}