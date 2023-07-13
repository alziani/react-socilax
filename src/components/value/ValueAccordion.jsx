import Accordion from "react-bootstrap/Accordion";

function ValueAccordion({ text, title, eventKey }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{text}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ValueAccordion;
