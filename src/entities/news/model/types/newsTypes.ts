export interface INews {
    id: number
    title: string,
    description: string[],
    imgUrl: string,
    date: string
}

export interface INewsState {
    news: INews[]
    error: string | null
    isLoading: boolean
}