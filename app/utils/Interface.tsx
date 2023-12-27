import { File, Reference } from "sanity";

export interface Song {
    title: string;
    releaseYear: string;
    audioFile: File,
    genre: Reference,
    _id: string,
    artist: string,
    album: string,
    coverImage: File,
    slug: {current: string}

}

export interface Genre{
    name: string,
    slug: {current: string},
    _id: string
}