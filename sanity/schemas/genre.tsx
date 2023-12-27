import { defineType } from "sanity";

export const genre = defineType({
    name: "genre",
    title: "Genre",
    type: "document",

    fields: [

        {
            name: "genreType",
            title: "Ganre Type",
            type: "string"
        },
        {
            name: 'slug',
            title: "Slug",
            type: "slug",
            options:{
                source: "genreType"
            }
        }
    ]
})