import hyRequest from '@/service'

export function getPlayList(id: number) {
  return hyRequest.get({
    url: '/simi/playlist',
    params: {
      id
    }
  })
}
