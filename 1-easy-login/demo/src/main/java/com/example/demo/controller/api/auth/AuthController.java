package com.example.demo;

import java.com.example.demo.model.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import java.io.IOException;
import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;
import org.springframework.security.crypto.bcrypt.BCrypt;

@Controller
public class AuthController {
    @RequestMapping(value = "/api/auth/login", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded", produces = MediaType.APPLICATION_JSON) 
    @ResponseBody
	public Response loginFun() {
		System.out.println("checking...");

        return Response.ok("wuha").build();
	} 
}