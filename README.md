# Okta Signin Widget HIBP Checker

**Please note this is NOT an office Okta tool, and the Okta support does NOT provide support for this.**
This is merely a personal projct.

## What does this tool do?
In the widget's "registration" context, the password entered by the user to perform self-registration will have checked against [HIBP](https://haveibeenpwned.com/) prior to submitting the information to perform a self-registration.
In this demo, the widget will **NOT** actual register you.  The widget will only go as far as performing a check against [HIBP](https://haveibeenpwned.com/) and returing the number of times, the password has been found to be breached.  The results will be displayed on the terminal window.

## Screenshots 
![](Capture-1-ENG.PNG)
![](Capture-2-ENG.PNG)

## Pre-requisites for running this application
- Nodejs setup with Angluar CLI
- Okta developer account - If you do not have one already, you can sign up for a free trial [here](https://developer.okta.com/signup/).
- Create an OIDC application in the Okta admin console to obtain the below information.
  - Client ID
  - redirect URL (you need to set this)
  - Authorisation server URL
  - Set CORS to allow redirect
 
## How to run this tool
`git clone https://github.com/mortpanda/okta-siw-hibp-check.git`

