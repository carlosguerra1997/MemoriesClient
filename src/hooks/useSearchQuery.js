import { useQuery } from './useQuery'

export const useSearchQuery = () => {
  const query = useQuery()
  const searchQuery = query.get('searchQuery')
  return searchQuery
}
