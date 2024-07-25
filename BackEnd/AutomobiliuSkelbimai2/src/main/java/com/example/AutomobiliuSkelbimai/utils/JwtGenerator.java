package com.example.AutomobiliuSkelbimai.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.UUID;

public class JwtGenerator {

    private static final String SECRET_KEY = "8h5f2r5f4h62t45f8h5f2r5f4h62t45f";

    public static String generateJwt(int userId) {
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        Date exp = new Date(nowMillis + 120 * 60 * 1000); // 120 minutes

        String jwt = Jwts.builder()
                .claim("UserId", String.valueOf(userId))
                .claim("DateOfLogin", new java.text.SimpleDateFormat("yyyy-MM-dd").format(now))
                .setIssuedAt(now)
                .setExpiration(exp)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        return jwt;
    }
}
