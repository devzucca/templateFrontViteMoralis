import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Chip,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import ScheduleCalendar from "./calendar";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const TeacherScheduleForm = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [requiredHours, setRequiredHours] = useState(40);
  const [scheduleData, setScheduleData] = useState([]);
  const [totalWeeks, setTotalWeeks] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [nameClass, setNameClass] = useState("ingles");
  const [seccionClass, setDeccionClass] = useState("01");
  const [nameTeacher, setNameTeacher] = useState("juan");

  const calculateTotalHours = () => {
    let totalHours = 0;
    selectedDays.forEach((day) => {
      const data = scheduleData.find((item) => item.day === day);
      if (data && data.startTime && data.endTime) {
        const startTime = dayjs(data.startTime).hour();
        const endTime = dayjs(data.endTime).hour();
        totalHours += endTime - startTime;
      }
    });
    console.log("totalHoursLis", totalHours);
    return totalHours;
  };

  const calculateTotalWeeks = () => {
    const totalHours = calculateTotalHours();
    const totalWeeks = Math.ceil(requiredHours / totalHours);
    const remainingHours = requiredHours - totalHours * (totalWeeks - 1);

    setTotalWeeks(totalWeeks);
    setRemainingHours(remainingHours);
  };

  const handleTimeChange = (day, field, value) => {
    setScheduleData((prevData) =>
      prevData.map((data) => {
        if (data.day === day) {
          return { ...data, [field]: value };
        }
        return data;
      })
    );
  };

  const handleDaySelect = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
      setScheduleData(scheduleData.filter((data) => data.day !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
      const existingData = scheduleData.find((data) => data.day === day);
      if (!existingData) {
        setScheduleData([
          ...scheduleData,
          { day, startTime: null, endTime: null }
        ]);
      }
    }
  };

  const sortedDays = daysOfWeek.sort(
    (a, b) => selectedDays.indexOf(a) - selectedDays.indexOf(b)
  );

  const generateEvents = () => {
    const events = [];

    selectedDays.forEach((selectedDay) => {
      const data = scheduleData.find((item) => item.day === selectedDay);

      if (data && data.startTime && data.endTime) {
        const startTime = dayjs(data.startTime);
        const endTime = dayjs(data.endTime);

        const start = dayjs()
          .startOf("week")
          .add(daysOfWeek.indexOf(selectedDay), "day")
          .hour(startTime.hour())
          .minute(startTime.minute())
          .toDate();
        const end = dayjs()
          .startOf("week")
          .add(daysOfWeek.indexOf(selectedDay), "day")
          .hour(endTime.hour())
          .minute(endTime.minute())
          .toDate();

        events.push({
          start,
          end,
          title: `Class (${selectedDay}) - ${nameClass} (${seccionClass}) - Teacher: ${nameTeacher}`
        });
      }
    });

    return events;
  };

  const handleSave = () => {
    // Verificar que se hayan seleccionado ambos Start Time y End Time para cada día
    const isValidData = selectedDays.every((day) => {
      const data = scheduleData.find((item) => item.day === day);
      return data && data.startTime && data.endTime;
    });

    if (!isValidData) {
      // Mostrar un mensaje de error o realizar alguna acción para manejar el caso de datos incompletos
      console.log(
        "Por favor, seleccione tanto Start Time como End Time para todos los días."
      );
      return;
    }
    // ... (continuación del código)
    if (isValidData) {
      const events = generateEvents();
      console.log("calendarEvents", events);

      setCalendarEvents(events);
      calculateTotalWeeks();
    }
  };

  useEffect(() => {
    calculateTotalWeeks();
  }, [scheduleData, requiredHours, selectedDays]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Select Days
          </Typography>
          <Paper sx={{ p: 2 }}>
            {daysOfWeek.map((day) => (
              <Chip
                key={day}
                label={day}
                onClick={() => handleDaySelect(day)}
                color={selectedDays.includes(day) ? "primary" : "default"}
                sx={{ m: 1, cursor: "pointer", width: "200px" }}
              />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Select Hours
          </Typography>
          <Paper sx={{ p: 2 }}>
            {sortedDays.map((day) => (
              <Grid container spacing={2} key={day}>
                {selectedDays.includes(day) && (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                        {day}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">Start Time:</Typography>
                      <TimePicker
                        label="Select Time"
                        value={
                          scheduleData.find((item) => item.day === day)
                            ?.startTime || null
                        }
                        onChange={(value) =>
                          handleTimeChange(day, "startTime", value)
                        }
                        renderInput={(params) => (
                          <input {...params} className="time-picker-input" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">End Time:</Typography>
                      <TimePicker
                        label="Select Time"
                        value={
                          scheduleData.find((item) => item.day === day)
                            ?.endTime || null
                        }
                        onChange={(value) =>
                          handleTimeChange(day, "endTime", value)
                        }
                        renderInput={(params) => (
                          <input {...params} className="time-picker-input" />
                        )}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} my={4}>
          <Typography variant="body1">
            Required Hours: {requiredHours}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Class Schedule
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Day</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>End Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scheduleData.map((data) => (
                  <TableRow key={data.day}>
                    <TableCell>{data.day}</TableCell>
                    <TableCell>
                      {data.startTime
                        ? dayjs(data.startTime).format("hh:mm a")
                        : "-"}
                    </TableCell>
                    <TableCell>
                      {data.endTime
                        ? dayjs(data.endTime).format("hh:mm a")
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" mt={4}>
            Total Weeks: {totalWeeks}
            <br />
            Remaining Hours: {remainingHours}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Class Calendar
          </Typography>
          <ScheduleCalendar events={calendarEvents} />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default TeacherScheduleForm;
