package org.example;

import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.solver.EnvironmentMode;
import ai.timefold.solver.core.config.solver.SolverConfig;
import ai.timefold.solver.core.config.solver.termination.TerminationConfig;
//import org.example.solver.ScoreCalculator;
import org.example.solver.StreamCalculator;
import org.example.domain.Assignment;
import org.example.domain.HomeworkSchedule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class Main {
    private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
    public static void main(String[] args) {

        System.out.printf("AAAAAAAAAAAAAAA");

        HomeworkSchedule problem = HomeworkSchedule.generateData();
        problem.print();

        SolverFactory<HomeworkSchedule> solverFactoryFromXML = SolverFactory
                .createFromXmlResource("solverConfig.xml");

        SolverFactory<HomeworkSchedule> solverFactory = SolverFactory.create(
                new SolverConfig()
                        .withSolutionClass(HomeworkSchedule.class)
                        .withEntityClasses(Assignment.class)
                        //.withEasyScoreCalculatorClass(ScoreCalculator.class)
                        .withConstraintProviderClass(StreamCalculator.class)//constraintsolver
                        .withTerminationConfig(new TerminationConfig()
                                .withSecondsSpentLimit(30L))
                        .withEnvironmentMode(EnvironmentMode.FULL_ASSERT)
        );

        Solver<HomeworkSchedule> solver = solverFactoryFromXML.buildSolver();
        HomeworkSchedule solution = solver.solve(problem);

        SolutionManager<HomeworkSchedule, HardSoftScore> solutionManager = SolutionManager.create(solverFactory);
        ScoreExplanation<HomeworkSchedule, HardSoftScore> scoreExplanation = solutionManager.explain(solution);
        LOGGER.info(scoreExplanation.getSummary());

        solution.print();
    }
}
