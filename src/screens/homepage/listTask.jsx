import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import TaskCard from "../../component/card/taskCard";

const TaskList = () => {
  const taskData=useSelector(state=>state.task);
  const userData=useSelector(state=>state.user.currentUser);
    return <FlatList data={taskData.tasks.filter(e=>{
      console.log('event',e)
      console.log('user',userData)
      return e.userId===userData.id
    })} renderItem={(data)=>{
        return <TaskCard data={data.item}/>
    }}/>
}

export default TaskList;