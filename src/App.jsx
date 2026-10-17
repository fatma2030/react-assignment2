import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Table from "./components/Table";
import "./App.css";

const students = [
  { name: "Sara Ahmed", age: 21, city: "Cairo" },
  { name: "Omar Khaled", age: 23, city: "Giza" },
  { name: "Lina Hossam", age: 20, city: "Assiut" },
  { name: "Youssef Nabil", age: 22, city: "Alexandria" },
];

function App() {
  const handlePrimaryClick = () => alert("Primary button clicked!");
  const handleDangerClick = () => alert("Delete action triggered!");

  return (
    <div className="app">
      <h1>Reusable Components Demo</h1>

      {/* --- Buttons: same component, different props --- */}
      <section>
        <h2>Buttons</h2>
        <Button text="Save" variant="primary" onClick={handlePrimaryClick} />
        <Button text="Cancel" variant="secondary" onClick={() => alert("Cancelled")} />
        <Button text="Delete" variant="danger" onClick={handleDangerClick} />
        <Button text="Disabled" variant="primary" disabled />
      </section>

      {/* --- Cards: same component, different data, children used once --- */}
      <section>
        <h2>Cards</h2>
        <Card
          title="React Basics"
          description="Learn components, props, and state from scratch."
          image="https://picsum.photos/seed/react/300/160"
        />
        <Card
          title="Advanced Hooks"
          description="Deep dive into useEffect, useMemo, and custom hooks."
          image="https://picsum.photos/seed/hooks/300/160"
        >
          <Button text="Enroll Now" variant="primary" onClick={() => alert("Enrolled!")} />
        </Card>
      </section>

      {/* --- Table: reused with meaningful data --- */}
      <section>
        <h2>Students Table</h2>
        <Table
          columns={["Name", "Age", "City"]}
          data={students}
          striped
        />
      </section>
    </div>
  );
}

export default App;
