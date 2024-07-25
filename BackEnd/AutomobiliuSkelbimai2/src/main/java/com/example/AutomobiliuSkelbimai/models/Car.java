package com.example.AutomobiliuSkelbimai.models;

public class Car {

//pavadinimas, markė,modelis,metai,kaina,rida,aprašymas,nuotrauka).

    private int id;
    private String pavadinimas;
    private String marke;
    private String modelis;
    private int metai;
    private double kaina;
    private int rida;
    private String aprasymas;
    private byte[] nuotrauka;
    private boolean dauztos;

    // konstruktorius

    public Car(int id, String pavadinimas, String marke, String modelis, int metai, double kaina, int rida,
               String aprasymas, byte[] nuotrauka, boolean dauztos)

    {
        this.id = id;
        this.pavadinimas = pavadinimas;
        this.marke = marke;
        this.modelis = modelis;
        this.metai = metai;
        this.kaina = kaina;
        this.rida = rida;
        this.aprasymas = aprasymas;
        this.nuotrauka = nuotrauka;
        this.dauztos = dauztos;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public String getMarke() {
        return marke;
    }

    public void setMarke(String marke) {
        this.marke = marke;
    }

    public String getModelis() {
        return modelis;
    }

    public void setModelis(String modelis) {
        this.modelis = modelis;
    }

    public int getMetai() {
        return metai;
    }

    public void setMetai(int metai) {
        this.metai = metai;
    }

    public double getKaina() {
        return kaina;
    }

    public void setKaina(double kaina) {
        this.kaina = kaina;
    }

    public int getRida() {
        return rida;
    }

    public void setRida(int rida) {
        this.rida = rida;
    }

    public String getAprasymas() {
        return aprasymas;
    }

    public void setAprasymas(String aprasymas) {
        this.aprasymas = aprasymas;
    }

    public byte[] getNuotrauka() {
        return nuotrauka;
    }

    public void setNuotrauka(byte[] nuotrauka) {
        this.nuotrauka = nuotrauka;
    }

    public boolean isDauztos() {
        return dauztos;
    }

    public void setDauztos(boolean dauztos) {
        this.dauztos = dauztos;
    }

    public Car() {

    }
}
