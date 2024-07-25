package com.example.AutomobiliuSkelbimai.services;

import com.example.AutomobiliuSkelbimai.carsRepositories.VartotojasRepository;
import com.example.AutomobiliuSkelbimai.models.Car;
import com.example.AutomobiliuSkelbimai.models.Vartotojas;
import com.example.AutomobiliuSkelbimai.utils.JwtDecoder;
import io.jsonwebtoken.Claims;

import java.sql.SQLException;

public class VartotojoService {

    VartotojasRepository vartotojasRepository = new VartotojasRepository();
    public void addVartotojas(Vartotojas vartotojas) throws SQLException {
        vartotojasRepository.addVartotojas(vartotojas);
    }
    public String getJwtToken(String email, String password) throws SQLException {
        return vartotojasRepository.getJwtToken(email, password);
    }
    public void modifyVartotojas(Vartotojas vartotojas) throws SQLException {
        vartotojasRepository.modifyVartotojas(vartotojas);
    }
    public Vartotojas getVartotojas(String token) throws SQLException {
        Claims claims = JwtDecoder.decodeJwt(token);
        return vartotojasRepository.getVartotojas(Integer.parseInt((String) claims.get("UserId")));
    }
}
