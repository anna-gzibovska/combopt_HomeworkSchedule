package org.example.domain;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Day {
    private int id;
    private LocalDateTime dateTimeStart;
    private LocalDateTime dateTimeEnd;

    private int availableTime;

    @JsonIgnore
    public Day(Integer id, LocalDateTime dateTimeStart, LocalDateTime dateTimeEnd) {
        this.id = id;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeEnd = dateTimeEnd;
        this.availableTime = calculateAvailableTime();
    }

    private int calculateAvailableTime() {
        return (int) Duration.between(dateTimeStart, dateTimeEnd).toMinutes();
    }

    @Override
    public String toString() {
        return "DateTimeSlot{" +
                "id=" + id +
                ", start=" + dateTimeStart.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")) +
                ", end=" + (dateTimeEnd != null ? dateTimeEnd.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")) : "N/A") +
                '}';
    }
}
