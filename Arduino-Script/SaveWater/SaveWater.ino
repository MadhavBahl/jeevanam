int inputRead;
const int trigPin = 2;
const int echoPin = 4;
const int GreenledPin = 13;
const int RedledPin = 12;
int prevState = 0;

// State 0 depicts TAP OFF
// State 1 depicts TAP ON
// State 2 depicts WATER WASTAGE

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(GreenledPin,OUTPUT);
  pinMode(RedledPin,OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  inputRead = analogRead(A0);
  // Serial.println(inputRead);
   // establish variables for duration of the ping, 
  // and the distance result in inches and centimeters:
  long duration, inches, cm;

  // The sensor is triggered by a HIGH pulse of 10 or more microseconds.
  // Give a short LOW pulse beforehand to ensure a clean HIGH pulse:
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Read the signal from the sensor: a HIGH pulse whose
  // duration is the time (in microseconds) from the sending
  // of the ping to the reception of its echo off of an object.
  
  duration = pulseIn(echoPin, HIGH);

  // convert the time into a distance
  inches = microsecondsToInches(duration);
  cm = microsecondsToCentimeters(duration);
//  Serial.prin/tln(cm);
  /*
    Serial.print(inches);
    Serial.print("in, ");
    Serial.print(cm);
    Serial.print("cm");
    Serial.println();
  */
//  Serial.println(inputRead);  // This is to print the raindrop module input
  if(cm < 55 && inputRead < 680 ){
    digitalWrite(GreenledPin,HIGH);
    digitalWrite(RedledPin,LOW);
    if (prevState != 1) {
      Serial.println("TapOn");
      prevState = 1;  
    }
    
  }
  else if(cm  > 55 && inputRead < 680 ){
    digitalWrite(RedledPin,HIGH); 
    digitalWrite(GreenledPin,LOW);
    if (prevState != 2) {
      Serial.println("WaterWaste");
      prevState = 2;
    }
  }  
  else{
    digitalWrite(RedledPin,LOW); 
    digitalWrite(GreenledPin,LOW);
    if (prevState != 0) {
      Serial.println("TapOff");
      prevState = 0;
    }
  }
  delay(450);
}
long microsecondsToInches(long microseconds)
{
  // According to Parallax's datasheet for the PING))), there are
  // 73.746 microseconds per inch (i.e. sound travels at 1130 feet per
  // second).  This gives the distance travelled by the ping, outbound
  // and return, so we divide by 2 to get the distance of the obstacle.
  // See: http://www.parallax.com/dl/docs/prod/acc/28015-PING-v1.3.pdf
  return microseconds / 74 / 2;
}

long microsecondsToCentimeters(long microseconds)
{
  // The speed of sound is 340 m/s or 29 microseconds per centimeter.
  // The ping travels out and back, so to find the distance of the
  // object we take half of the distance travelled.
  return microseconds / 29 / 2;
}
