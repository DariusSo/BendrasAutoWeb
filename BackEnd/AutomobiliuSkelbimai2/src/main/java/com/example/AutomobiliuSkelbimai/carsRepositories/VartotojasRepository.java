package com.example.AutomobiliuSkelbimai.carsRepositories;


import com.example.AutomobiliuSkelbimai.models.Car;
import com.example.AutomobiliuSkelbimai.models.Vartotojas;
import com.example.AutomobiliuSkelbimai.utils.Connect;
import com.example.AutomobiliuSkelbimai.utils.JwtGenerator;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class VartotojasRepository {

    public void addVartotojas(Vartotojas vartotojas) throws SQLException {
        PreparedStatement ps = Connect.SQLConnection("INSERT INTO users (name, email, password) " +
                "VALUES (?,?,?)");
        ps.setString(1, vartotojas.getName());
        ps.setString(2, vartotojas.getEmail());
        ps.setString(3, vartotojas.getPassword());
        ps.execute();
    }

    public String getJwtToken(String elPastas, String password) throws SQLException {
        String token = "";
        PreparedStatement ps = Connect.SQLConnection("SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1");
        ps.setString(1, elPastas);
        ps.setString(2, password);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            token = JwtGenerator.generateJwt(rs.getInt("id"));
            return token;
        }
        return "";
    }

    public void modifyVartotojas(Vartotojas vartotojas) throws SQLException {
        PreparedStatement ps = Connect.SQLConnection("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?");
        ps.setString(1, vartotojas.getName());
        ps.setString(2, vartotojas.getEmail());
        ps.setString(3, vartotojas.getPassword());
        ps.setInt(4, vartotojas.getId());
        ps.execute();
    }
    public Vartotojas getVartotojas(int id) throws SQLException {
        Vartotojas vartotojas = new Vartotojas();
        PreparedStatement ps = Connect.SQLConnection("SELECT * FROM users WHERE id = ? LIMIT 1");
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();
        if(rs.next()){
            vartotojas = new Vartotojas(rs.getInt("id"), rs.getString("name"), rs.getString("email"));
            return vartotojas;
        }
        return vartotojas;

    }
}
