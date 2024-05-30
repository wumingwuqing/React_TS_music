import request from '@/service'

export function getHotAlbum() {
  return request.get({
    url: '/album/newest'
  })
}
export function getAllAlbum(
  offest: number,
  area: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP',
  limit = 35
) {
  return request.get({
    url: '/album/new',
    params: {
      limit,
      offest,
      area
    }
  })
}
