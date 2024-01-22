package org.example.domain;
import ai.timefold.solver.jackson.impl.domain.solution.JacksonSolutionFileIO;

public class HomeworkScheduleJsonIO extends JacksonSolutionFileIO<HomeworkSchedule> {
        public HomeworkScheduleJsonIO() {
            super(HomeworkSchedule.class);
        }
}
