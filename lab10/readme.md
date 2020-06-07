#lab10文档
##exercise7
+ pdo
    ```
     $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    ```
    连接数据库。
    ```
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    ```  
    setAttribute — 设置属性 
    ```
    $sql = "select * from Artists order by LastName";
    $result = $pdo->query($sql);
    ```
    设置查询，返回结果集。  ![屏幕截图_23_](images/屏幕截图(23)_1.png)
    ``` 
    while ($row = $result->fetch()) {
            echo $row['ArtistID'] . " - " . $row['LastName'] . "<br/>";
        }
        $pdo = null;
    ```
    进入循环，获得数据行，输出内容。
    最后释放资源，关闭数据库连接。


+ mysqli
   ```
    $connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
   ```
    mysqli函数，连接到MySQL服务器，获得数据库资源。
    ``` 
  if ( mysqli_connect_errno() ) {
               die( mysqli_connect_error() );
           }
  ```
    检查尝试连接的结果。
    ```
   $sql = "select * from Genres order by GenreName";
  ```
  设置所执行查询。
  ```
  if ($result = mysqli_query($connection, $sql)) {
             // loop through the data
             while($row = mysqli_fetch_assoc($result)) {
                 echo '<option value="' . $row['GenreID'] . '">';
                 echo $row['GenreName'];
                 echo "</option>";
             }
             // release the memory used by the result set
             mysqli_free_result($result);
         }
  ```
  如果查询成功，进入循环，mysqli_fetch_assoc()返回代表读取行的关联数组。如果结果集中没有更多的行则返回 NULL。输出option 标签及其内容。循环结束后，释放结果集。
  ```
  mysqli_close($connection);
  ```
  断开数据库连接。
  ![屏幕截图_24_](images/屏幕截图(24)_1.png)
##exercise8
+ outputArtists()
   通过PDO连接Artists数据库，获得30行数据，在循环中将每一行的LastName在a标签中输出，并设置a标签的各项属性，通过if判断改变其class属性。最后释放资源，断开数据库连接。
+ outputPaintings()
   同样通过PDO连接Paintings数据库，通过点击获得的id定位得到数据，进入循环，执行outputSinglePainting方法，最后释放资源，断开数据库连接。
+ outputSinglePainting($row)
   此方法通过获得的$row，定位url输出照片，标题以及介绍，
   ![屏幕截图_26_](images/屏幕截图(26)_1.png)
 

##exercise9
+ ResultSet  executeQuery（String sql）throws SQLException：专用于查询。

+ int  executeUpdate（String sql）throws SQLException：执行DDL、DML语句，前者返回0，后者返回受影响行数。

+ boolean execute（String sql）throws SQLException：可执行任何SQL 语句。如果执行后第一个结果为ResultSet（即执行了查询语句），则返回true；如果执行了DDL、DML语句，则返回false。返回结果为true，则随后可通过该Statement对象的getResultSet()方法获取结果集对象（ResultSet类型），返回结果为false，则可通过Statement对象的getUpdateCount（）方法获得受影响的行数。
####PreparedStatement
+ PreparedStatement预编译SQL语句，性能更好，执行更快。

+ PreparedStatement无须“拼接”SQL 语句，编程更简单。

+ PreparedStatement可以防止SQL 注入（如将输入的true当成直接量，导致判断直接通过，从而降低了安全性），安全性更好。
##exercise10
+ function outputGenres()
  
  利用pdo建立连接，从Genres表中获取GenreId, GenreName, Description，在循环中执行outputSingleGenre()方法；
+ function outputSingleGenre($row)

   通过获得的$row，写入html文本，输出图片，执行constructGenreLink($id, $label)方法。
   
+ function constructGenreLink($id, $label) 
 
  输出链接a,链接另一个页面genre.php。 
  ![屏幕截图_27_](images/屏幕截图(27)_1.png)
