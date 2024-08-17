'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useStore } from '@/store/zustand';
import { getGoals } from '@/utils/helpers';
import { GoalCard } from '@/components/GoalCard';
import { GoalForm } from '@/components/GoalForm';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { InputField } from '@/components/InputField';

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession();
  const [goals, setGoals] = useState([]);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });
  const store = useStore();

  useEffect(() => {
    if (session) {
      // Fetch goals and profile data for the logged-in user
      getGoals(session.user.id).then((goals) => {
        setGoals(goals);
        store.setGoals(goals);
      });

      // Fetch profile data
      fetch(`/api/profile/${session.user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProfileData(data);
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
        });
    }
  }, [session, store]);

  const handleGoalCreate = (newGoal) => {
    store.addGoal(newGoal);
    toast.success('Goal added successfully!');
    router.refresh();
  };

  const handleProfileUpdate = async (updatedData) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        toast.success('Profile updated successfully!');
        setProfileData(updatedData);
      } else {
        toast.error('Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Fitness Tracker</h1>
        <p className="mt-4 text-gray-600">Please sign in to access your profile.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={() => router.push('/api/auth/signin')}
        >
          Sign In
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-gray-800">Your Profile</h1>
      <p className="mt-4 text-gray-600">
        View and manage your personal information and goals.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
        <form className="mt-4">
          <InputField
            label="Name"
            value={profileData.name}
            onChange={(value) =>
              setProfileData({ ...profileData, name: value })
            }
          />
          <InputField
            label="Email"
            type="email"
            value={profileData.email}
            onChange={(value) =>
              setProfileData({ ...profileData, email: value })
            }
            disabled
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() =>
              handleProfileUpdate({
                ...profileData,
                id: session.user.id,
              })
            }
          >
            Update Profile
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Your Goals</h2>
        <p className="mt-4 text-gray-600">
          Set and track your fitness goals to stay motivated.
        </p>
        <GoalForm onGoalCreate={handleGoalCreate} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </main>
  );
}