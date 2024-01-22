package org.example.domain;
//import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollection;
import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;
import java.util.Random;
import java.util.stream.IntStream;

@PlanningSolution
@Getter @Setter @NoArgsConstructor
public class HomeworkSchedule {

    private static final Logger LOGGER = LoggerFactory.getLogger(HomeworkSchedule.class);
    private String solutionId;
    @PlanningScore
    private HardSoftScore score;

    @PlanningEntityCollectionProperty
    private List<Assignment> AssignmentList = new ArrayList<>();

    @ValueRangeProvider(id="dateTimeSlotRange")
    @ProblemFactCollectionProperty
    private List<Day> dayList = new ArrayList<>();

    public void print() {
        LOGGER.info("Homework Schedule: " + this.solutionId);
        for (Assignment assignment : this.AssignmentList) {
            LOGGER.info(assignment.toString());
        }
    }

    public static HomeworkSchedule generateData() {
            HomeworkSchedule problem = new HomeworkSchedule();
            problem.setSolutionId("HS1");
//
//            Assignment assignment1 = new Assignment();
//            assignment1.Subject = "A";
//            assignment1.Value = 20;
//            assignment1.mandatory = False;
//            assignment1.DueDate = "2023.12.01";
//            assignment1.TimeToComplete = 180;
            
            List<Day> days = new ArrayList<>();
            LocalDate startDate = LocalDate.now();

            LocalTime dayStartTime = LocalTime.of(8, 0);
            LocalTime dayEndTime = LocalTime.of(18, 0);

            for (int i = 0; i < 10; i++) {
                LocalDateTime startDateTime = LocalDateTime.of(startDate.plusDays(i), dayStartTime);
                LocalDateTime endDateTime = LocalDateTime.of(startDate.plusDays(i), dayEndTime);

                Day day = new Day(i, startDateTime, endDateTime);
                System.out.println(startDateTime);
                System.out.println(endDateTime);
                days.add(day);
            }
            problem.setDayList(days);

            List<Assignment> assignments = new ArrayList<>();
            Random random = new Random();
            IntStream.rangeClosed(1, 10).forEach(id -> {
                        Assignment assignment = new Assignment();
                        assignment.setSubject("Subject " + id);
                        assignment.setValue(random.nextInt(10) + 1);
                        assignment.setMandatory(random.nextBoolean());
                        assignment.setTimeToComplete(random.nextInt(3) + 1);


                        LocalDate dueDate = startDate.plusDays(random.nextInt(20));
                        LocalDateTime dueDateTime = dueDate.atTime(23, 59);
                        assignment.setDueDate(dueDateTime);
                        System.out.println("due date");
                        System.out.println(dueDateTime);
                        assignments.add(assignment);
                    });
            problem.setAssignmentList(assignments);

            return problem;
        }


        public static HomeworkSchedule generateData(int scale) {
            HomeworkSchedule problem = new HomeworkSchedule();
            problem.setSolutionId("HS" + scale);

            Random random = new Random();

            List<Day> days = generateDays(scale);

            List<Assignment> assignments = new ArrayList<>();
            for (int i = 1; i <= scale; i++) {
                Assignment assignment = new Assignment();
                assignment.setSubject("Assignment " + i);
                assignment.setValue(random.nextInt(10) + 1);
                assignment.setMandatory(random.nextBoolean());
                assignment.setTimeToComplete(random.nextInt(3) + 1);

                LocalDate dueDate = LocalDate.now().plusDays(random.nextInt(scale));
                assignment.setDueDate(dueDate.atStartOfDay());

                assignments.add(assignment);
            }

            problem.setAssignmentList(assignments);
            problem.setDayList(days);

            return problem;
        }

        private static List<Day> generateDays(int numberOfDays) {
            List<Day> days = new ArrayList<>();
            LocalDate startDate = LocalDate.now();
            LocalTime startTime = LocalTime.of(8, 0);
            LocalTime endTime = LocalTime.of(18, 0);

            for (int i = 0; i < numberOfDays; i++) {
                Day day = new Day();
                day.setId(i);
                day.setDateTimeStart(LocalDateTime.of(startDate.plusDays(i), startTime));
                day.setDateTimeEnd(LocalDateTime.of(startDate.plusDays(i), endTime));
                day.setAvailableTime((int) ChronoUnit.MINUTES.between(startTime, endTime));

                days.add(day);
            }
            return days;
        }

        public static String formatLocalDate(LocalDate date) {
            return date.toString();
        }
    }




