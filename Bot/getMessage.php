<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
</body>
</html>
<?php
header('Content-Type: text/html; charset=utf-8');
$access_token = '';
$content = file_get_contents('php://input');
$content = utf8_encode($content); 
$events = json_decode($content, true);
date_default_timezone_set("Asia/Bangkok");
if (!is_null($events['events'])) {
	foreach ($events['events'] as $event) {
		if($event['type'] == 'message' && $event['message']['type'] == 'text'){
			$text = mb_convert_encoding($event['message']['text'], "UTF-8", "Windows-1252");
			$text_lower=strtolower($text);
			$replyToken = $event['replyToken'];
			$servername = "";
			$username = "";
			$password = "";
			$textSend="BotGos ยังไม่ทราบรายละเอียดดังกล่าว <(T0T)>";
			try{
				$conn = new PDO("mysql:host=$servername;dbname=", $username, $password);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$sql_messenger = "INSERT INTO messenger(text_message, send_at)
				VALUES ('".$text."', '".date("Y-m-d h:i:sa")."')";
				$conn->exec($sql_messenger);
				$query = $conn->query("SELECT * FROM my_info");
				$query->execute();
				while($rows = $query->fetch(PDO::FETCH_ASSOC)){
					$statusTextLower=strpos($text_lower,$rows['text_message']);
					if($statusTextLower!==FALSE){
						$textSend=$rows['info'];
					}
				}
			}catch(PDOException $e){
			}			
			$messages = [
				'type' => 'text',
				'text' => $textSend
			];
			$url = 'https://api.line.me/v2/bot/message/reply';
			$data = [
				'replyToken' => $replyToken,
				'messages' => [$messages],
			];
			$post = json_encode($data);
			$headers = array('Content-Type: application/json', 'Authorization: Bearer ' . $access_token);
			$ch = curl_init($url);
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
			curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			$result = curl_exec($ch);
			curl_close($ch);
			echo $result . "\r\n";
		}
	}
}