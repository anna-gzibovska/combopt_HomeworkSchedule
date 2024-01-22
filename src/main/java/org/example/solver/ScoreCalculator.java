//package org.example.solver;
//
//import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
//import ai.timefold.solver.core.api.score.calculator.EasyScoreCalculator;
//import org.example.domain.Assignment;
//import org.example.domain.HomeworkSchedule;
//import org.example.domain.TimeSlot;
////import org.example.domain.?;
//
//public class ScoreCalculator implements EasyScoreCalculator<HomeworkSchedule, HardSoftScore> {
//    @Override
//    public HardSoftScore calculateScore(HomeworkSchedule routingSolution) {
//        int hard = 0, soft = 0;
//
//        Double totalDistance = 0.0;
//
//        for (Vehicle vehicle: routingSolution.getVehicleList()) {
//            Integer undelivered = 0, picked = 0;
//            for (Visit visit: vehicle.getVisits()) {
//                switch (visit.getVisitType()) {
//                    case DELIVERY -> {
//                        undelivered = undelivered - visit.getVolume();
//                    }
//                    case PICKUP -> {
//                        picked = picked + visit.getVolume();
//                    }
//                    case STOCK -> {
//                        undelivered = vehicle.getCapacity();
//                        picked = 0;
//                    }
//                    default -> throw new IllegalStateException("Unexpected value: " + visit.getVisitType());
//                }
//                if (undelivered + picked > vehicle.getCapacity()) hard = hard + undelivered + picked - vehicle.getCapacity();
//                if (undelivered < 0) hard = hard - undelivered;
//            }
//            if (picked > 0) hard = hard + picked;
//
//            totalDistance = totalDistance + vehicle.getTotalDistance();
//        }
//        soft = (int) Math.round(totalDistance * 1000);
//
//        return HardSoftScore.of(- hard, - soft);
//    }
//}
