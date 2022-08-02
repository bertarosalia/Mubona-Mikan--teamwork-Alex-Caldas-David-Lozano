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
}

export interface AnimeData {
  mal_id: number;
  images: {
    jpg: {
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

export interface GenresAnime {
  name: string;
}
