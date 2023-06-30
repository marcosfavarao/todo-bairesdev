import * as React from "react";
import { TrashSimple, Circle, Square } from "@phosphor-icons/react";
import { ThemeContext } from "styled-components";

import { TaskType } from "../../types";

import { Component, Wrapper, TaskItem } from "./Task.styles";

type TaskPriorityType = "none" | "minimum" | "moderate" | "maximum";

enum TaskPriority {
  NONE = "none",
  MINIMUM = "minimum",
  MODERATE = "moderate",
  MAXIMUM = "maximum",
}

type TaskPropsType = {
  task: TaskType;
  onDeleteTask: () => void;
};

export function Task({ task, onDeleteTask }: TaskPropsType) {
  const themeContext = React.useContext(ThemeContext);

  const [taskPriority, setTaskPriority] =
    React.useState<TaskPriorityType>("none");
  const [taskComplete, setTaskComplete] = React.useState(false);

  function handleSetTaskPriority(priority: TaskPriorityType) {
    setTaskPriority((current) =>
      current === priority ? TaskPriority.NONE : priority
    );
  }

  function handleSetTaskComplete() {
    setTaskComplete((isComplete) => !isComplete);
    setTaskPriority(TaskPriority.NONE);
  }

  return (
    <>
      <Component>
        <Wrapper>
          <TaskItem taskPriority={taskPriority} taskComplete={taskComplete}>
            <div className={"task-management"}>
              <Square
                {...(taskComplete ? { weight: "fill" } : {})}
                onClick={handleSetTaskComplete}
              />
              <TrashSimple onClick={onDeleteTask} />
            </div>

            <span>{task.title}</span>

            <div className={"task-priority"}>
              <Circle
                weight="fill"
                color={themeContext?.colors.white}
                onClick={() => handleSetTaskPriority(TaskPriority.MINIMUM)}
              />
              <Circle
                weight="fill"
                color={themeContext?.colors.orange}
                onClick={() => handleSetTaskPriority(TaskPriority.MODERATE)}
              />
              <Circle
                weight="fill"
                color={themeContext?.colors.red}
                onClick={() => handleSetTaskPriority(TaskPriority.MAXIMUM)}
              />
            </div>
          </TaskItem>
        </Wrapper>
      </Component>
    </>
  );
}
