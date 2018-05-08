package java.com.example.demo.model;

import java.security.Principal;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Session implements Principal{
	private String name, token;

    /*
     * Many frameworks doing serialization/deserialization unfortunately requires this
     */
    public Session() {
    }

    public Session(String username, String token) {
        this.name = username;
        this.token = token;
    }

    public String getName() {
        return name;
    }

    public void setName(String username) {
        this.name = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
