# Import the following modules 
from pushbullet import Pushbullet 

from pywebio.input import *  
from pywebio.output import *  
from pywebio.session import *  
import time  
# Get the access token from Pushbullet.com  
access_token ="o.1cUCjl3gkSKIeLFvTxegntXtiwxrGDq9" 
# Taking input from the user  
data = input('Enter the title: ')  
# Taking large text input from the user  
    
text = textarea(  
    
"Text", rows=3, placeholder="Write some text...",  
    
required=True)  
    
# Get the instance using the access token  
    
pb = PushBullet(access_token)  
    
# Send the data by passing the main title  
    
# and text to be send  
    
push = pb.push_note(data, text)  
    
# Put a success message after sending  
    
# the notification  
put_success("Message sent successfully...")  
# Sleep for 3 seconds  
time.sleep(3)  
# Clear the screen  
clear()  
# Give the pop at last  
toast("Thanks for Using :)")  
# hold the session until the whole work finishes  
hold()  



if (!('serviceWorker' in navigator)) {
  // Service Worker isn't supported on this browser, disable or hide UI.
  return;
}

if (!('PushManager' in window)) {
  // Push isn't supported on this browser, disable or hide UI.
  return;
}