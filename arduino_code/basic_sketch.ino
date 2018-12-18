int i = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial){
    // Wait for serial port
  }
  Serial.println("Connected");
}

void loop() {
  Serial.print("Sending Connect Count # ");
  Serial.println(i);
  i++;
  delay(1000);
}
