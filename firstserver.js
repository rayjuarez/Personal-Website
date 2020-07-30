  const express = require("express");
  const app = express();
  const nodemailer = require("nodemailer");
  const PORT = process.env.PORT || 8080;
  app.use(express.urlencoded());
  app.use(express.static("styler"));

  app.post('/form.html', (req, res) => {
    //sends the email to visitor
    console.log('Data: ', req.body.fname, req.body.lname, req.body.email);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
        user: 'rayjuarez11@gmail.com',
        pass: 'Posen1997'
      }
    });

    const mailOptions = {
      from: 'rayjuarez11@gmail.com',
      to: req.body.email,
      subject: 'Thank you for visiting',
      html: '<p>Dear ' + req.body.fname + ' ' + req.body.lname +
      ',</p><p>Thank you for submitting feedback.</p><p>Sincerely,</p><p>Raymond Juarez</p>'
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        console.log(err);
      }
      else {
        console.log(info);
      }
    });
    res.redirect('back')
  })


  //website pages
  app.get('/', (request, response) => {
    response.sendFile(__dirname + '/webpage/index.html');
  });
  app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/index.html');
  });
  app.get('/photosandpoems.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/photosandpoems.html');
  });
  app.get('/scheduleandmusic.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/scheduleandmusic.html');
  });
  app.get('/game1.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/game1.html');
  });
  app.get('/form.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/form.html');
  });

  const listener = app.listen(PORT, () => {
    console.log("Personal website is LIVE at " + PORT);
  });
