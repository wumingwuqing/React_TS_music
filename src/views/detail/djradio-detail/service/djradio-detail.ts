import request from '@/service'

export function getRadioDetail(rid: number) {
  return request.get({
    url: '/dj/detail',
    params: {
      rid
    }
  })
}
export function getRadioProgram(
  rid: number,
  offset: number,
  limit = 100,
  asc = true
) {
  return request.get({
    url: '/dj/program',
    params: {
      rid,
      limit,
      offset,
      asc
    }
  })
}
