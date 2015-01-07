
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio Caroline Vien</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    <body>
          <?php 
          $formNom = $_POST['nom'];
          $formMail = $_POST['mail'];
          $formMessage = $_POST['message'];
          if(!empty($formNom) && !empty($formMail) && !empty($formMessage)){
              $formMessage = htmlentities($formMessage);
              $message = "$formNom vous contact via votre formulaire.\n\nVoici le contenu du message : \n$formMessage \n\nLui répondre à l'adresse suivante : $formMail" ;
                if( mail('clement.schepens@gmail.com','sujet', $message) ){
                  echo 'Les informations ont bien été envoyées.';
                }
                else{
                  echo 'Une erreur est survenue lors de l\'envoi du message.';
                }
              }
              else{
                echo 'Merci de remplir tous les champs.';
              }
          ?>
          <div class="cl-effect-2">
            <a href="index.html">Revenir à l'accueil</a>
          </div> 
  </body>
</html>