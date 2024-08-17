-- Create the User table
CREATE TABLE User (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  image VARCHAR(255)
);

-- Create the Goal table
CREATE TABLE Goal (
  goal_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  target VARCHAR(255) NOT NULL,
  deadline TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  progress INT,
  user_id INT REFERENCES User(user_id) ON DELETE CASCADE
);

-- Create the GoalLog table
CREATE TABLE GoalLog (
  goal_log_id SERIAL PRIMARY KEY,
  date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  value VARCHAR(255) NOT NULL,
  goal_id INT REFERENCES Goal(goal_id) ON DELETE CASCADE
);