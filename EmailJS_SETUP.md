# EmailJS Setup Instructions

## Step 1: Create an EmailJS Account
1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account.
2. The free plan allows 200 emails per month which should be enough for a small-medium website.

## Step 2: Create an Email Service
1. Login to your EmailJS dashboard
2. Go to "Email Services" tab
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the steps to connect your email account
6. Name your service (e.g., "gmail" or "kh_contact_service")
7. Note down the **Service ID**

## Step 3: Create an Email Template
1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Design your email template:
   - Add a subject (e.g., "New Contact Form Submission from K.H. STR Design Solution")
   - Create the body of the email including variables like {{from_name}}, {{from_email}}, etc.
   - Sample template:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{from_phone}}
   Service: {{service}}
   
   Message:
   {{message}}
   ```
4. Save the template
5. Note down the **Template ID**

## Step 4: Get your Public Key
1. Go to "Account" tab
2. Copy your **Public Key**

## Step 5: Update the Contact.jsx File
1. Open your `Contact.jsx` file
2. Replace the placeholders with your actual IDs:
   - Replace `YOUR_EMAILJS_SERVICE_ID` with your Service ID 
   - Replace `YOUR_EMAILJS_TEMPLATE_ID` with your Template ID
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your Public Key

## Step 6: Test the Form
1. Run your website locally: `npm run dev`
2. Open the contact form and submit a test message
3. Check your email inbox to verify the email is received

## Note
- The email will be sent from the email account you connected to EmailJS
- The recipient email will be the same unless you specify a different "To Email" in the template settings
- For production, you may want to consider upgrading to a paid plan if you expect more than 200 emails per month

## Troubleshooting
- If emails are not being received, check your spam folder
- Verify your EmailJS IDs are correct
- Check the browser console for any errors
- Make sure your EmailJS account is verified
