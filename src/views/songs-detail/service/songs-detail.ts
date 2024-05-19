import request from '@/service'
export function getSongsDetail(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getRelatedSongs(id: number) {
  return request.get({
    url: '/related/playlist',
    params: {
      id
    }
  })
}

export default {}
