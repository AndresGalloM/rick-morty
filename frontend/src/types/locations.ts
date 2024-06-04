export interface Info {
  count: number
  pages: number
  next: string
  prev: unknown
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export interface Locations {
  info: Info
  results: Location[]
}

export type GetLocations = ({
  pageParam
}: {
  pageParam: number
}) => Promise<Locations>
