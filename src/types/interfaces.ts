export interface AnimeInfo {
  pagination: {
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
    };
  };
  data: AnimeData[];
  animeLocalData: AnimeLocalData[];
}

export interface AnimeData {
  mal_id: number;
  images: {
    webp: {
      image_url: string;
    };
  };
  title: string;
  type: string;
  episodes: number;
  duration: string;
  rating: string;
  score: number;
  synopsis: string;
  year: number;
  genres: GenresAnime[];
}
export interface AnimeLocalData extends AnimeData {
  id: number;
}

export interface GenresAnime {
  name: string;
}

export interface UIState {
  isLoading: boolean;
  isModalShowing: boolean;
  message: string;
  type: boolean;
}
