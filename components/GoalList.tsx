'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useStore } from '@/store/zustand';
import { getGoals } from '@/utils/helpers';
import { GoalCard } from '@/components/GoalCard';

export default function GoalList() {
  const { data: session } = useSession();
  const [goals, setGoals] = useState([]);
  const store = useStore();

  useEffect(() => {
    if (session) {
      getGoals(session.user.id).then((goals) => {
        setGoals(goals);
        store.setGoals(goals);
      });
    }
  }, [session, store]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
}