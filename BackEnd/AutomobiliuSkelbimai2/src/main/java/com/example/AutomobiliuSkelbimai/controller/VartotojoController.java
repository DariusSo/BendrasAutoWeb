package com.example.AutomobiliuSkelbimai.controller;

import com.example.AutomobiliuSkelbimai.carsRepositories.VartotojasRepository;
import com.example.AutomobiliuSkelbimai.models.Car;
import com.example.AutomobiliuSkelbimai.models.Vartotojas;
import com.example.AutomobiliuSkelbimai.services.VartotojoService;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class VartotojoController {

    VartotojoService vartotojoService = new VartotojoService();

    @CrossOrigin
    @PostMapping("/addVartotojas")
    public void addVartotojas(@RequestBody Vartotojas vartotojas) throws SQLException {
        vartotojoService.addVartotojas(vartotojas);
    }
    @CrossOrigin
    @GetMapping("/getToken")
    public String getJwtToken(String email, String password) throws SQLException {
        return vartotojoService.getJwtToken(email, password);
    }
    @CrossOrigin
    @PostMapping("/modifyVartotojas")
    public void modifyVartotojas(@RequestBody Vartotojas vartotojas) throws SQLException {
        vartotojoService.modifyVartotojas(vartotojas);
    }
    @CrossOrigin
    @GetMapping("/getVartotojas")
    public Vartotojas getVartotojas(@RequestHeader("Authorization") String token) throws SQLException {
       return vartotojoService.getVartotojas(token);
    }

}
