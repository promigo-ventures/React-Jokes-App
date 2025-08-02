import React, { useEffect, useState } from "react";
import "./index.css";

const Joke = () => {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=twopart"
      );
      const data = await response.json();

      if (data?.setup && data?.delivery) {
        setSetup(data.setup);
        setPunchline(data.delivery);
      } else {
        throw new Error("Incomplete joke data.");
      }
    } catch (err) {
      setError("😢 Failed to fetch a joke. Please try again.");
      setSetup("");
      setPunchline("");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      <div className="joke-card">
        <h1 className="title">Joke Generator 😂</h1>
        {isLoading ? (
          <p className="status-text">Loading a fresh joke...</p>
        ) : error ? (
          <p className="status-text error">{error}</p>
        ) : (
          <div className="joke-content">
            <p className="setup">
              <strong>Setup:</strong> {setup}
            </p>
            <p className="punchline">
              <strong>Punchline:</strong> {punchline}
            </p>
          </div>
        )}
        <button className="joke-btn" onClick={fetchJoke}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default Joke;
