import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import TaskCard from "./card/taskCard";

const TaskList = ({ isCompleted }) => {
  const taskData = useSelector((state) => state.task);
  const userData = useSelector((state) => state.user.currentUser);
  return (
    <FlatList
      data={taskData.tasks.filter((e) => {
        const usersDataCheck = e.userId === userData.id;
        const completedCheck = isCompleted ? e.completed : true;
        return usersDataCheck && completedCheck;
      })}
      renderItem={(data) => {
        return <TaskCard data={data.item} />;
      }}
    />
  );
};

export default TaskList;
