import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider, Grid } from "@material-ui/core";

import "./Center.css";

function Center(props) {
  const [expanded, setExpanded] = useState(false);
  const [sessionExpanded, setSessionExpanded] = useState(false);

  return (
    <div style={{ width: "100%", margin: "10px 0" }}>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ padding: "0 5px" }}
        >
          <div style={{ minWidth: "45%" }}>
            <p
              style={{
                fontWeight: "bolder",
                fontSize: "1rem",
                color: "#000",
              }}
            >
              {props.data.name || "_"}
            </p>
            <Chip
              size="small"
              label={`Available : ${props.sessions[0].available_capacity}`}
              style={{
                color: "#fff",
                backgroundColor:
                  props.sessions[0].available_capacity > 0
                    ? "var(--primary-color)"
                    : "var(--error-color)",
                fontWeight: "600",
              }}
            />
          </div>
          <p style={{ fontWeight: "400" }}>{props.data.address}</p>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0 7px 14px 7px" }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Divider style={{ backgroundColor: "var(--primary-color)" }} />
            </Grid>

            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>Center Name </h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.name}</p>
            </Grid>
            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>Address </h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.address}</p>
            </Grid>
            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>From </h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.from}</p>
            </Grid>
            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>To</h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.to}</p>
            </Grid>
            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>Fee</h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.fee_type}</p>
            </Grid>
            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>PIN </h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.pincode}</p>
            </Grid>
            <Grid item xs={4} md={4} lg={4} sm={4}>
              <h3>State </h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8} sm={8}>
              <p>{props.data.state_name}</p>
            </Grid>
            {/* ************************** */}
            <Accordion
              expanded={sessionExpanded}
              onChange={() => setSessionExpanded(!sessionExpanded)}
              style={{ width: "100%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <h3>Sessions</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container alignItems="center">
                  {props.sessions.map((item, i) => (
                    <Grid
                      key={i + item.date}
                      item
                      container
                      spacing={1}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Divider
                          style={{
                            backgroundColor: "var(--secondary-color)",
                            margin: "5px 0",
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12} lg={12} sm={12}>
                        <Chip label={item.date} size="small" />
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Date </h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        <p>{item.date}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Available Capacity </h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        <p>{item.available_capacity}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Age Limit </h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        <p>{item.min_age_limit}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Vaccine</h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        <p>{item.vaccine}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Available Capacity Dose 1</h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        <p>{item.available_capacity_dose1}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Available Capacity Dose 2</h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        <p>{item.available_capacity_dose2}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <h3>Slots </h3>
                      </Grid>
                      <Grid item xs={8} md={8} lg={8} sm={8}>
                        {item.slots.map((item, i) => (
                          <p key={item + i}>{item}</p>
                        ))}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* ************************** */}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Center;
