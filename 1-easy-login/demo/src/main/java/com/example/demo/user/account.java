package java.com.example.demo.user;

import java.com.example.demo.model.*;

import java.io.IOException;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;
import org.springframework.security.crypto.bcrypt.BCrypt;

@Path("/easyLogin/auth")
@PermitAll
public class account {
    @POST
    @Path("login")
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public Response loginFun(@BeanParam LoginRequest loginRequest) throws IOException {
    	System.out.println("checking...");

        return Response.ok().build();

/*
        MockDao dao = MockDao.getInstance();

        for (User user : dao.getUsers()) {
            if (user.getUsername().equals(loginRequest.getUsername())) {
            	if(BCrypt.checkpw(loginRequest.getPassword(), user.getPwdHash())) {
	                for (Session session : dao.getSessions()) {
	                    if (session.getName().equals(loginRequest.getUsername())) {
	                        return Response.ok(session.getToken()).build();
	                    }
	                }
            	}
            	else {
            		return Response.status(Response.Status.UNAUTHORIZED).build();
            	}
            }
        }
        

        return Response.status(Response.Status.NOT_FOUND).build();
        */
    }
    
    @POST
    @Path("signUp")
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public Response signupFun(@BeanParam SignupRequest signupRequest) throws IOException {
    	System.out.println("signUp...");
        MockDao dao = MockDao.getInstance();
        
        for (User user : dao.getUsers()) {
            if(user.getUsername().equals(signupRequest.getUsername())) {
            	return Response.status(Response.Status.CONFLICT).build();
            }
        }
        
        dao.addUser(signupRequest.getUsername(), signupRequest.getPassword());
        
        return Response.status(Response.Status.CREATED).build();
    }
}
