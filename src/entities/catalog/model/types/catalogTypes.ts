import {ICity} from "../../../cities/model/types/citiesTypes";
export interface IModule {
    id: number
    name: string
}
export interface ICatalogContacts {
    phone: string,
    username: string
    email: string
}

export interface IDistrict extends IModule{}

export interface IRooms  extends IModule {
    value: string
}

export interface IRent  extends IModule {
    type: string
}
export interface IMetro  extends IModule {
    id: number,
    name: string
}

export interface ICatalog {
    id: number,
    imgUrl: string[],

    rentId: number,
    rent: IRent

    citiesId: number,
    cities: ICity,

    address: string,
    metroId: number,
    metro: IMetro

    districtId: number,
    district: IDistrict

    price: string,
    perDay: string,
    roomsId: string,
    rooms: IRooms

    persons: string,
    description: string[],
    contacts: ICatalogContacts,
    square: string,


}

export interface ICatalogState {
    catalog: ICatalog[],
    error: string | null
    isLoading: boolean
}