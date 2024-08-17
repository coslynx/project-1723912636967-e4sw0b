'use client';

import { useState } from 'react';
import { useStore } from '@/store/zustand';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface GoalCardProps {
  goal: Goal;
}

interface Goal {
  id?: number;
  name: string;
  target: string;
  deadline: string;
  userId: number;
  progress?: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  const router = useRouter();
  const store = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState({
    name: goal.name,
    target: goal.target,
    deadline: goal.deadline,
  });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedGoal({
      name: goal.name,
      target: goal.target,
      deadline: goal.deadline,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      await store.updateGoal(goal.id, editedGoal);
      setIsEditing(false);
      toast.success('Goal updated successfully!');
    } catch (error) {
      console.error('Error updating goal:', error);
      toast.error('Failed to update goal. Please try again.');
    }
  };

  const handleDelete = async () => {
    try {
      await store.deleteGoal(goal.id);
      toast.success('Goal deleted successfully!');
      router.refresh();
    } catch (error) {
      console.error('Error deleting goal:', error);
      toast.error('Failed to delete goal. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-800">
          {isEditing ? (
            <input
              type="text"
              value={editedGoal.name}
              onChange={(e) =>
                setEditedGoal({ ...editedGoal, name: e.target.value })
              }
              className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            goal.name
          )}
        </h2>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSaveEdit}
              >
                Save
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
      <p className="text-gray-600">
        {isEditing ? (
          <input
            type="text"
            value={editedGoal.target}
            onChange={(e) =>
              setEditedGoal({ ...editedGoal, target: e.target.value })
            }
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          `Target: ${goal.target}`
        )}
      </p>
      <p className="text-gray-600">
        {isEditing ? (
          <input
            type="date"
            value={editedGoal.deadline}
            onChange={(e) =>
              setEditedGoal({ ...editedGoal, deadline: e.target.value })
            }
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          `Deadline: ${goal.deadline}`
        )}
      </p>
      {goal.progress !== undefined && (
        <div className="mt-4">
          <p className="text-gray-600">Progress: {goal.progress}%</p>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${goal.progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalCard;