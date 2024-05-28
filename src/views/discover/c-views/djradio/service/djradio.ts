import request from '@/service'

export function getDjCatelist() {
  return request.get({
    url: '/dj/catelist'
  })
}
export function getDjRecommend(limit = 10) {
  return request.get({
    url: '/program/recommend',
    params: {
      limit
    }
  })
}
export function getDjToplist(limit = 10) {
  return request.get({
    url: '/dj/program/toplist',
    params: {
      limit
    }
  })
}
export function getDjRecommendByType(type: number) {
  return request.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}
export function getDjRadioList(cateId: number, offset = 0, limit = 26) {
  return request.get({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}
