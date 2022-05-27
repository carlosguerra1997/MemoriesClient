import { getPosts } from '../api/Posts'

export const useGetAllPosts = async () => {
  const posts = await getPosts()
  return posts
}
