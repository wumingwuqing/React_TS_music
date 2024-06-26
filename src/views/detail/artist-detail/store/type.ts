type artistsSongType = Array<{
  rtUrls: Array<any>
  ar: Array<{
    id: number
    name: string
    alia?: Array<string>
    tns?: Array<string>
  }>
  al: {
    id: number
    name: string
    picUrl: string
    pic_str: string
    pic: number
    alia?: Array<string>
  }
  st: number
  noCopyrightRcmd: any
  songJumpInfo: any
  djId: number
  no: number
  fee: number
  mv: number
  t: number
  v: number
  cd: string
  pop: number
  rt?: string
  mst: number
  cp: number
  crbt: any
  cf: string
  dt: number
  h: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  sq: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  hr?: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  l: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  rtUrl: any
  ftype: number
  rtype: number
  rurl: any
  pst: number
  alia: Array<string>
  a: any
  m: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  name: string
  id: number
  privilege: {
    id: number
    fee: number
    payed: number
    st: number
    pl: number
    dl: number
    sp: number
    cp: number
    subp: number
    cs: boolean
    maxbr: number
    fl: number
    toast: boolean
    flag: number
    preSell: boolean
    playMaxbr: number
    downloadMaxbr: number
    maxBrLevel: string
    playMaxBrLevel: string
    downloadMaxBrLevel: string
    plLevel: string
    dlLevel: string
    flLevel: string
    rscl: any
    freeTrialPrivilege: {
      resConsumable: boolean
      userConsumable: boolean
      listenType: number
      cannotListenReason: number
      playReason: any
    }
    rightSource: number
    chargeInfoList: Array<{
      rate: number
      chargeUrl: any
      chargeMessage: any
      chargeType: number
    }>
  }
}>
export type IArtistDescType = {
  img1v1Id: number
  topicPerson: number
  followed: boolean
  picId: number
  musicSize: number
  albumSize: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  trans: string
  alias: Array<string>
  name: string
  id: number
  publishTime: number
  accountId: number
  picId_str: string
  img1v1Id_str: string
  mvSize: number
}
export type IArtistAblumType = Array<{
  songs: Array<any>
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  artists: Array<{
    img1v1Id: number
    topicPerson: number
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    followed: boolean
    img1v1Url: string
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
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    followed: boolean
    img1v1Url: string
    trans: string
    alias: Array<string>
    name: string
    id: number
    picId_str: string
    img1v1Id_str: string
  }
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType: string
  alias: Array<string>
  description: string
  tags: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  isSub: boolean
}>
export type IArtistMVType = Array<{
  id: number
  name: string
  status: number
  imgurl: string
  artistName: string
  artist: {
    img1v1Id: number
    topicPerson: number
    alias: Array<any>
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    trans: string
    musicSize: number
    picId: number
    name: string
    id: number
    img1v1Id_str: string
  }
  imgurl16v9: string
  duration: number
  playCount: number
  publishTime: string
  subed: boolean
}>
export type ISimiarArtistType = any
export type IArtistDetailState = {
  artistsSong: artistsSongType
  artistDesc: IArtistDescType
  artistAblum: IArtistAblumType
  artistMV: IArtistMVType
  simiarArtist: ISimiarArtistType
}
