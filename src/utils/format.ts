//数字处理
export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}
//获取合适大小的图片
export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}
//格式化时间
export function formatTime(time: number) {
  const timeDconds = time / 1000
  const minue = Math.floor(timeDconds / 60)
  const second = Math.floor(timeDconds % 60)
  const formatMinue = String(minue).padStart(2, '0') // minue > 9 ? minue : `0${minue}`
  const formatSecond = second > 9 ? second : `0${second}`
  return `${formatMinue}:${formatSecond}`
}
