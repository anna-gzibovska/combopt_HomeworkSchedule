package org.example;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import org.example.domain.HomeworkSchedule;
import org.example.domain.HomeworkScheduleJsonIO;

import java.io.File;

public class BenchmarkRunner {
    public static void main(String[] args) {
        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory
                .createFromSolverConfigXmlResource("solverConfig.xml");

        PlannerBenchmarkFactory benchmarkFactoryFromXML = PlannerBenchmarkFactory
                .createFromXmlResource("benchmarkConfig.xml");

        //RoutingSolution problem = RoutingSolution.generateData();

        HomeworkScheduleJsonIO homeworkScheduleJsonIO = new HomeworkScheduleJsonIO();
        homeworkScheduleJsonIO.write(HomeworkSchedule.generateData(500),
                new File("data/classExample500.json"));

        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark();

        benchmark.benchmarkAndShowReportInBrowser();

    }
}