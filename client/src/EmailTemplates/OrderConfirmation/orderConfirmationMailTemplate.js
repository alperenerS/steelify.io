const getOrderConfirmationEmailHtml = (username, orderId, CLIENT_BASE_URL) => `
<html>
  <body style="background-color: #f6f9fc; padding: 10px 0;">
    <div style="background-color: #ffffff; border: 1px solid #f0f0f0; padding: 45px;">
      <img src="https://yenastorage.blob.core.windows.net/steelify/steelify_logo.png" width="180" height="60" alt="Steelify Logo" style="display: block; margin: 0 auto;" />
      <div>
        <p style="font-size: 16px; font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; color: #404040; line-height: 26px;">
          Hi ${username},
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; color: #404040; line-height: 26px;">
          Thank you for your order! Your order ID is ${orderId}. You can view your order details by clicking the button below.
          <a href="${CLIENT_BASE_URL}/request-details/${orderId}" style="background-color: #007ee6; border-radius: 4px; color: #fff; font-family: 'Open Sans', 'Helvetica Neue', Arial; font-size: 15px; text-decoration: none; text-align: center; display: block; width: 210px; padding: 14px 7px; margin-top: 20px;">
            View Order Details
          </a>
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; color: #404040; line-height: 26px;">
          If you have any questions, feel free to contact our support team.
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; color: #404040; line-height: 26px;">
          Thank you for choosing Steelify!
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; color: #404040; line-height: 26px;">
          Best regards,
        </p>
        <p style="font-size: 16px; font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; color: #404040; line-height: 26px;">
          Steelify Team
        </p>
      </div>
    </div>
  </body>
</html>
`;

export default getOrderConfirmationEmailHtml;
