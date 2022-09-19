import { AddTodo, ToggleCompletedStatus } from "../generated/TodoContract/TodoContract";
import { Todo } from "../generated/schema";

export function handleAddTodo(event: AddTodo): void {
  let newTodo = Todo.load(event.params.todoId.toHex());
  if (newTodo == null) {
    newTodo = new Todo(event.params.todoId.toHex());
    newTodo.todoId = event.params.todoId;
    newTodo.todoTask = event.params.todoTask;
    newTodo.creator = event.params.user;
    newTodo.isCompleted = false;
    newTodo.save();
  }
}

export function handleToggleCompletedStatus(event: ToggleCompletedStatus): void {
  let thisTodo = Todo.load(event.params.todoId.toHex());
  if (thisTodo) {
    thisTodo.isCompleted = !thisTodo.isCompleted;
    thisTodo.save();
  }
}
