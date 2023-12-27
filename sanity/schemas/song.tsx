import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { Rule } from "sanity";

export const song = {
    name: 'song',
    title: 'Song',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options:{
          source: "title"
        }
      },
      {
        name: 'artist',
        title: 'Artist',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'album',
        title: 'Album',
        type: 'string',
      },
      {
        name: 'genre',
        title: 'Genre',
        type: 'reference',
        to: [{ type: "genre"}]
      },
      {
        name: 'releaseYear',
        title: 'Release Year',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
          crop: true,
          
        },
      },
      {
        name: 'audioFile',
        title: 'Audio File',
        type: 'file',
        validation:(Rule: Rule)=> Rule.required(),
      },
      
    ],
  };

  // validation: (Rule: Rule) => Rule.max(500).error("max 500")
  