const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getGoals = async (userId) => {
  try {
    const goals = await prisma.goal.findMany({
      where: { userId },
    });
    return goals;
  } catch (error) {
    console.error('Error fetching goals:', error);
    return [];
  }
};

const createGoal = async (userId, goalData) => {
  try {
    const newGoal = await prisma.goal.create({
      data: {
        ...goalData,
        userId,
      },
    });
    return newGoal;
  } catch (error) {
    console.error('Error creating goal:', error);
    throw error;
  }
};

const updateGoal = async (goalId, updatedGoalData) => {
  try {
    const updatedGoal = await prisma.goal.update({
      where: { id: goalId },
      data: updatedGoalData,
    });
    return updatedGoal;
  } catch (error) {
    console.error('Error updating goal:', error);
    throw error;
  }
};

const deleteGoal = async (goalId) => {
  try {
    await prisma.goal.delete({
      where: { id: goalId },
    });
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw error;
  }
};

const getPosts = async (userId) => {
  try {
    const posts = await prisma.post.findMany({
      where: { userId },
    });
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

const createPost = async (userId, postData) => {
  try {
    const newPost = await prisma.post.create({
      data: {
        ...postData,
        userId,
      },
    });
    return newPost;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
  getPosts,
  createPost,
};