<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<body>
<table>
<tr>
<th>Book name</th>
<th> Author name </th>
<th> Genre  </th>
<th> Publication </th>
<th> ISBN </th>
</tr>
<xsl:apply-templates select="//entries" >
</table>
</body>
</html>
</xsl:template>

<xsl: template match="entries">
<tr>
<td><xsl:value-of select="title/name"/></td>
<td><xsl:value-of select="title/author"/></td>
<td><xsl:value-of select="title/genre"/></td>
<td><xsl:value-of select="publication/year"></td>
<td><xsl:value-of select="publication/isbn"></td>
</tr>
</xsl:template>
</xsl:stylesheet>