<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
<head>
<style type="text/css">
body {
	background:#FFF;
	color: #333;
	font-family: 'Droid Sans',Arial,Verdana,sans-serif;
	font-size: 13px;
}
</style>
<%@ page session="false"%>
</head>

<body bgcolor="white">
<jsp:useBean id='clock' scope='page' class='gcdhbw.JSPcalendar' type="gcdhbw.JSPcalendar" />
	<jsp:getProperty name="clock" property="date"/>

</body>
</html>