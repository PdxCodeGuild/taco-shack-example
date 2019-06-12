import React from "react";
import Container from '../components/helpers/Container';

const Hours = () => (
  <Container>
    <div style={{padding: "1em"}}>
      <h2>Hours</h2>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>9-9:30pm</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>9-9:30pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9-9:30pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>9-9:30pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>9-9:30pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Container>
)

export default Hours;