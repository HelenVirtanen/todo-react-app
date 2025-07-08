import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todos", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders heading", () => {
    render(<App />);
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "Learn TypeScript" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Learn TypeScript")).toBeInTheDocument();
    expect(screen.getByText("1 item left")).toBeInTheDocument();
  });

  test("toggles a task as completed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "Go for a walk" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const task = screen.getByText("Go for a walk");
    expect(task).toHaveClass("todo__task");
    fireEvent.click(task);
    expect(task).toHaveClass("completed");
  });

  test("filters active tasks", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const task2 = screen.getByText("Task 2");
    fireEvent.click(task2);

    const activeFilter = screen.getByRole("button", { name: /active/i });
    fireEvent.click(activeFilter);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).toBeNull();
  });

  test("filters completed tasks", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const task = screen.getByText("Task 1");
    fireEvent.click(task);

    const completedFilter = screen.getByRole("button", {
      name: /show completed tasks/i,
    });

    fireEvent.click(completedFilter);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  test("clears completed tasks", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "Clean house" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const task = screen.getByText("Clean house");
    fireEvent.click(task);

    const clearBtn = screen.getByRole("button", {
      name: /clear completed tasks/i,
    });
    fireEvent.click(clearBtn);

    expect(screen.queryByText("Clean house")).toBeNull();
  });
});
