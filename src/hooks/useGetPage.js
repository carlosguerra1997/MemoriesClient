import { useQuery } from './useQuery'

export const useGetPage = () => {
  const query = useQuery()
  const page = query.get('page') || 1
  return query.get('page') || 1
}
