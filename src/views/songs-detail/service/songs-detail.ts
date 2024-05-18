import request from '@/service'
export function getSongsDetail(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export default {}
