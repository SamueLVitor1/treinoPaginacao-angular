export interface IVideos {
  name: string;
  id: number;
  numberVideos: number;
}

export interface IResponseApi {
  first: number
  prev: any
  next: number
  last: number
  pages: number
  items: number
  data: IVideos[]
}