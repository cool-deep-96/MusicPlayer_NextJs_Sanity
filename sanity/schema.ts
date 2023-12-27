import { type SchemaTypeDefinition } from 'sanity'
import { song } from './schemas/song'
import { genre } from './schemas/genre'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [song, genre],
}
