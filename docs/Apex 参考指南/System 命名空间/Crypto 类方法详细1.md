# Crypto 类方法详细文档

## decrypt(algorithmName, secretKey, initializationVector, cipherText)

使用指定的算法、私钥和初始化向量解密 cipherText blob。使用此方法解密使用第三方应用程序或 encrypt 方法加密的 blob。

### 签名

```apex
public static Blob decrypt(String algorithmName, Blob secretKey, Blob initializationVector, Blob cipherText)
```

### 参数

**algorithmName**
- 类型：String
- decrypt 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 私钥文本。secretKey 的长度必须与 algorithmName 要求的大小匹配：128 位、192 位或 256 位，分别为 16 字节、24 字节或 32 字节。您可以使用第三方应用程序或 generateAesKey 方法生成此密钥。

**initializationVector**
- 类型：Blob
- 对于 CBC，128 位（16 字节）IV。IV 必须是 128 位（16 字节）。
- 对于 GCM，不要提供 IV。任何非空 IV 都会导致错误。

**cipherText**
- 类型：Blob
- 要解密的内容。

### 返回值

- 类型：Blob
- 包含 cipherText 的解密内容。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建此 Apex 类。

```apex
public class TestDecrypt {
    public void testDecrypt() {
        // 16 字节字符串
        Blob exampleIv = Blob.valueOf('Example of IV123');
        Blob key = Crypto.generateAesKey(128);
        Blob data = Blob.valueOf('Data to be encrypted');
        Blob encrypted = Crypto.encrypt('AES128', key, exampleIv, data);
        
        Blob decrypted = Crypto.decrypt('AES128', key, exampleIv, encrypted);
        String decryptedString = decrypted.toString();
        System.debug('Decrypted Value: ' + decryptedString);
        Assert.areEqual('Data to be encrypted', decryptedString, 'Error: not equal!');
        return;
    }
}
```

要调用此方法，请运行：

```apex
TestDecrypt td = new TestDecrypt();
td.testDecrypt();
```

## decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText)

使用指定的算法和私钥解密 IVAndCipherText blob。使用此方法解密使用第三方应用程序或 encryptWithManagedIV 方法加密的 blob。此版本的 decryptWithManagedIV 不使用附加认证数据。

### 签名

```apex
public static Blob decryptWithManagedIV(String algorithmName, Blob secretKey, Blob IVAndCipherText)
```

### 参数

**algorithmName**
- 类型：String
- decryptWithManagedIV 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 私钥文本。secretKey 的长度必须与 algorithmName 要求的大小匹配：128 位、192 位或 256 位，分别为 16 字节、24 字节或 32 字节。您可以使用第三方应用程序或 generateAesKey 方法为您生成此密钥。

**IVAndCipherText**
- 类型：Blob
- 初始化向量和您要解密的加密文本的连接。
- 对于 CBC，IVAndCipherText 必须包含 IV + 密文，其中 IV 必须是前 128 位（16 字节），密文紧随其后。
- 对于 GCM，IVAndCipherText 必须包含 IV 的长度（始终为 12），后跟 96 位（12 字节）IV，密文紧随其后。

### 返回值

- 类型：Blob
- 包含 IVAndCipherText 的解密内容。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建此 Apex 类。

```apex
public class TestDecryptWithManagedIV {
    public void testDecryptWithManagedIV() {
        String algorithmName = 'AES128';
        Blob key = Crypto.generateAesKey(128);
        Blob data = Blob.valueOf('Data to be encrypted');
        Blob encrypted = Crypto.encryptWithManagedIV(algorithmName, key, data);
        Blob decrypted = Crypto.decryptWithManagedIV(algorithmName, key, encrypted);
        String decryptedString = decrypted.toString();
        Assert.areEqual('Data to be encrypted', decryptedString, 'Error: the strings are not equal!');
    }
}
```

要调用此方法，请运行：

```apex
TestDecryptWithManagedIV tdiv = new TestDecryptWithManagedIV();
tdiv.testDecryptWithManagedIV();
```

## decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText, aaData)

使用指定的算法和私钥解密 IVAndCipherText blob。使用此方法解密使用第三方应用程序或 encryptWithManagedIV 方法加密的 blob。此版本的 decryptWithManagedIV 使用附加认证数据。此方法不支持 CBC。

### 签名

```apex
public static Blob decryptWithManagedIV(String algorithmName, Blob secretKey, Blob IVAndCipherText, Blob aaData)
```

### 参数

**algorithmName**
- 类型：String
- decryptWithManagedIV 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - AES256-GCM

**secretKey**
- 类型：Blob
- 私钥文本。secretKey 的长度必须与 algorithmName 要求的大小匹配：128 位、192 位或 256 位，分别为 16 字节、24 字节或 32 字节。您可以使用第三方应用程序或 generateAesKey 方法为您生成此密钥。

**IVAndCipherText**
- 类型：Blob
- IVAndCipherText 必须包含 IV 的长度（始终为 12），后跟 96 位（12 字节）IV，密文紧随其后。

**aaData**
- 类型：Blob
- 附加认证数据。此值是必需的。

### 返回值

- 类型：Blob
- 包含 IVAndCipherText 的解密内容。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建此 Apex 类。

```apex
public class TestDecryptWithManagedIV {
    public void testDecryptWithManagedIV() {
        String algorithmName = 'AES256-GCM';
        Blob key = Crypto.generateAesKey(256);
        Blob data = Blob.valueOf('Data to be encrypted');
        Blob aad = Blob.valueOf('Additional tag');
        Blob encrypted = Crypto.encryptWithManagedIV(algorithmName, key, data, aad);
        Blob decrypted = Crypto.decryptWithManagedIV(algorithmName, key, encrypted, aad);
        String decryptedString = decrypted.toString();
        Assert.areEqual('Data to be encrypted', decryptedString, 'Error: the strings are not equal!');
    }
}
```

要调用此方法，请运行：

```apex
TestDecryptWithManagedIV tdiv = new TestDecryptWithManagedIV();
tdiv.testDecryptWithManagedIV();
```
