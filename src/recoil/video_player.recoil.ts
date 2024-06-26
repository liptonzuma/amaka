import {atom} from 'recoil';

export const active_video = atom<string>({
  key: 'active_video_playing',
  default: '',
});
