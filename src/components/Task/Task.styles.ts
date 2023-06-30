import { styled, css } from "styled-components";
import { lighten } from "polished";

type TaskItemTypes = {
  taskPriority: "none" | "minimum" | "moderate" | "maximum";
  taskComplete: boolean;
};

const taskPriorityColors = {
  none: "",
  minimum: "#fff",
  moderate: "#c9530a",
  maximum: "#c90a0a",
};

export const Component = styled.div``;

export const Wrapper = styled.div``;

export const TaskItem = styled.div<TaskItemTypes>`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:after {
    content: "";
    background-color: ${({ taskPriority }) => taskPriorityColors[taskPriority]};
    width: 3px;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 100;
  }

  &:hover {
    background-color: ${({ theme }) => lighten(0.01, theme.colors.black)};
    border-color: ${({ theme }) => lighten(0.05, theme.colors.black)};
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .task-management {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    input {
      outline: transparent;
    }

    svg {
      transition: color ${({ theme }) => theme.transitions.fast};

      &:first-child {
        color: ${({ theme, taskComplete }) =>
          taskComplete && theme.colors.green};

        &:hover {
          color: ${({ theme }) => theme.colors.green};
        }
      }
    }

    svg ~ svg {
      &:hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }

  .task-priority {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    svg {
      width: 14px;
      height: 14px;
      opacity: 0.5;
      transition: opacity ${({ theme }) => theme.transitions.fast};
      &:hover {
        opacity: 1;
      }
    }
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;

    ${({ taskComplete }) =>
      taskComplete &&
      css`
        text-decoration: line-through;
        color: ${({ theme }) => lighten(0.25, theme.colors.text)};
      `}
  }
`;
