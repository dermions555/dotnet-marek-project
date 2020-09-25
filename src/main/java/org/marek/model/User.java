package org.marek.model;

import javax.persistence.Entity;

@Entity

public class User {
    private Integer id;
    private String name;
    private String surname;
    private Integer phoneNumber;
    private String mail;
    private String password;
    private Integer birthday;
    private Integer createDate;
    private Integer editDate;
    private Integer deleteDate;
}
