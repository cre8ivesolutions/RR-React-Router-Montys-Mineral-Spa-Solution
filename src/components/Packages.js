import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

export default function Packages(props) {
  const displayPackages = props.packages.map((eachPackage) => (
    <li>{eachPackage}</li>
  ));

  return (
    <div>
      <div className="packages">
        <div className="packagesHeader">
          <h1>Our Packages</h1>
        </div>
        <Container>
          <ListGroup >
            {/* <ListGroup.Item active></ListGroup.Item> */}
            <ListGroup.Item className="packageList">{displayPackages}</ListGroup.Item>
          </ListGroup>
        </Container>
        {/* <ul>
                </ul> */}
      </div>
    </div>
  );
}
