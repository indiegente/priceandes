package andes.business.pojos;

import andes.business.generic.Generic;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.io.Serializable;
import java.lang.Exception;
import java.util.ArrayList;
import java.util.HashMap;

public class Concept implements Serializable{
    private String tipo;
    private String label;
    private String calc;
    private String id;
    private int orden;
    private HashMap<Integer,String> options;

    public static void main(String args[]) throws Exception{
        System.out.println("TEST");
        ArrayList<Concept> conceptos = new ArrayList<Concept>();
        Concept a = new Concept();
        a.setId("precio");
        a.setTipo(Generic.TIPO_WIDGET_INPUT);
        a.setLabel("Precio");
        a.setOrden(1);
        a.setCalc(null);
        conceptos.add(a);

        a = new Concept();
        HashMap<Integer,String> options = new HashMap<Integer, String>();
        options.put(20,"Full - 20TM");
        options.put(40,"Full - 40TM");

        a.setId("cantidad");
        a.setTipo(Generic.TIPO_WIDGET_DROPDOWN);
        a.setLabel("Tipo Contenedor");
        a.setOrden(2);
        a.setOptions(options);
        a.setCalc(null);
        conceptos.add(a);

        a = new Concept();
        a.setId("producto");
        a.setTipo(Generic.TIPO_WIDGET_INPUT);
        a.setLabel("Producto");
        a.setOrden(3);
        a.setCalc("precio + cantidad");
        conceptos.add(a);

        JsonObject objeto = new JsonObject();
        objeto.add("conceptos", new Gson().toJsonTree(conceptos));
        System.out.println(objeto);
    }

    public String getTipo() {return tipo;}
    public void setTipo(String tipo) {this.tipo = tipo;}
    public String getLabel() {return label;}
    public void setLabel(String label) {this.label = label;}
    public String getCalc() {return calc;}
    public void setCalc(String calc) {this.calc = calc;}
    public String getId() {return id;}
    public void setId(String id) {this.id = id;}
    public int getOrden() {return orden;}
    public void setOrden(int orden) {this.orden = orden;}
    public HashMap<Integer, String> getOptions() {return options;}
    public void setOptions(HashMap<Integer, String> options) {this.options = options;}
}