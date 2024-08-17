'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useStore } from '@/store/zustand'
import { getPosts, createPost } from '@/utils/helpers'
import { PostCard } from '@/components/PostCard'
import { PostForm } from '@/components/PostForm'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function SocialFeed() {
  const router = useRouter()
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])
  const store = useStore()

  useEffect(() => {
    if (session) {
      getPosts(session.user.id).then((posts) => {
        setPosts(posts)
        store.setPosts(posts)
      })
    }
  }, [session, store])

  const handlePostCreate = async (newPost) => {
    try {
      const response = await createPost(session.user.id, newPost)

      if (response.ok) {
        const data = await response.json()
        setPosts([...posts, data])
        store.addPost(data)
        toast.success('Post created successfully!')
      } else {
        toast.error('Failed to create post. Please try again.')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    }
  }

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Fitness Tracker</h1>
        <p className="mt-4 text-gray-600">Please sign in to access the social feed.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={() => router.push('/api/auth/signin')}
        >
          Sign In
        </button>
      </main>
    )
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-y-auto">
        <Header />
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="text-4xl font-bold text-gray-800">Social Feed</h1>
          <p className="mt-4 text-gray-600">
            Connect with friends, share achievements, and stay motivated!
          </p>
          <PostForm onPostCreate={handlePostCreate} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}