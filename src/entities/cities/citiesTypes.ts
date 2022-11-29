export interface Icity {
    name: string,
    nameVal: string
}

export interface IcitiesState {
    cities: Icity | any
    error: string | null
    isLoading: boolean
}