import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";

function App() {
  const [apiResponse, setApiResponse] = useState();

  const callApi = (e) => {
    const selection = e.target.value;
    if (!!selection) {
      fetch(`/api/v2/user-selections?selected=${selection}`)
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
          console.log("API response:", data); // For debugging
          setApiResponse(data); // Set the API response data in state
        })
        .catch((error) => console.error("Error fetching data:", error)); // Handle errors
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="card">
          <select
            class="form-select"
            aria-label="Select one of the option"
            onChange={callApi}
          >
            <option value="">Please Select</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </div>
        <div className="my-4">
          {apiResponse?.message && (
            <div class="alert alert-success" role="alert">
              {apiResponse.message}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
