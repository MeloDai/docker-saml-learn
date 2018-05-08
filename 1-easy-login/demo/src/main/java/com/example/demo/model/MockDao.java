package java.com.example.demo.model;

import java.com.example.demo.model.Group;
import java.com.example.demo.model.Session;
import java.com.example.demo.model.User;
import java.com.example.demo.security.*;

import java.util.ArrayList;
import java.util.List;

public class MockDao {
	private static MockDao instance = new MockDao();
    private List<User> users = new ArrayList<>();
    private List<Session> sessions = new ArrayList<>();

    private MockDao() {
        
    }

    public void addUser(String username, String password) {
    	User newUser = pwdHashSalt.setPwdHashSalt(new User(username, password, "", "", Group.USER));
    	users.add(newUser);
    	String token = new TokenProcessor().generateToken("Vicky",true); 
    	sessions.add(new Session(username, token));
    }
    
    public static MockDao getInstance() {
        return instance;
    }

    public List<User> getUsers() {
        return users;
    }

    public List<Session> getSessions() {
        return sessions;
    }
}
