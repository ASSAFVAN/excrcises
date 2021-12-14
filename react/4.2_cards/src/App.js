import "./App.css";
import Card from "./Components/Card";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <div>
      <Card>
        <CardDetails
          image="https://picsum.photos/300/200?random=1"
          title="Title of first card"
          description="Description1"
        />
      </Card>
      <Card>
        <CardDetails
          image="https://picsum.photos/300/200?random=2"
          title="Title of second card"
          description="Description2"
        />
      </Card>
      <Card>
        <CardDetails
          image="https://picsum.photos/300/200?random=3"
          title="Title of third card"
          description="Description3"
        />
      </Card>
    </div>
  );
}

export default App;
