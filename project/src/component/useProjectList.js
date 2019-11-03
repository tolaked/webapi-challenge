import React, { useState, useEffect } from "react";
import Axios from "axios";

const initialState = [];

function useProjectList() {
  const [project, setProject] = useState(initialState);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/projects").then(res => {
      console.log(res.data);
      setProject(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Project List</h2>
      {project.map(el => (
        <div>
          <h3>Project Name:{el.name}</h3>
          <p>Description:{el.description}</p>
          <p>Completed:{el.completed.toString()}</p>
        </div>
      ))}
    </div>
  );
}

export default useProjectList;
