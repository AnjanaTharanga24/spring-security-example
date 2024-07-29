package com.example.backend.controller;

import com.example.backend.model.Role;
import com.example.backend.service.RoleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RoleController {

    private RoleService roleService;

    @PostMapping("/roles")
    public Role createRoles(@RequestBody Role role){
        return roleService.createRoles(role);
    }
}
