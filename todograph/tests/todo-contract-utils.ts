import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddTodo,
  ToggleCompletedStatus
} from "../generated/TodoContract/TodoContract"

export function createAddTodoEvent(
  user: Address,
  todoId: BigInt,
  todoTask: string,
  isCompleted: boolean
): AddTodo {
  let addTodoEvent = changetype<AddTodo>(newMockEvent())

  addTodoEvent.parameters = new Array()

  addTodoEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  addTodoEvent.parameters.push(
    new ethereum.EventParam("todoId", ethereum.Value.fromUnsignedBigInt(todoId))
  )
  addTodoEvent.parameters.push(
    new ethereum.EventParam("todoTask", ethereum.Value.fromString(todoTask))
  )
  addTodoEvent.parameters.push(
    new ethereum.EventParam(
      "isCompleted",
      ethereum.Value.fromBoolean(isCompleted)
    )
  )

  return addTodoEvent
}

export function createToggleCompletedStatusEvent(
  todoId: BigInt,
  isCompleted: boolean
): ToggleCompletedStatus {
  let toggleCompletedStatusEvent = changetype<ToggleCompletedStatus>(
    newMockEvent()
  )

  toggleCompletedStatusEvent.parameters = new Array()

  toggleCompletedStatusEvent.parameters.push(
    new ethereum.EventParam("todoId", ethereum.Value.fromUnsignedBigInt(todoId))
  )
  toggleCompletedStatusEvent.parameters.push(
    new ethereum.EventParam(
      "isCompleted",
      ethereum.Value.fromBoolean(isCompleted)
    )
  )

  return toggleCompletedStatusEvent
}
