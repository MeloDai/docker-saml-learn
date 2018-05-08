package java.com.example.demo.basic;

import java.com.example.demo.model.*;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.SecurityContext;
import java.io.IOException;

@PreMatching
@Priority(Priorities.AUTHORIZATION)
public class AuthFilter implements ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        String auth = requestContext.getHeaders().getFirst("authorization");

        if(auth == null)
            return;

        String[] loginAndToken = BasicAuth.decode(auth);

        //If login or password fail
        if(loginAndToken == null || loginAndToken.length != 2)
            return;

        MockDao dao = MockDao.getInstance();

        // Here a database over active sessions should be used to validate
        Session session = null;
        for (Session activeSession : dao.getSessions()) {
            if (activeSession.getName().equals(loginAndToken[0])
                    && activeSession.getToken().equals(loginAndToken[1])) {
                session = activeSession;
            }
        }

        if (session == null)
            return;

        SecurityContext securityContext = new RfSecurityContext(session);
        requestContext.setSecurityContext(securityContext);
    }
}
