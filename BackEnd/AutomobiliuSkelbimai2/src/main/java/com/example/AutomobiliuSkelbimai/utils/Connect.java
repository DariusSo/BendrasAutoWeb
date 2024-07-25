package com.example.AutomobiliuSkelbimai.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Connect {
    private static final String URL = "jdbc:mysql://localhost:3306/auto_skelbimu_portalas";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";

    private static Connection connection;

    public static PreparedStatement SQLConnection(String sqls) throws SQLException {
        connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        String sql = sqls;
        PreparedStatement ps = connection.prepareStatement(sql);
        return ps;
    }
}
