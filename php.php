<!DOCTYPE html>
<html>
<head>
  <title>Exemplo PHP</title>
</head>
<body>
  <h1>Data e Hora Atual</h1>
  <?php
    // Definir o fuso horário
    date_default_timezone_set('America/Sao_Paulo');
  
    // Obter a data e hora atual
    $dataHoraAtual = date('d/m/Y H:i:s');
  
    // Exibir a data e hora atual
    echo "<p>A data e hora atual é: $dataHoraAtual</p>";
  ?>
</body>
</html>
