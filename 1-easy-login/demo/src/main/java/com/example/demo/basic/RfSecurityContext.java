package java.com.example.demo.basic;

import java.com.example.demo.model.*;

import javax.ws.rs.core.SecurityContext;
import java.security.Principal;

public class RfSecurityContext implements SecurityContext {
    private Session loginSession;

    public RfSecurityContext(Session loginSession) {
        this.loginSession = loginSession;
    }

    // Returns the session if the user is logged on
    @Override
    public Principal getUserPrincipal() {
        if (loginSession == null)
            return null;

        return loginSession;
    }

    // Checks if the role and the users group is the same
    @Override
    public boolean isUserInRole(String role) {
        if (loginSession == null) return false;

        MockDao dao = MockDao.getInstance();

        for (User user : dao.getUsers()) {
            if (user.getUsername().equals(loginSession.getName())) {
                // In our simplification each user only has one group
                return user.getGroup().name().equalsIgnoreCase(role);
            }
        }

        return false;
    }

    // Simple check for if the request is done via a secure channel such as https
    @Override
    public boolean isSecure() {
        return false;
    }

    // Just basic auth here, you can look into the others, if interested
    @Override
    public String getAuthenticationScheme(){
        return this.BASIC_AUTH;
    }
}