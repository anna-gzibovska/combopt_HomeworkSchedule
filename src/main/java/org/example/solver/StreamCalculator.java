package org.example.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.example.domain.Assignment;
import org.example.domain.Day;

public class StreamCalculator implements ConstraintProvider {

    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                mandatoryAssignmentsCompleted(constraintFactory),
                maximizeValue(constraintFactory),
                noOverlappingAssignments(constraintFactory),
                assignmentsWithinDeadlines(constraintFactory),
                withinDailyHours(constraintFactory),
                prioritizeMandatory(constraintFactory)
        };
    }

    public Constraint mandatoryAssignmentsCompleted(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Assignment.class)
                .filter(Assignment::isMandatory)
                .filter(assignment -> assignment.getPlannedTimeSlot() == null)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Mandatory homework is not completed");
    }

    public Constraint maximizeValue(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Assignment.class)
                .filter(assignment -> assignment.getPlannedTimeSlot() != null)
                .reward(HardSoftScore.ONE_SOFT, Assignment::getValue)
                .asConstraint("Maximize value");
    }

    public Constraint noOverlappingAssignments(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Assignment.class,
                        Joiners.equal(Assignment::getPlannedTimeSlot))
                .filter(Assignment::overlapsWith)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Overlapping homework assignments");
    }

    public Constraint assignmentsWithinDeadlines(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Assignment.class)
                .filter(assignment -> assignment.getPlannedTimeSlot() != null)
                .filter(Assignment::isAfter)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Homework past deadline");
    }

    public Constraint withinDailyHours(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Day.class)
                .join(Assignment.class, Joiners.equal(Day::getId, Assignment::getPlannedTimeSlot))
                .groupBy((day, assignment) -> day,
                        (day, assignment) -> assignment.getTimeToComplete())
                .filter((day, totalHours) -> totalHours > day.getAvailableTime())
                .penalize(HardSoftScore.ONE_HARD,
                        (day, totalHours) -> totalHours - day.getAvailableTime())
                .asConstraint("Exceeds daily time limit");
    }

    public Constraint prioritizeMandatory(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Assignment.class)
                .filter(assignment -> !assignment.isMandatory())
                .reward(HardSoftScore.ONE_SOFT,
                        Assignment::getTimeToComplete)
                .asConstraint("Prioritize mandatory assignments");
    }
}


