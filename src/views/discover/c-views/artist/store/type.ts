export type IartistState = {
  categories: any
  artistList: Array<{
    accountId?: number
    albumSize: number
    alias: Array<string>
    briefDesc: string
    fansCount: number
    followed: boolean
    id: number
    img1v1Id: number
    img1v1Id_str: string
    img1v1Url: string
    musicSize: number
    name: string
    picId: number
    picId_str: string
    picUrl: string
    topicPerson: number
    trans: string
  }>
}
