export interface ILyric {
  text: string
  time: number
}
const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  const lyrics: ILyric[] = []
  //拿到一行歌词
  const lines: string[] = lyricString.split('\n')
  //对每句歌词进行解析
  for (const line of lines) {
    //匹配结果
    const result = timeReg.exec(line)
    if (!result) continue
    //获取时间
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 =
      result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const time = time1 + time2 + time3
    //获取文本
    const text = line.replace(timeReg, '').trim()
    lyrics.push({
      text,
      time
    })
  }
  return lyrics
}
