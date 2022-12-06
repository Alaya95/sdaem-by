export interface ICity {
    id: number
    name: string,
    value: string
}

export interface ICitiesState {
    city: ICity[]
    isLoading: boolean
    error: string | null
}