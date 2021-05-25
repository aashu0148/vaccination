import React, { useState } from "react";
import { Grid, Button, Divider } from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import injection from "./assets/svg-1.svg";
import Center from "./Components/Center";
import "./Components/Field.css";
import "./App.css";

function App() {
  const [dateValue, setDateValue] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [pinValue, setPinValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [searchButtonDisabled, setSearchButtonDisabled] = useState(false);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          padding: "20px",
          margin: "auto",
          width: "fit-content",
          borderBottom: "3px solid var(--secondary-color)",
          marginBottom: "30px",
        }}
      >
        <img style={{ height: "50px" }} src={injection} alt="Vaccine" />
        <h1 style={{ color: "var(--primary-color)" }}>Vaccination center</h1>
      </div>
      <div
        onClick={() => {
          setCalendarOpen(false);
        }}
        className={`backdrop ${calendarOpen ? "backdrop_active" : ""}`}
      />
      <Grid
        container
        spacing={2}
        style={{ margin: "0", width: "100%" }}
        justify="center"
      >
        <Grid item xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
          <div className="field-form-elem" style={{ position: "relative" }}>
            <label>Select Date</label>
            <p
              style={{
                cursor: "pointer",
                margin: "0",
                minWidth: "250px",
                padding: "15px",
                boxShadow: "-1px 2px 5px rgb(0 0 0 / 10%)",
                borderRadius: "5px",
                fontSize: " 1rem",
                color: "#000",
                textAlign: "start",
              }}
              onClick={() => {
                setCalendarOpen(!calendarOpen);
              }}
            >
              {`${dateValue.getDate()} - ${
                dateValue.getMonth() + 1
              } - ${dateValue.getFullYear()}`}
            </p>
            <div
              className={`app_calendar ${
                calendarOpen ? "app_calendar_active" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <Calendar
                value={dateValue}
                defaultView="month"
                minDate={new Date()}
                onClickDay={(value) => {
                  setDateValue(value);
                  setCalendarOpen(false);
                }}
                view="month"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
          <div className="field-form-elem">
            <label>Enter PIN code</label>
            <input
              type="text"
              placeholder="Enter PIN"
              value={pinValue}
              maxLength="6"
              onChange={(e) => {
                const value = e.target.value;
                const char = value.slice(-1);
                if ((char >= "0" && char <= "9") || value === "") {
                  setPinValue(value);
                }
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
          <small className="field-error-msg">{errorMsg}</small>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            disabled={searchButtonDisabled}
            style={{
              background: "var(--primary-color)",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Divider />
      <Grid
        container
        spacing={2}
        style={{
          width: "100%",
          maxWidth: "700px",
          margin: "auto",
        }}
        justify="center"
      >
        <Center />
        <Grid item xs={12} md={12} lg={12}>
          <Divider />
        </Grid>
        <Center />
      </Grid>
    </div>
  );
}

export default App;
