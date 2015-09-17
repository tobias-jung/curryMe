package gcdhbw;

import java.io.IOException;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DatenbankServlet
 */
@WebServlet("/DatenbankServlet")
public class DatenbankServlet extends HttpServlet {
	public String veranstaltungen;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DatenbankServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		try{
//			Class.forName("com.mysql.jdbc.Driver").newInstance();
			new com.mysql.jdbc.Driver();
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/webproggen?user=root&password=");
//			Connection conn = JdbcConnector.getInstance().getConnection();
			Statement stat = conn.createStatement();
			ResultSet result = stat.executeQuery("SELECT * FROM veranstaltungen");
		   out.println("<link rel=stylesheet type=text/css media=all href=http://localhost/webproggen/css/style-Servlet.css>");
			while(result.next()){
				out.println("<a href=#>" + result.getString("Datum") + " " + result.getString("Name") + "</a><br><br>");
				veranstaltungen = veranstaltungen + result.getString("Name");
			}
		}
		catch(Exception ex){
			out.println("Fehler: " + ex.getMessage());
		}
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
