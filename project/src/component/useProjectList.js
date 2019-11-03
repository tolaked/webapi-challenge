import React, { useState, useEffect } from "react";
import Axios from "axios";

const initialState = [];

function useProjectList() {
  const [project, setProject] = useState(initialState);
  const [projecaction, setProjectaction] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/projects").then(res => {
      console.log(res.data);
      setProject(res.data);
    });
  }, []);

  const actions = (e, id) => {
    e.preventDefault();
    Axios.get(`http://localhost:5000/api/${id}/projectactions`).then(res =>
      setProjectaction(res.data)
    );
  };

  return (
    <div>
      <h2>Project List</h2>
      {project.map(element => (
        <div key={element.id}>
          <h3>Project Name:{element.name}</h3>
          <p>Description:{element.description}</p>
          <p>Completed:{element.completed.toString()}</p>
          {projecaction
            ? projecaction.map(el =>
                element.id === el.project_id ? (
                  <div>
                    <p>Action:{el.description}</p>
                  </div>
                ) : null
              )
            : null}
          <button onClick={e => actions(e, element.id)}>View actions</button>
        </div>
      ))}
    </div>
  );
}

export default useProjectList;
