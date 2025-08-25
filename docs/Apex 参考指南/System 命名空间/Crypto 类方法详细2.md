# Crypto 类加密方法详细文档

## encrypt(algorithmName, secretKey, initializationVector, clearText)

使用指定的算法、私钥和初始化向量加密 clearText blob。当您想要指定自己的初始化向量时使用此方法。

### 签名

```apex
public static Blob encrypt(String algorithmName, Blob secretKey, Blob initializationVector, Blob clearText)
```

### 参数

**algorithmName**
- 类型：String
- 用于加密 clearText 的算法。encrypt 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 私钥文本。secretKey 的长度必须与 algorithmName 要求的大小匹配：128 位、192 位或 256 位，分别为 16 字节、24 字节或 32 字节。您可以使用第三方应用程序或 generateAesKey 方法为您生成此密钥。

**initializationVector**
- 类型：Blob
- 对于 CBC，任何 128 位（16 字节）字符串为此方法提供初始状态。初始化向量必须是 128 位（16 字节）。
- 对于 GCM，不要提供 IV。任何非空 IV 都会导致错误。

**clearText**
- 类型：Blob
- 您想要加密的内容。

### 返回值

- 类型：Blob
- 包含 clearText 的加密内容。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建此 Apex 类。

```apex
public class TestEncrypt {
    public void testEncrypt() {
        Blob exampleIv = Blob.valueOf('Example of IV123');
        Blob key = Crypto.generateAesKey(128);
        Blob data = Blob.valueOf('Encryption Example Text.');
        Blob encrypted = Crypto.encrypt('AES128', key, exampleIv, data);
        
        Blob decrypted = Crypto.decrypt('AES128', key, exampleIv, encrypted);
        String decryptedString = decrypted.toString();
        Assert.areEqual('Encryption Example Text.', decryptedString, 'Error: the values are not equal!');
        return;
    }
}
```

要调用此方法，请运行：

```apex
TestEncrypt te = new TestEncrypt();
te.testEncrypt();
```

## encryptWithManagedIV(algorithmName, secretKey, clearText)

使用指定的算法和私钥加密 clearText blob。当您希望 Salesforce 生成初始化向量时使用此方法。此版本的 encryptWithManagedIV 不使用附加认证数据。

### 签名

```apex
public static Blob encryptWithManagedIV(String algorithmName, Blob secretKey, Blob clearText)
```

### 参数

**algorithmName**
- 类型：String
- encryptWithManagedIV 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 私钥文本。secretKey 的长度必须与 algorithmName 要求的大小匹配：128 位、192 位或 256 位，分别为 16 字节、24 字节或 32 字节。您可以使用第三方应用程序或 generateAesKey 方法为您生成此密钥。

**clearText**
- 类型：Blob
- 您想要加密的内容。

### 返回值

- 类型：Blob
- 包含 clearText 的加密内容。
- 对于 CBC，初始化向量存储为加密 blob 的前 128 位（16 字节）。
- 对于 GCM，返回值包含 IV 的长度（始终为 12），后跟 Salesforce 生成的 96 位（12 字节）IV，密文紧随其后。

使用第三方应用程序或 decryptWithManagedIV 方法解密使用此方法加密的 blob。如果您想要生成自己的初始化向量，请使用 encrypt 方法。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建此 Apex 类。

```apex
public class TestEncryptWithManagedIV {
    public void testEncryptWithManagedIV() {
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
TestEncryptWithManagedIV teiv = new TestEncryptWithManagedIV();
teiv.testEncryptWithManagedIV();
```

## encryptWithManagedIV(algorithmName, secretKey, clearText, aaData)

使用指定的算法和私钥加密 clearText blob。当您希望 Salesforce 生成初始化向量时使用此方法。此版本的 encryptWithManagedIV 使用附加认证数据。此方法不支持 CBC。

### 签名

```apex
public static Blob encryptWithManagedIV(String algorithmName, Blob secretKey, Blob clearText, Blob aaData)
```

### 参数

**algorithmName**
- 类型：String
- encryptWithManagedIV 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - AES256-GCM

**secretKey**
- 类型：Blob
- 私钥文本。secretKey 的长度必须与 algorithmName 要求的大小匹配：128 位、192 位或 256 位，分别为 16 字节、24 字节或 32 字节。您可以使用第三方应用程序或 generateAesKey 方法为您生成此密钥。

**clearText**
- 类型：Blob
- 您想要加密的内容。

**aaData**
- 类型：Blob
- 附加认证数据。这是必需的。

### 返回值

- 类型：Blob
- 包含 clearText 的加密内容。对于 GCM，返回值包含 IV 的长度（始终为 12），后跟 Salesforce 生成的 96 位（12 字节）IV，密文紧随其后。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建此 Apex 类。

```apex
public class TestEncryptWithManagedIV {
    public void testEncryptWithManagedIV() {
        String algorithmName = 'AES256-GCM';
        /* 
           如果您指定 AES256-GCM，则没有 IV
        */            
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
TestEncryptWithManagedIV teiv = new TestEncryptWithManagedIV();
teiv.testEncryptWithManagedIV();
```
