import React from "react";
import "./App.css";
//import Modal from "./components/Modal";
import CompoundModel from "./components/Model-Compound-Component";

function App() {
  return (
    <div className="App">
      <div>
        <h1>My App</h1>
        <CompoundModel>
          <CompoundModel.Content>
            <h3>Custom Modal Content</h3>
            <p>This is a custom content for the modal.</p>
          </CompoundModel.Content>
          <CompoundModel.Footer>
            <button>Custom Button</button>
          </CompoundModel.Footer>
        </CompoundModel>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Modal>Model component</Modal>
//     </div>
//   );
// }
