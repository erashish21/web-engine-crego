import React, { useState } from "react";
import { Form, Container, Col, Row, Button } from "react-bootstrap";

const ExpEngine = () => {
  const [connectorType, setConnectorType] = useState("AND");
  const [expressions, setExpressions] = useState([
    { id: 1, key: "age", output: { value: "", operator: "", score: "" } },
  ]);

  const handleConnectorType = (e) => {
    setConnectorType(e.target.value);
  };

  const handleExpression = (index, field, value) => {
    const updatedExp = [...expressions];
    if (field === "key") {
      updatedExp[index][field] = value;
      updatedExp[index].output = { value: "", operator: "", score: "" };
    } else {
      updatedExp[index].output[field] = value;
    }
    setExpressions(updatedExp);
  };

  const handleAddExp = () => {
    const newId = expressions.length + 1;
    setExpressions([
      ...expressions,
      { id: newId, key: "", output: { value: "", operator: "", score: "" } },
    ]);
  };

  const handleDeleteExp = (id) => {
    const updatedExp = expressions.filter((expression) => expression.id !== id);
    setExpressions(updatedExp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const output = {
      rules: expressions.map((exp) => ({
        key: exp.key,
        output: exp.output,
      })),
       combinator: connectorType,
    };

    console.log(output);
  };

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <h1>EXPRESSION ENGINE</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="connectorType" className="mt-4">
              <Form.Label>Connector Type</Form.Label>
              <Form.Select
                required
                value={connectorType}
                onChange={handleConnectorType}
              >
                <option value="">--Please choose an option--</option>
                <option value="AND">AND</option>
                <option value="OR">OR</option>
              </Form.Select>
            </Form.Group>

            {expressions.map((expression, index) => (
              <div key={expression.id}>
                <Form.Group controlId={`key-${expression.id}`} className="mt-4">
                  <Form.Label>Rule Type</Form.Label>
                  <Form.Select
                    required
                    value={expression.key}
                    onChange={(e) =>
                      handleExpression(index, "key", e.target.value)
                    }
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="age">Age</option>
                    <option value="credit_score">Credit Score</option>
                    <option value="account_balance">Account Balance</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  controlId={`operator-${expression.id}`}
                  className="mt-4"
                >
                  <Form.Label>Operator</Form.Label>
                  <Form.Select
                    required
                    value={expression.output.operator}
                    onChange={(e) =>
                      handleExpression(index, "operator", e.target.value)
                    }
                  >
                    <option value="">--Please choose an option--</option>
                    <option value=">">{">"}</option>
                    <option value="<">{"<"}</option>
                    <option value="≥">{"≥"}</option>
                    <option value="≤">{"≤"}</option>
                    <option value="=">{"="}</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  controlId={`value-${expression.id}`}
                  className="mt-4"
                >
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the value"
                    required
                    value={expression.output.value}
                    onChange={(e) =>
                      handleExpression(index, "value", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group
                  controlId={`score-${expression.id}`}
                  className="mt-4"
                >
                  <Form.Label>Score</Form.Label>
                  <Form.Control
                    placeholder="Enter the score"
                    type="text"
                    required
                    value={expression.output.score}
                    onChange={(e) =>
                      handleExpression(index, "score", e.target.value)
                    }
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="me-4 mt-4"
                  onClick={handleAddExp}
                >
                  Add Expression
                </Button>
                <Button
                  variant="danger"
                  className="me-4 mt-4"
                  onClick={() => handleDeleteExp(expression.id)}
                >
                  Delete
                </Button>
                <Button variant="success" type="submit" className="mt-4">
                  Submit
                </Button>
              </div>
            ))}
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ExpEngine;
