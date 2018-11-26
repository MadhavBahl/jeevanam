import requests.packages.urllib3
requests.packages.urllib3.disable_warnings()

import serial

arduinoData = serial.Serial('com3',9600)

from firebase import firebase

firebase = firebase.FirebaseApplication('https://my-first-project-7d21a.firebaseio.com')

while 1:
    tapData = (arduinoData.readline().strip())
    tapData = (tapData.decode('utf-8'))
    print 'TAP: ', tapData
    result = firebase.put('User1/','tapStatus',tapData)
    
