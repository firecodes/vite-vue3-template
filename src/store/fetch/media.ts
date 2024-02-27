import { defineStore } from 'pinia'
import { useFetchStore } from './_fetch'

import { ResultEnum } from '@/enums/httpEnum';
import * as taskMapApi from '@/api/task/taskMap';

export enum TunnelModule {
  WebFont = 'webfont',
  MyGoogleMap = 'my_google_map',
  TwitterAggregate = 'twitter_aggregate',
  YouTubePlaylist = 'youtube_playlist',
  YouTubeVideoList = 'youtube_video_list',
  InstagramProfile = 'instagram_profile',
  InstagramMedias = 'instagram_medias',
  InstagramMediaChildren = 'instagram_media_children',
  InstagramCalendar = 'instagram_calendar',
  BingWallpaper = 'bing_wallpaper',
  GitHubSponsors = 'github_sponsors',
  GitHubContributions = 'github_contributions',
  NetEaseMusic = 'netease_music',
  DoubanMovies = 'douban_movies',
  OpenSourceGitHubStatistic = 'open_source_github_statistic',
  OpenSourceNPMStatistic = 'open_source_npm_statistic'
}

// import type { InstagramMediaListResponse, InstagramProfile } from '/@/server/getters/instagram'
// import type { TwitterAggregate } from '/@/server/getters/twitter'
// import { TunnelModule } from '/@/constants/tunnel'
// import tunnel from '/@/services/tunnel'

// // Douban movies
// export const useDoubanMoviesStore = defineStore('doubanMovies', () => {
//   return useFetchStore({
//     once: true,
//     data: null,
//     fetcher: () => tunnel.dispatch(TunnelModule.DoubanMovies)
//   })
// })

// Instagram timeline
export const useTaskMapStore = defineStore('taskMap', () => {
  return useFetchStore<taskMapApi.TaskDataResponse | null>({
    data: null,
    fetcher: () => {
      return taskMapApi.getMediasList(TunnelModule.InstagramMedias)
    }
  })
})

// Instagram profile
// export const useInstagramProfileStore = defineStore('instagramProfile', () => {
//   return useFetchStore<InstagramProfile | null>({
//     data: null,
//     fetcher: () => tunnel.dispatch<InstagramProfile>(TunnelModule.InstagramProfile)
//   })
// })

// YouTube playlist
// export const useYouTubePlayListStore = defineStore('youtubePlaylist', () => {
//   return useFetchStore<Array<any>>({
//     data: [],
//     async fetcher() {
//       const response = await tunnel.dispatch<Array<any>>(TunnelModule.YouTubePlaylist)
//       response.sort((a, b) => a.snippet.position - b.snippet.position)
//       return response
//     }
//   })
// })

// // Twitter userinfo
// export const useTwitterStore = defineStore('twitterAggregate', () => {
//   return useFetchStore<TwitterAggregate | null>({
//     data: null,
//     fetcher: () => {
//       return tunnel.dispatch<TwitterAggregate>(TunnelModule.TwitterAggregate)
//     }
//   })
// })

// // My Google map
// export const useMyGoogleMapStore = defineStore('myGoogleMap', () => {
//   return useFetchStore({
//     once: true,
//     data: null,
//     fetcher: () => tunnel.dispatch(TunnelModule.MyGoogleMap)
//   })
// })
