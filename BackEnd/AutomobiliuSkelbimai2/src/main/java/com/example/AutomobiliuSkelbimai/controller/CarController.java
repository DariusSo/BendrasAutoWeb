package com.example.AutomobiliuSkelbimai.controller;
import com.example.AutomobiliuSkelbimai.carsRepositories.CarRepository;
import com.example.AutomobiliuSkelbimai.models.Car;
import com.example.AutomobiliuSkelbimai.services.CarService;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
public class CarController {

    CarService carService = new CarService();

    @CrossOrigin
    @PostMapping("/addCar")
    public void addCar(@RequestBody Car car) throws SQLException {
        carService.addCar(car);
    }
    @CrossOrigin
    @GetMapping("/getCar")
    public List<Car>getCarList() throws SQLException {
        List<Car> carList = carService.getCarList();
        return carList;
    }
    @CrossOrigin
    @GetMapping("/getMarke")
    public List<String>getMarkeList() throws SQLException {
        List<String> markeList = carService.getMarkeList();
        return markeList;
    }
    @CrossOrigin
    @GetMapping ("/getModelis")
    public List<String>getModelisList(String marke) throws SQLException {
        List<String> modelisList = carService.getModelisList(marke);
        return modelisList;
    }
    @CrossOrigin
    @GetMapping("/paieska")
    public List<Car> getSearchList(String marke, String modelis, double kainaNuo, double kainaIki, int metaiNuo, int metaiIki, int ridaNuo, int ridaIki) throws SQLException {
        return carService.getSearchList(marke, modelis, kainaNuo, kainaIki, metaiNuo, metaiIki, ridaNuo, ridaIki);
    }
    @CrossOrigin
    @PostMapping("/modifyCar")
    public void modifyCar(@RequestBody Car car) throws SQLException {
        carService.modifyCar(car);
    }
    @CrossOrigin
    @GetMapping("/getCarById")
    public Car getCarById(int id) throws SQLException {
        return carService.getCarById(id);
    }
    @CrossOrigin
    @PostMapping("/deleteCarById")
    public void deleteCarById(int id) throws SQLException {
        carService.deleteCarById(id);
    }


}

