package com.example.backend.service.impl;

import com.example.backend.model.Role;
import com.example.backend.repository.RoleRepository;
import com.example.backend.service.RoleService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RoleServiceImpl implements RoleService {

    private RoleRepository roleRepository;
    @Override
    public Role createRoles(Role role) {
        Role newRole = new Role();
        newRole.setName(role.getName());
        return roleRepository.save(newRole);
    }
}
