import React from 'react';
import './myProfile.css';
import Table from 'react-bootstrap/Table';

export default function myProfile() {
  return (
    <div className="container">
      <Table className="table-1">
        <thead>
          <tr className="header-cell">
            <th colSpan={4}>#</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td>1</td>
          </tr>
          <tr className="border">
            <td>2</td>
          </tr>
          <tr className="border">
            <td>3</td>
          </tr>
        </tbody>
      </Table>
      <Table className="table-2">
        <thead>
          <tr className="header-cell">
            <th colSpan={4}>#</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td>1</td>
          </tr>
          <tr className="border">
            <td>2</td>
          </tr>
          <tr className="border">
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
