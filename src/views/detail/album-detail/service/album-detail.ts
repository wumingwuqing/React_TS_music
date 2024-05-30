import request from '@/service'
export function getAlbum(id: number) {
  return request.get({
    url: '/album',
    params: {
      id
    }
  })
}
