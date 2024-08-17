'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useStore } from '@/store/zustand'
import { getGoals } from '@/utils/helpers'
import { GoalCard } from '@/components/GoalCard'
import { GoalForm } from '@/components/GoalForm'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const { data: session } = useSession()
  const [goals, setGoals] = useState([])
  const store = useStore()

  useEffect(() => {
    if (session) {
      getGoals(session.user.id).then((goals) => {
        setGoals(goals)
        store.setGoals(goals)
      })
    }
  }, [session, store])

  const handleGoalCreate = (newGoal) => {
    store.addGoal(newGoal)
    toast.success('Goal added successfully!')
    router.refresh()
  }

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Fitness Tracker</h1>
        <p className="mt-4 text-gray-600">Please sign in to access your goals.</p>
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-gray-800">Your Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Track your fitness goals and stay motivated!
      </p>
      <GoalForm onGoalCreate={handleGoalCreate} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </main>
  )
}