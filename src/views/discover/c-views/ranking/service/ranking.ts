import request from '@/service'

export function getTopList() {
  return request.get({
    url: '/toplist'
  })
}
export function getTopListDetail(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
