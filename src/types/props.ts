import { task } from "./task";

export type props = {
  tasks: task[];
  selectTask: (selectedTask: task) => void;
};
