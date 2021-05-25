import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider, Grid } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";

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
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sm={12}
                        style={{ display: "flex" }}
                      >
                        <Grid item xs={3} md={3} lg={3} sm={3}>
                          <Chip
                            label={item.min_age_limit}
                            size="small"
                            icon={<FaceIcon />}
                            style={{
                              backgroundColor: "var(--secondary-color)",
                              fontWeight: "bold",
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={5}
                          md={5}
                          lg={5}
                          sm={5}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Chip
                            label={item.vaccine}
                            size="small"
                            style={{
                              backgroundColor: "var(--primary-color)",
                              fontWeight: "bold",
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={4}
                          lg={4}
                          sm={4}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Chip label={item.date} size="small" />
                        </Grid>
                      </Grid>

                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <Chip
                          label="Available Capacity"
                          style={{
                            fontWeight: "bold",
                          }}
                        ></Chip>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        md={8}
                        lg={8}
                        sm={8}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p>{item.available_capacity}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <Chip
                          label="Available Capacity Dose 1"
                          style={{
                            backgroundColor: "var(--primary-color)",
                            fontWeight: "bold",
                          }}
                        ></Chip>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        md={8}
                        lg={8}
                        sm={8}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p>{item.available_capacity_dose1}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <Chip
                          label="Available Capacity Dose 2"
                          style={{
                            backgroundColor: "var(--secondary-color)",
                            fontWeight: "bold",
                          }}
                        ></Chip>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        md={8}
                        lg={8}
                        sm={8}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p>{item.available_capacity_dose2}</p>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4} sm={4}>
                        <Chip
                          label="Slots"
                          style={{
                            fontWeight: "bold",
                          }}
                        ></Chip>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        md={8}
                        lg={8}
                        sm={8}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
