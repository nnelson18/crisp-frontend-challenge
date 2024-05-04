import reducer, { addTask } from "../store/tasksSlice";
import { describe, expect, test } from "vitest";

describe("task slice", () => {
  test("should add new task", () => {
    const prevState = { tasks: [], history: [], categories: [] };
    const { tasks } = reducer(
      prevState,
      addTask({ title: "UNIT TEST", category: "UNIT TEST" })
    );
    expect(tasks.length).toEqual(1);
    expect(tasks[0].title).toEqual("UNIT TEST");
    expect(tasks[0].category).toEqual("UNIT TEST");
  });
});
