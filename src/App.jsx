import React, { useState } from 'react';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (taskData) => {
    setTasks([...tasks, taskData]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showModal && (
        <AddTaskModal 
          onClose={() => setShowModal(false)} 
          onCreateTask={handleCreateTask}
        />
      )}
      
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">FlowSchedule</h1>
        
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition"
        >
          + Add New Task
        </button>

        {tasks.length > 0 && (
          <div className="mt-8 grid gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <div className="mt-4 flex gap-4 text-sm text-gray-500">
                  <span>Priority: {task.priority}</span>
                  <span>Category: {task.category}</span>
                  <span>Duration: {task.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
