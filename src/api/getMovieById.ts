import type { TMovie } from '@/types'
import apiClient from './apiClient'

export async function getMovieById(id: number): Promise<TMovie> {
  const response = await apiClient.get(`/movies/${id}`)

  return response.data
}
