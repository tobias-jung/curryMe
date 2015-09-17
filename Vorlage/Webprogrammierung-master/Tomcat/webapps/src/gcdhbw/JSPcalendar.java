package gcdhbw;

import java.text.DateFormat;
import java.util.*;

public class JSPcalendar {
	Calendar  calendar = null;

	public JSPcalendar() {
		calendar = Calendar.getInstance();
		Date trialTime = new Date();
		calendar.setTime(trialTime);
	}
	
	public int getYear() {
		return calendar.get(Calendar.YEAR);
	}
	  
	public String getMonth() {
		int m = getMonthInt();
		String[] months = new String [] { "Januar", "Februar", "März",
	        "April", "Mai", "Juni",
	        "Juli", "August", "September",
	        "Oktober", "November", "Dezember" };
		if (m > 12)
	    return "Datumsfehler [Monat]";
	
		return months[m - 1];
	}
	
	public String getDay() {
		int x = getDayOfWeek();
		String[] days = new String[] {"Sonntag", "Montag", "Dienstag", "Mittwoch", 
	            "Donnerstag", "Freitag", "Samstag"};
		if (x > 7)
	    return "Datumsfehler [TAG]";
	
		return days[x - 1];
	}
	  
	public int getDayOfWeek() {
		return calendar.get(Calendar.DAY_OF_WEEK);
	}
	
	public int getMonthInt() {
		return 1 + calendar.get(Calendar.MONTH);
	}
	
	public String getDate() {
		return getDay() + ", den " + getDayOfMonth() + "." + getMonth() + " " +  getYear();
	}
	
	public int getDayOfMonth() {
		return calendar.get(Calendar.DAY_OF_MONTH);
	}
	
	
	public static void main(String args[]) {
		JSPcalendar db = new JSPcalendar();
//		p("year: " + db.getYear());
//		p("month: " + db.getMonth());
//		p("Day: " + db.getDay());
//		p("date: " + db.getDate());
	}
	
	private static void p(String x) {
		System.out.println(x);
	}
}