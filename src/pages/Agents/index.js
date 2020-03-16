import React, {useState, useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AgentItem from '../AgentItem';
import { getAgentsAction } from './action';
import Paginator from 'react-hooks-paginator';

function Agents() {
  const {agents} = useSelector(state => state);
  const pageLimit = 3;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAgents, setCurrentAgents] = useState([]);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(getAgentsAction());
  }, [stableDispatch]);

  useEffect(() => {
    setCurrentAgents(agents.payload.slice(offset, offset + pageLimit));
  }, [offset, agents]);


  return (
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7">
          <div className="site-section-title text-center">
            <h2>Our Agents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam, laboriosam.</p>
          </div>
        </div>
      </div>

      <div className="row">
      {agents && currentAgents.map(agent => (
        <AgentItem
        name={agent.name}
        image={agent.image}
        title={agent.title}
        description={agent.description}
        fb={agent.fb}
        twitter={agent.twitter}
        linkedin={agent.linkedin}
      />
      ))}
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <Paginator
            totalRecords={agents.payload.length}
            pageLimit={pageLimit}
            pageNeighbours={1}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Agents;
