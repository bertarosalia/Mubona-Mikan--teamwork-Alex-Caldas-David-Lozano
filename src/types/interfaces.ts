export interface animeInfo {
  pagination: {
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
    };
  };
  data: animeData[];
}

export interface animeData {
  mal_id: number;
  image: {
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
  genres: genresAnime[];
}

export interface genresAnime {
  name: string;
}
