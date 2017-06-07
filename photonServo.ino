 Servo serv;
 int pos = 0;

 void setup() {
     serv.attach(D0);
     Spark.function("setpos", setPos);
     Spark.variable("getpos", &pos, INT);
 }

 void loop() {
 }

 int setPos(String pstn) {
     pos = pstn.toInt();
     serv.write(pos);
     return pos;
 }
