import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Task3 from './Task3';

function Task2({ tasks, onToggleTask, onDeleteTask, onDragEnd}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-2"
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
              {(provided) => (
                <li
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <Task3
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                  />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  </DragDropContext>
  )
}

export default Task2