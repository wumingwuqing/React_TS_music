import request from '@/service'
export function getArtists(id: number) {
  return request.get({
    url: '/artists',
    params: {
      id
    }
  })
}
export function getArtistAlbum(id: number, offset: number, limit: number) {
  return request.get({
    url: '/artist/album',
    params: {
      id,
      limit,
      offset: offset * limit
    }
  })
}
export function getArtistMV(id: number, offset: number, limit: number) {
  return request.get({
    url: '/artist/mv',
    params: {
      id,
      limit,
      offset: offset * limit
    }
  })
}

// 502bad gateway
export function getSimiarArtist(id: number, limit: number) {
  return request.get({
    url: '/simi/artist',
    params: {
      id,
      limit
    }
  })
}

export default {}
