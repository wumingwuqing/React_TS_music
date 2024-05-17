import request from '@/service'

export function getCatlist() {
  return request.get({
    url: '/playlist/catlist'
  })
}
type IParams = {
  limit: number
  offset: number
  cat?: string
}
export function getPlaylist({ cat = '全部', limit = 35, offset = 0 }: IParams) {
  return request.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}
