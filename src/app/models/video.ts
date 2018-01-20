export interface Video {
  id: number;
  title: string;
  user_id: number;
  description: string;
  duration: string;
  source: string;
  created_at: string;
  updated_at: string;
  height: number;
  width: number;
  thumbnail: string;

  provider: string;
  gif: string;
  namespace: string;
  poster: string;

}
