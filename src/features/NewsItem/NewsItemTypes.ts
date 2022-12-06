export interface NewsItemsData {
    id: number
    imgUrl: string
    title: string
    description: string[]
    date: string
}

export interface NewsItemTypes {
    data: NewsItemsData
    className?: string
}
