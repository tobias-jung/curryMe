package gcdhbw;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class Main {
  public static String veranstaltungen = "Veranstaltungen: ";
  public static void main(String[] args) {
	  
  }
  public void getDatenbank() throws SQLException{
	  
	  final Connection conn;
//	   String userName = "testuser";
//	   String password = "testpass";
//	   String url = "jdbc:mysql://localhost/test?user="
//	                   + userName
//	                   + "&password="
//	                   + password;
	   try {
		 conn = JdbcConnector.getInstance().getConnection();
		 Statement s = conn.createStatement ();
		 
		 ResultSet result = s.executeQuery("SELECT * FROM veranstaltungen");
		   
		 while(result.next()){
		   System.out.println("Name: " + result.getString("Name"));
		   veranstaltungen = veranstaltungen + result.getString("Name");
		 }
		 
		 s.close();
		 
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}

//	   int count;
//	   s.executeUpdate ("DROP TABLE IF EXISTS animal");
//	   s.executeUpdate (
//	               "CREATE TABLE animal ("
//	               + "id INT UNSIGNED NOT NULL AUTO_INCREMENT,"
//	               + "PRIMARY KEY (id),"
//	               + "name CHAR(40), category CHAR(40))");
//	   count = s.executeUpdate (
//	               "INSERT INTO animal (name, category)"
//	               + " VALUES"
//	               + "('snake', 'reptile'),"
//	               + "('frog', 'amphibian'),"
//	               + "('tuna', 'fish'),"
//	               + "('racoon', 'mammal')");
	   
//	   System.out.println (count + " rows were inserted");
  }
  
  public String getVeranstaltungen(){

		try {
			getDatenbank();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			veranstaltungen = veranstaltungen + "SQLExceptions";
		}
		veranstaltungen = veranstaltungen + "Datenbank";
	  return veranstaltungen;
  }

} 