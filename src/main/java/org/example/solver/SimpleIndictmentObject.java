package org.example.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.constraint.ConstraintMatch;
import lombok.Getter;
import lombok.Setter;
import org.example.domain.Assignment;
import org.example.domain.Day;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter @Setter
public class SimpleIndictmentObject {
    private String indictedObjectName;
    private HardSoftScore score;
    private int matchCount;
    private List<SimpleConstraintMatch> constraintMatches = new ArrayList<>();

    public SimpleIndictmentObject(Object indictedObject, HardSoftScore score, int matchCount, Set<ConstraintMatch<HardSoftScore>> constraintMatches) {
        if (indictedObject instanceof Assignment) {
            Assignment assignment = (Assignment) indictedObject;
            this.indictedObjectName = "Assignment: " + assignment.getSubject();
        } else if (indictedObject instanceof Day) {
            Day day = (Day) indictedObject;
            this.indictedObjectName = "Day: " + day.getId();
        } else {
            this.indictedObjectName = "Unknown Object";
        }
        this.score = score;
        this.matchCount = matchCount;
        this.constraintMatches = constraintMatches.stream()
                .map(SimpleConstraintMatch::new)
                .collect(Collectors.toList());
    }
}
