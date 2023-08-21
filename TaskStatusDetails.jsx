import React from "react";
import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Form } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
// import BsCalendarDate fron


function TaskStatusDetails() {


  return (
    <>
      <h2>Task Details</h2>
      <Container style={{ backgroundColor: "#EDF4F4" }}>
        <Stack direction="vertical" gap={3}>
          <div>
            <Form.Group>
              <Form.Label>A - Task Priority</Form.Label>
              <Form.Select size="md">
                <option>High</option>
                <option>Medium select</option>
                <option>Low</option>
                <option>Critical</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>B - Description</Form.Label>
              <Form.Control as="textarea" rows={3} col={3} />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>C - File</Form.Label>
              <Form.Control />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>D - Status</Form.Label>
              <Form.Select size="md">
                <option>OnHold </option>
                <option>In Progress</option>
                <option>Low</option>
                <option>Awaiting Review</option>
                <option>Completed</option>
                <option>Not Started</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>E - Key Note/Comment</Form.Label>
              <Form.Control placeholder="Delayed shipping. Waiting for parts to arrive." />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label> F - Start Date </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>G - Due Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>
          <div>
            <Form.Group style={{marginBottom:"20px"}}>
              <Form.Label>H - Progress Bar</Form.Label>
              <ProgressBar animated now={100} />
            </Form.Group>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default TaskStatusDetails;
