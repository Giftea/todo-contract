// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Todo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Todo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Todo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Todo", id.toString(), this);
    }
  }

  static load(id: string): Todo | null {
    return changetype<Todo | null>(store.get("Todo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get todoId(): BigInt {
    let value = this.get("todoId");
    return value!.toBigInt();
  }

  set todoId(value: BigInt) {
    this.set("todoId", Value.fromBigInt(value));
  }

  get todoTask(): string {
    let value = this.get("todoTask");
    return value!.toString();
  }

  set todoTask(value: string) {
    this.set("todoTask", Value.fromString(value));
  }

  get isCompleted(): boolean {
    let value = this.get("isCompleted");
    return value!.toBoolean();
  }

  set isCompleted(value: boolean) {
    this.set("isCompleted", Value.fromBoolean(value));
  }
}
