import request from '@/service'

export function getArtistList(
  cat: number,
  area: number,
  type: number,
  offset = 0,
  limit = 100,
  initial = ''
) {
  console.log('getArtistList:', cat, offset, initial, limit)
  return request.get({
    url: '/artist/list',
    params: {
      cat,
      area,
      type,
      offset: offset * limit,
      initial,
      limit
    }
  })
}
export function getTopArtist() {
  return request.get({
    url: '/top/artists',
    params: {
      limit: 100
    }
  })
}
