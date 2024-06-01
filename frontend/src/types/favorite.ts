import { Character } from './characters'
import { Location } from './locations'

export enum FavoriteType {
  CHARACTERS = 'characters',
  LOCATIONS = 'locations'
}

export type Favorite = {
  id: number
  favoriteType: FavoriteType
}

export type ListFavorites = {
  characters: number[]
  locations: number[]
}

type ResponseFavorite = {
  error: string | null
  payload: {
    favorites: ListFavorites
  }
}

type RickMortyCharacters = {
  error: string | null
  payload: Character[] | null
}

type RickMortyLocations = {
  error: string | null
  payload: Location[] | null
}

export type AddFavorites = ({
  id,
  favoriteType,
  jwt
}: Favorite & { jwt: string }) => Promise<ResponseFavorite>

export type getFavorites = ({
  jwt
}: {
  jwt: string
}) => Promise<ResponseFavorite>

export type GetMultipleCharacters = ({
  ids
}: {
  ids: number[]
}) => Promise<RickMortyCharacters>

export type GetMultipleLocations = ({
  ids
}: {
  ids: number[]
}) => Promise<RickMortyLocations>
