'use client';

import { useState } from 'react';
import { useStore } from '@/store/zustand';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { InputField } from '@/components/InputField';

interface GoalFormProps {
  onGoalCreate: (goal: Goal) => void;
}

interface Goal {
  id?: number;
  name: string;
  target: string;
  deadline: string;
  userId: number;
  progress?: number;
}

const GoalForm: React.FC<GoalFormProps> = ({ onGoalCreate }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const store = useStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newGoal: Goal = {
      name,
      target,
      deadline,
      userId: store.user.id,
    };

    try {
      onGoalCreate(newGoal);
      toast.success('Goal added successfully!');
      setName('');
      setTarget('');
      setDeadline('');
      router.refresh();
    } catch (error) {
      console.error('Error creating goal:', error);
      toast.error('Failed to create goal. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800">Add New Goal</h2>
      <InputField
        label="Goal Name"
        value={name}
        onChange={(e) => setName(e)}
      />
      <InputField
        label="Target"
        value={target}
        onChange={(e) => setTarget(e)}
      />
      <InputField
        label="Deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;