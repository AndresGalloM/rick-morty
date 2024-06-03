import {
  AddFavorites,
  DeleteFavorites,
  getFavorites,
  GetMultipleCharacters,
  GetMultipleLocations
} from '../types/favorite'

const URL_BACK = import.meta.env.VITE_API_BACKEND
const URL_API = import.meta.env.VITE_API_RICK_MORTY

export const getFavoritesService: getFavorites = async ({ jwt }) => {
  try {
    const response = await fetch(`${URL_BACK}/favorites`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })

    return response.json()
  } catch (e) {
    return {
      error: 'Unexpected error, try again later',
      payload: null
    }
  }
}

export const addFavoriteService: AddFavorites = async ({
  id,
  favoriteType,
  jwt
}) => {
  try {
    const response = await fetch(`${URL_BACK}/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        id,
        favoriteType
      })
    })

    return response.json()
  } catch (e) {
    return {
      error: 'Unexpected error, try again later',
      payload: null
    }
  }
}

export const deleteFavoriteService: DeleteFavorites = async ({
  id,
  favoriteType,
  jwt
}) => {
  try {
    const response = await fetch(`${URL_BACK}/favorites`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        id,
        favoriteType
      })
    })

    return response.json()
  } catch (e) {
    return {
      error: 'Unexpected error, try again later',
      payload: null
    }
  }
}

export const getMultipleCharacters: GetMultipleCharacters = async ({ ids }) => {
  try {
    const rawResponse = await fetch(`${URL_API}/character/${ids}`)
    const response = await rawResponse.json()

    if (!rawResponse.ok) {
      return {
        error: response.error,
        payload: null
      }
    }

    return {
      error: null,
      payload: response
    }
  } catch (e) {
    return {
      error: 'Unexpected error, try again later',
      payload: null
    }
  }
}

export const getMultipleLocations: GetMultipleLocations = async ({
  ids
}: {
  ids: number[]
}) => {
  try {
    const rawResponse = await fetch(`${URL_API}/location/${ids}`)
    const response = await rawResponse.json()

    if (!rawResponse.ok) {
      return {
        error: response.error,
        payload: null
      }
    }

    return {
      error: null,
      payload: response
    }
  } catch (e) {
    return {
      error: 'Unexpected error, try again later',
      payload: null
    }
  }
}
