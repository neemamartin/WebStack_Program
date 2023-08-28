<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Employee Information</title>
      </head>
      <body>
        <h1>Employee Information</h1>
        <table border="1">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          <xsl:apply-templates select="//employee"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="employee">
    <tr>
      <td><xsl:value-of select="personalInformation/firstName"/></td>
      <td><xsl:value-of select="personalInformation/lastName"/></td>
      <td><xsl:value-of select="personalInformation/dateOfBirth"/></td>
      <td><xsl:value-of select="personalInformation/gender"/></td>
      <td><xsl:value-of select="employmentInformation/position"/></td>
      <td><xsl:value-of select="employmentInformation/salary"/></td>
      <td><xsl:value-of select="contactInformation/email"/></td>
      <td><xsl:value-of select="contactInformation/phoneNumber"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
