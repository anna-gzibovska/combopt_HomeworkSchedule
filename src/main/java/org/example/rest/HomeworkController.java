package org.example.rest;


import ai.timefold.solver.core.api.score.analysis.ScoreAnalysis;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.constraint.Indictment;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.SolverManager;
import jakarta.annotation.PostConstruct;
import org.example.domain.HomeworkSchedule;
//import lv.lu.df.combopt.solver.SimpleIndictmentObject;
import org.example.solver.SimpleIndictmentObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/homework")
public class HomeworkController {
    @Autowired
    private SolverManager<HomeworkSchedule, String> solverManager;
    @Autowired
    private SolutionManager<HomeworkSchedule, HardSoftScore> solutionManager;

    private Map<String, HomeworkSchedule> solutionMap = new HashMap<>();

    @PostMapping("/solve")
    public void solve(@RequestBody HomeworkSchedule problem) {
        solverManager.solveAndListen(problem.getSolutionId(), id -> problem,
                solution -> solutionMap.put(solution.getSolutionId(), solution));
    }

    @GetMapping("/solution")
    public HomeworkSchedule solution(@RequestParam String id) {
        return solutionMap.get(id);
    }

    @GetMapping("/list")
    public List<HomeworkSchedule> list() {
        return solutionMap.values().stream().toList();
    }

    @GetMapping("/score")
    public ScoreAnalysis<HardSoftScore> score(@RequestParam String id) {
        return solutionManager.analyze(solutionMap.get(id));
    }

    @GetMapping("/indictments")
    public List<SimpleIndictmentObject> indictments(@RequestParam String id) {
        return solutionManager.explain(solutionMap.getOrDefault(id, null)).getIndictmentMap().entrySet().stream()
                .map(entry -> {
                    Indictment<HardSoftScore> indictment = entry.getValue();
                    return
                            new SimpleIndictmentObject(entry.getKey(),
                                    indictment.getScore(),
                                    indictment.getConstraintMatchCount(),
                                    indictment.getConstraintMatchSet());
                }).collect(Collectors.toList());
    }

    @PostConstruct
    public void init() {
        HomeworkSchedule initialProblem = HomeworkSchedule.generateData();
        solverManager.solveAndListen(initialProblem.getSolutionId(), id -> initialProblem, solution -> {
            solutionMap.put(solution.getSolutionId(), solution);});
    }
}