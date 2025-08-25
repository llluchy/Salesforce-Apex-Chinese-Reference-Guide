# Crypto 类验证方法详细文档

## verify(algorithmName, data, signature, publicKey)

使用指定算法和提供的公钥验证数据 blob 的数字签名。使用此方法验证使用第三方应用程序或 sign 方法创建的数字签名签名的 blob。

### 签名

```apex
public static Boolean verify(String algorithmName, Blob data, Blob signature, Blob publicKey)
```

### 参数

**algorithmName**
- 类型：String
- verify 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, 和 ECDSA-SHA512

**data**
- 类型：Blob
- 要签名的数据。

**signature**
- 类型：Blob
- RSA 或 EDSA 兼容签名。

**publicKey**
- 类型：Blob
- publicKey 的值必须使用 EncodingUtil base64Decode 方法解码，并且采用 X.509 标准格式。

### 返回值

- 类型：Boolean
- 当且仅当签名成功验证时为 true。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。要正确运行它，您必须：
- 生成 X.509 私钥和公钥证书
- 将私钥转换为 PKCS8
- 从公钥证书中提取公钥

您向 sign 方法提供私钥 PKCS8，向 verify 方法提供提取的公钥（以及您使用 sign 生成的签名）。

在您的终端中，使用 openssl 创建 X.509 密钥对：

```bash
$ openssl req -x509 -newkey rsa:2048 -keyout myPriv509.key -out myPub509.cert -days 365
```

将私钥转换为 PKCS8：

```bash
openssl pkey -in myPriv509.key -out myPriv509pkcs8.pem
```

从 myPub509.cert 中提取公钥：

```bash
openssl x509 -in myPub509.cert -inform pem -pubkey -out myPub509.pem
```

创建 myPub509.pem 密钥后，您只需解码密钥部分的文本（不包括 BEGIN PRIVATE KEY 或 END PRIVATE KEY 行）作为 privateKey 和 publicKey 参数。

```apex
public class TestVerify {
    public void testVerify() {
        String algorithmName = 'RSA';
        Blob input = Blob.valueOf('Here is some text.');
        
        //myPriv509pkcs8.pem 的内容
        String myPriv509pkcs8 = 'contents of myPriv509pkcs8.pem';
        
        Blob privateKey = EncodingUtil.base64Decode(myPriv509pkcs8);
        
        Blob signature = Crypto.sign(algorithmName, input, privateKey);
        
        //myPub509.pem 的内容
        String publicKeyTxt64 = 'contents of myPub509.pem';
        
        Blob publicKey = EncodingUtil.base64Decode(publicKeyTxt64);
        
        Boolean verified = false;
        verified = Crypto.verify(algorithmName, input, signature, publicKey);
    
        Assert.areEqual(true, verified);
    }
}
```

要调用，请运行以下命令：

```apex
TestVerify tv = new TestVerify();
tv.testVerify();
```

### 另请参阅

- X.509 标准

## verify(algorithmName, data, signature, certDevName)

使用指定算法和与 certDevName 关联的公钥验证数据 blob 的数字签名。使用此方法验证使用第三方应用程序或 signWithCertificate 方法创建的数字签名签名的 blob。

### 签名

```apex
public static Boolean verify(String algorithmName, Blob data, Blob signature, String certDevName)
```

### 参数

**algorithmName**
- 类型：String
- verify 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, 和 ECDSA-SHA512

**data**
- 类型：Blob
- 要签名的数据。

**signature**
- 类型：Blob
- RSA 或 ECDSA 签名。

**certDevName**
- 类型：String
- 存储在 Salesforce 组织的证书和密钥管理页面中的证书的唯一名称字段中列出的值，用于签名。
- 要从设置访问证书和密钥管理页面，在快速查找框中输入证书和密钥管理，然后选择证书和密钥管理。

### 返回值

- 类型：Boolean
- 如果签名成功验证，则返回 true。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类。对于 TestCertName 变量，使用您在运行此测试的组织中创建的自签名或 CA 证书的唯一名称值。

```apex
public class TestVerify_2 {
    public void testVerify_2() {
        String algorithmName = 'RSA';
        Blob input = Blob.valueOf('Test Sign With Certificate.');
        String TestCertName = 'your-cert-unique-name';
        Blob signedKey = Crypto.signWithCertificate(algorithmName, input, TestCertName);
        
        Boolean verified = false;
        verified = Crypto.verify(algorithmName, input, signedKey, TestCertName);
        Assert.areEqual(true, verified);
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestVerify_2 tv_2 = new TestVerify_2();
tv_2.testVerify_2();
```

## verifyHMac(algorithmName, data, privateKey, macToVerify)

使用指定算法、输入数据、私钥和 mac 验证数据 blob 的 HMAC 签名。使用此方法验证使用第三方应用程序或 sign 方法创建的数字签名签名的 blob。

### 签名

```apex
public static Boolean verifyHMac(String algorithmName, Blob data, Blob privateKey, Blob macToVerify)
```

### 参数

**algorithmName**
- 类型：String
- 这些是 algorithmName 的有效值：
  - hmacMD5
  - hmacSHA1
  - hmacSHA256
  - hmacSHA512

**data**
- 类型：Blob
- 要签名的数据。

**privateKey**
- 类型：Blob
- 如果用于生成 MAC 的私钥是 Base64 编码的，那么 privateKey 的值也必须是 Base64 编码的。该值不能超过 4 KB。

**macToVerify**
- 类型：Blob
- mac 的值必须根据提供的 privateKey、data 和 algorithmName 进行验证。

### 返回值

- 类型：Boolean
- 要验证的数据的验证状态。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类：

```apex
public class TestVerifyMAC {
    public void testVerifyMAC() {
        String salt = String.valueOf(Crypto.getRandomInteger());
        String key = 'key';
        Blob data = Crypto.generateMac('HmacSHA256', 
            Blob.valueOf(salt), 
            Blob.valueOf(key));
        System.debug('Generated MAC: ');        
        System.debug(EncodingUtil.base64Encode(data));
        
        Boolean verified = false;
        
        verified = Crypto.verifyHMac('HmacSHA256', Blob.valueOf(salt), Blob.valueOf(key), data);
        Assert.areEqual(true, verified);
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestVerifyMAC tvm = new TestVerifyMAC();
tvm.testVerifyMAC();
```
