package com.example.backend.service;

import com.example.backend.controller.request.UserRegisterRequest;
import com.example.backend.model.User;

public interface UserService {

    User registerNewUser(UserRegisterRequest userRegisterRequest);
}
