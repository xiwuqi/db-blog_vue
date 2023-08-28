import request from '@/utils/request'

export function indexTopCount() {
  return request({
    url: '/index/getTopCount',
    method: 'post'
  })
}

export function getWeekArticleCount() {
  return request({
    url: '/index/getWeekNum',
    method: 'post'
  })
}

export function getCategoryCount() {
  return request({
    url: '/index/getCategoryCount',
    method: 'post'
  })
}

export function getOnlineCount() {
  return request({
    url: '/index/getOnline',
    method: 'post'
  })
}

export function getNoticeList() {
  return request({
    url: '/index/getNoticeList',
    method: 'post'
  })
}

export function getWordCloud() {
  return request({
    url: '/index/getWordCloud',
    method: 'post'
  })
}
