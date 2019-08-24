<script text="text/javascript">
     function tambah(){ 
      a=eval(document.getElementById("a").value);
      b=eval(document.getElementById("b").value);
      c=a+b;
      document.getElementById("hasil").value=c; 
       }
</script> 
<script text="text/javascript">
       function kurang(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a-b;
      document.getElementById("hasil").value=c; 
       }
</script>
<script text="text/javascript">
       function kali(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a*b;
      document.getElementById("hasil").value=c; 
       }
</script> 
<script text="text/javascript">
       function bagi(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a/b;
      document.getElementById("hasil").value=c; 
       }
</script> 

Untuk lebih jelasnya, kita bisa lihat koding lengkapnya seperti dibawah ini:

<html>
<head>
<title>Kalkulator Sederhana</title>
<script text="text/javascript">
     function tambah(){ 
      a=eval(document.getElementById("a").value);
      b=eval(document.getElementById("b").value);
      c=a+b;
      document.getElementById("hasil").value=c; 
       }
</script> 
<script text="text/javascript">
       function kurang(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a-b;
      document.getElementById("hasil").value=c; 
       }
</script>
<script text="text/javascript">
       function kali(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a*b;
      document.getElementById("hasil").value=c; 
       }
</script> 
<script text="text/javascript">
       function bagi(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a/b;
      document.getElementById("hasil").value=c; 
       }
</script> 
 </head>
<body>
     <form>
          <table>
             <tr>
                 <td>Inputan 1</td>
                  <td>:</td>
                  <td><input type="text" id="a" name="a"></td>
             </tr>  
              <tr>
                 <td>Inputan 2</td>
                  <td>:</td>
                  <td><input type="text" id="b" name="b"></td>
             </tr> 
              <tr>
                 <td>Hasil</td>
                  <td>:</td>
                  <td><input type="text" id="a" name="a"></td>
             </tr> 
             <tr>
                  <td></td><td></td>
                  <td><input type="button" value="+" onClick="tambah()">
                          <input type="button" value="-" onClick="kurang()">
                         <input type="button" value="x" onClick="kali()">
                         <input type="button" value="/" onClick="bagi()"> 
             </tr>
          </table>
    </form>
</body>
</html>