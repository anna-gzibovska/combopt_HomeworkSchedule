package org.example.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@PlanningEntity
@Getter @Setter @AllArgsConstructor
public class Assignment {

    private static int nextId = 0;
    private final int id;
    private String Subject;
    private int Value;
    private boolean mandatory;
    private LocalDateTime DueDate;
    private int TimeToComplete; // time in minutes

    @PlanningVariable(valueRangeProviderRefs = "dateTimeSlotRange")
    private Day PlannedTimeSlot;

    public Assignment() {
        this.id = nextId++;
    }

    @JsonIgnore
    public boolean overlapsWith(Assignment other) {
        if (this.PlannedTimeSlot == null || other.PlannedTimeSlot == null) {
            return false;
        }

        LocalDateTime thisEndTime = this.getEndTime();
        LocalDateTime otherStartTime = other.PlannedTimeSlot.getDateTimeStart();
        LocalDateTime otherEndTime = other.getEndTime();

        return this.PlannedTimeSlot.getDateTimeStart().isBefore(otherEndTime) &&
                thisEndTime.isAfter(otherStartTime);
    }

    @JsonIgnore
    public boolean isAfter() {
        if (PlannedTimeSlot == null || DueDate == null) {
            return false;
        }

        LocalDateTime dayStart = PlannedTimeSlot.getDateTimeStart();

        return dayStart.isAfter(DueDate);
    }


    @JsonIgnore
    public LocalDateTime getEndTime() {
        if (PlannedTimeSlot != null && TimeToComplete > 0) {
            return PlannedTimeSlot.getDateTimeStart().plusMinutes(TimeToComplete);
        }
        return null;
    }

    public boolean withinDailyHours(Assignment other) {
        if (this.PlannedTimeSlot == null || other.PlannedTimeSlot == null) {
            return false;
        }

        LocalDateTime thisEndTime = this.getEndTime();
        LocalDateTime otherStartTime = other.PlannedTimeSlot.getDateTimeStart();
        LocalDateTime otherEndTime = other.getEndTime();

        return this.PlannedTimeSlot.getDateTimeStart().isBefore(otherEndTime) &&
                thisEndTime.isAfter(otherStartTime);
    }


    @PlanningId
    public int getId() {
        return id;
    }
}


