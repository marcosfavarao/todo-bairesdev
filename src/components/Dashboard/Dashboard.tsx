import * as React from "react";
import { PlusSquare, ListPlus } from "@phosphor-icons/react";

import { Task } from "..";

import { TaskType } from "../../types";

import BairesLogo from "../../common/assets/images/bairesdev-logo.png";

import {
  Component,
  Wrapper,
  Header,
  Content,
  Footer,
  Empty,
} from "./Dashboard.styles";

export function Dashboard() {
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  const [newTask, setNewTask] = React.useState<string>("");

  function handleAddNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTaskState: TaskType = {
      id: String(new Date()),
      title: newTask,
    };
    setTasks((tasks) => [...tasks, newTaskState]);
    clearInput();
  }

  function clearInput() {
    setNewTask("");
  }

  function handleDeleteTask(targetId: string) {
    const taskList = structuredClone(tasks);
    const taskUp = taskList.filter((task) => task.id !== targetId);
    setTasks(taskUp);
  }

  const emptyField = !newTask.length;
  return (
    <>
      <Component>
        <Wrapper>
          <Header>
            <a
              href={"https://www.bairesdev.com/"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={BairesLogo} title={"BairesDev"} />
              <h1>BairesDev</h1>
            </a>

            <h2>todo list</h2>
          </Header>

          <Content>
            {!tasks.length && (
              <Empty>
                <ListPlus />
                <p>O que você precisa concluir hoje?</p>
              </Empty>
            )}

            {!!tasks.length &&
              tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={() => handleDeleteTask(task.id)}
                  />
                );
              })}
          </Content>

          <Footer onSubmit={handleAddNewTask}>
            <input
              type="text"
              id="todo-input"
              name="todo-input"
              placeholder={"Qual a tarefa?"}
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />

            <button
              type={"submit"}
              title={"Adicionar nova task"}
              disabled={emptyField}
            >
              <PlusSquare />
            </button>
          </Footer>
        </Wrapper>
      </Component>
    </>
  );
}
