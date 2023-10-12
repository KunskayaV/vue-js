import axios from 'axios'
import { MOVIES_URL } from './constants'
import type { TMovie } from '@/types'

export async function getMovies(): Promise<TMovie[]> {
  const response = await axios.get(MOVIES_URL)

  return response.data
}
