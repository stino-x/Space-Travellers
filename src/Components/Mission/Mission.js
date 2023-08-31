/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import './Mission.css';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { changeStatus, fetchMission } from '../../redux/mission/missionSlice';
// import { fetchMission, changeStatus } from './redux/mission/missionSlice';
// eslint-disable-next-line import/no-extraneous-dependencies
// C:\Users\Danskids\Desktop\ALL MY PROJECTS\Space travellers(group-projectreact)
// \Space-Travellers\src\redux\mission\missionSlice.js
const Mission = () => {
  const dispatch = useDispatch();

  const missionLog = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);
  return (
    <Table className="table" striped bordered hover variant="light">
      <thead>
        <tr>
          <th className="Column 1">Column 1</th>
          <th className="Column-2">Column-2</th>
          <th className="Column 3">Column 3</th>
          <th className="Column 4">Column 4</th>
        </tr>
      </thead>
      <tbody>
        {missionLog.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="Column-1">{mission.mission_name}</td>
            <td className="Column-2">
              <p>
                {mission.description}
              </p>
              {' '}

            </td>
            <td className="Column-3">
              <div className={mission.reserved ? 'status Active' : 'status'}>
                Active
              </div>
            </td>
            <td className="Column-4">
              <div className="centered-content">
                <input type="button" onClick={dispatch(changeStatus(mission.mission_id))} className={mission.reserved ? 'leave-mission' : ''} value="Mission" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Mission;
