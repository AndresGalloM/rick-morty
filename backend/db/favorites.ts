export enum FavoriteType {
  CHARACTERS = 'characters',
  LOCATIONS = 'locations'
}

export type Favorite = {
  nameUser: string
  favorites: {
    [key in FavoriteType]: number[]
  }
}

export const favorites: Favorite[] = [
  {
    nameUser: 'andres',
    favorites: {
      characters: [1, 2, 3],
      locations: [1, 2, 3]
    }
  }
]
