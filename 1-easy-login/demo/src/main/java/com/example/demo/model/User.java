package java.com.example.demo.model;

public class User {
	private String username, password, pwdHash, pwdSalt;
    private Group group;

    /*
     * Many frameworks doing serialization/deserialization unfortunately requires this
     */
    public User() {
    }

    public User(String username, String password, String pwdSalt, String pwdHash, Group group) {
        this.username = username;
        this.password = password;
        this.pwdHash = pwdHash;
        this.pwdSalt = pwdSalt;
        this.group = group;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getPwdSalt() {
    	return pwdSalt;
    }
    
    public void setPwdSalt(String pwdSalt) {
    	this.pwdSalt = pwdSalt;
    }
    
    public String getPwdHash() {
    	return pwdHash;
    }
    
    public void setPwdHash(String pwdHash) {
    	this.pwdHash = pwdHash;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }
}
