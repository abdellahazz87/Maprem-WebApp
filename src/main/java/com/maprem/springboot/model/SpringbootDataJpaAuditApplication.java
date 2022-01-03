package com.maprem.springboot.model;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SpringbootDataJpaAuditApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootDataJpaAuditApplication.class, args);
    }

}