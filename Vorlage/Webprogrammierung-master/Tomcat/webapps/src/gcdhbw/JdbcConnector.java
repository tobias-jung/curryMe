package gcdhbw;

import java.sql.Connection;
import java.sql.DriverManager;

public class JdbcConnector {
 private static Connection conn;
 private static JdbcConnector instance;
 private JdbcConnector(){
  conn = null;
  try{
   Class.forName ("com.mysql.jdbc.Driver");
   conn = DriverManager.getConnection("jdbc:mysql://localhost/webproggen?user=root&password=");
  }
  catch(Exception e){
   System.out.println(e.getMessage());
  }
 }
 
 public static JdbcConnector getInstance(){
	 if(instance == null)
		 instance = new JdbcConnector();
	 return instance;
 }
 public Connection getConnection(){
  return conn;
 }
 public void closeConnection(){
  try{
   conn.close ();
  }catch (Exception e) {
   System.out.println ("Connection close error");
  }
 }

}