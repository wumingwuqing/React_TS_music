export type hotAlbumType = Array<{
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: Array<string>
    trans: string
    musicSize: number
    topicPerson: number
    picId_str: string
    transNames?: Array<string>
    img1v1Id_str: string
  }
  songs: any
  alias: Array<any>
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Array<{
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: Array<any>
    trans: string
    musicSize: number
    topicPerson: number
    img1v1Id_str: string
  }>
  paid: boolean
  onSale: boolean
  picId_str: string
}>
export type allAlbumType = Array<{
  songs: Array<any>
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  commentThreadId: string
  picUrl: string
  artists: Array<{
    img1v1Id: number
    topicPerson: number
    img1v1Url: string
    picUrl: string
    picId: number
    musicSize: number
    albumSize: number
    briefDesc: string
    followed: boolean
    trans: string
    alias: Array<any>
    name: string
    id: number
    img1v1Id_str: string
  }>
  copyrightId: number
  picId: number
  artist: {
    img1v1Id: number
    topicPerson: number
    img1v1Url: string
    picUrl: string
    picId: number
    musicSize: number
    albumSize: number
    briefDesc: string
    followed: boolean
    trans: string
    alias: Array<string>
    name: string
    id: number
    picId_str?: string
    img1v1Id_str: string
    transNames?: Array<string>
  }
  company: string
  briefDesc: string
  publishTime: number
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType: string
  alias: Array<any>
  description: string
  tags: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}>

type IAblumType = {
  hotAlbum: hotAlbumType
  allAlbum: allAlbumType
}

export default IAblumType
