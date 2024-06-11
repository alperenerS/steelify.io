const getOrderConfirmationToAdminEmailHtml = (orderData, username, email) => `
<html>
  <body style="background-color: #f6f9fc; padding: 10px 0;">
    <div style="background-color: #ffffff; border: 1px solid #f0f0f0; padding: 45px;">
      <img src="https://yenastorage.blob.core.windows.net/steelify/steelify_logo.png" width="180" height="60" alt="Steelify Logo" style="display: block; margin: 0 auto;" />
      <div>
        <p style="font-size: 16px; font-family: 'Open Sans', 'Helvetica Neue', Arial; font-weight: 300; color: #404040; line-height: 26px;">
          Hi Admin Team,
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'Helvetica Neue', Arial; font-weight: 300; color: #404040; line-height: 26px;">
          A new order has been created by ${username} (${email}). Below are the details of the order:
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'Helvetica Neue', Arial; font-weight: 300; color: #404040; line-height: 26px;">
          Order ID: ${orderData.name}<br/>
          Order Details: ${JSON.stringify(orderData)}
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'Helvetica Neue', Arial; font-weight: 300; color: #404040; line-height: 26px;">
          Please check the admin panel for more information.
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'Helvetica Neue', Arial; font-weight: 300; color: #404040; line-height: 26px;">
          Best regards,<br/>
          Steelify Team
        </p>
      </div>
    </div>
  </body>
</html>
`;

export default getOrderConfirmationToAdminEmailHtml;
