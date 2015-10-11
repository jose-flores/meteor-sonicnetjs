This package is a port of the sonicnetjs from https://github.com/borismus/sonicnet.js.
So all credits to Boris Smus (https://github.com/borismus)

# Documentation
  2 factor authentication have become a great tool to protect sensible systems from intruders. After reading interesting advances on basic and old forms of computer protocols and articles like <a href="http://smus.com/ultrasonic-networking/">Ultrasonic networking on the web</a> we have found an useful application of such techniques: Sending/Receiving the token of a 2 factor authentication method.

  Based on the code of <a href="https://github.com/borismus">Boris Smus</a> we are making this feature available to meteor coders.

# Example
  On one end load the server to listen the audio:
  sserver = new SonicServer();

  On the other end, create an instance of the emitter of the message:
  var MESSAGE = '314159';
  ssocket = new SonicSocket();
  ssocket.send(MESSAGE);

  There are plenty of options you can provide to both objects, please read the source code
# Tests
