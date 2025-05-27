<?php
//include'config.php';

?>

<?php 

if(isset($_POST['name'])){
   


include('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer(); // create a new object
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only        
$mail->IsHTML(true);
$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host     = "smtp.gmail.com";                 // Specify main and backup server
$mail->Port     = 465;                                    // Set the SMTP port
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->SMTPSecure = 'ssl';
$mail->Username = "smtp.cin@gmail.com";                // SMTP username From Isshan makkar side
$mail->Password = "ftfj zefa hook iuut";                  // SMTP password
$mail->From     = 'smtp.cin@gmail.com';
$mail->FromName = 'Alivaa Hotels';

$mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
);

$mail->Subject = "Animal Care";

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
  $created = date("Y-m-d");
	

	if(empty($name)){
  		die("Please enter your name.");
  	}if(empty($phone)){
  		die("Please enter your phone.");
  	}if(empty($email)){
  		die("Please enter your email.");
  	}if(empty($message)){
  		die("Please enter your message.");
  	}
  	if(preg_match('/^[0-9]{10}+$/', $phone)){

  	}else{
  		die('Please enter valid phone.');
  	}
  	if(filter_var($email, FILTER_VALIDATE_EMAIL)){

  	}else{
  		die('Please enter valid email.');
  	}

  
  /* $conn -> query ("INSERT INTO event_enquiry (name, phone,email, hotelname,guest ,dated,comment,created_date)
  VALUES ('$name', '$phone','$email','$destinations_new','$guest','$arrive','$comment','$created')");  */
  

    $mail->addAddress("tejvirarya@gmail.com"); //Recipient name is optional
 
 	$mail->Body = "<div>
	 				Dear Admin <br/>
	 				You recived a event enquiry from the application, please look following.<br/><br/>
	 				Name : $name <br/>
	 				Phone : $phone <br/>
	 				Subject : $subject <br/>
	 				Message : $message <br/><br/>

	 				Thanks

	 			</div>";	 
	 try {
		$mail->send();
	   	$response['status']='success';
	   	$response['message']='email sent succefully';
	    echo json_encode($response);
      	die;
	} catch (Exception $e) {
	    echo "Mailer Error: " . $mail->ErrorInfo;
	}
  

  	//echo "<script>window.location.href='/thankyou.php';</script>";
  	die;

}


?>