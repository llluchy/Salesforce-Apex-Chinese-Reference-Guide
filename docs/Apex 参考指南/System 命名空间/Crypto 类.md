# Crypto 类

提供用于创建摘要、消息认证码和签名的方法，以及加密和解密信息。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Crypto类是Salesforce中用于加密、解密、签名和验证的重要工具。
> 
> 它支持多种加密算法和签名算法，可以用于保护数据安全、与外部服务集成等场景。

## 命名空间

System

## 用法

Crypto类中的方法可用于保护Lightning Platform中的内容，或与Google或Amazon WebServices (AWS)等外部服务集成。

此类中的每个方法都支持一组独特的AES加密算法，具体取决于其用途。要确认您想要执行的操作支持哪些算法，请检查每个方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Crypto类的主要用途：
> 1. 数据加密和解密
> 2. 数字签名和验证
> 3. 消息认证码生成和验证
> 4. 安全哈希摘要生成
> 5. 随机数生成
> 6. XML文档签名

## 使用加密算法

Crypto类支持Galois Counter Mode (GCM)和Cipher Block Chaining mode (CBC)。

GCM AES256-GCM算法在所有加密和解密变体中均有效。目前，GCM仅支持256位大小。128位、192位和256位大小的CBC算法在所有变体中均有效，除了那些期望附加认证数据（aaD参数）的变体。

- 当您将CBC与encrypt和decrypt一起使用时，您提供16位初始化向量（IV）。
- 当您将GCM与encrypt和decrypt一起使用时，您不提供初始化向量（IV）。
- 当您将CBC与encryptWithManagedIV和decryptWithManagedIV一起使用时，Salesforce提供IV。您不提供附加认证数据（aaData）。只有当您使用不期望aaData的版本时，才能将CBC与encryptWithManagedIV和decryptWithManagedIV一起使用。
- 当您将GCM与encryptWithManagedIV和decryptWithManagedIV一起使用时，Salesforce提供IV，您可以选择提供aaData。

当您使用Crypto类通过GCM进行加密时，最终的加密内容包括IV的长度（始终为12）、Salesforce生成的12字节IV和密文。

## 加密算法

Crypto类支持以下加密算法。

| 模式 | 变体 | 描述 |
|------|------|------|
| CBC (Cipher Block Chaining) | AES128, AES128-CBC | 使用PKCS7填充的CBC模式AES 128位。使用这两个值中的任一个。 |
| | AES192, AES192-CBC | 使用PKCS7填充的CBC模式AES 192位。使用这两个值中的任一个。 |
| | AES256, AES256-CBC | 使用PKCS7填充的CBC模式AES 256位。使用这两个值中的任一个。 |
| GCM (Galois Counter Mode) | AES256-GCM | 无填充的GCM模式AES 256位。目前，GCM仅支持256位大小。 |

## 签名算法

Crypto类支持以下签名算法。

| 类型 | 变体 | 描述 |
|------|------|------|
| RSA | RSA, RSA-SHA1 | SHA1哈希的RSA签名（使用非对称密钥对）。使用这两个值中的任一个。 |
| | RSA-SHA256 | SHA256哈希的RSA签名 |
| | RSA-SHA384 | SHA384哈希的RSA签名 |
| | RSA-SHA512 | SHA512哈希的RSA签名 |
| ECDSA (DER) | ECDSA-SHA256 | SHA256哈希的ECDSA签名 |
| | ECDSA-SHA384 | SHA384哈希的ECDSA签名 |
| | ECDSA-SHA512 | SHA512哈希的ECDSA签名 |
| ECDSA (P1363) | ECDSA-SHA256-P1363 | SHA256哈希的ECDSA签名（P1363格式） |
| | ECDSA-SHA256-PLAIN | SHA256哈希的ECDSA签名（P1363格式）。如果JWT返回invalid_client，请使用此值。 |
| | ECDSA-SHA384-P1363 | SHA256哈希的ECDSA签名（P1363格式） |
| | ECDSA-SHA512-P1363 | SHA512哈希的ECDSA签名（P1363格式） |

## 加密和解密异常

这些方法可能会抛出以下异常。

| 异常 | 消息 | 描述 |
|------|------|------|
| InvalidParameterValue | Unable to parse the initialization vector from encrypted data. | 如果您使用托管初始化向量，且密文少于16字节，则抛出。 |
| | Invalid algorithm algoName. Must be one of the supported AES algorithms listed on this page. | 如果算法名称不是有效值之一，则抛出。 |
| | Invalid private key. Must be size bytes. | 如果私钥的大小与指定算法不匹配，则抛出。 |
| | Invalid initialization vector. For CBC, this must be 16 bytes. For GCM, the IV is 12 bytes. | 如果为CBC加密提供的初始化向量不是16字节，则抛出。 |
| | AAD can only be used with AESGCM algorithms. | 如果为aaData提供了值，但加密算法不是GCM类型，则抛出。 |
| | Invalid data. Input data is size bytes, which exceeds the limit of 1,048,576 bytes. | 如果数据大于1 MB，则抛出。对于解密，允许1,048,608字节用于初始化向量头，加上加密添加的任何附加填充以对齐到块大小。 |
| NullPointerException | Argument can't be null. | 如果必需的方法参数之一为null，则抛出。 |
| SecurityException | Given final block isn't properly padded. | 如果数据没有正确块对齐或在加密或解密期间发生类似问题，则抛出。 |
| SecurityException | Message Varies | 如果在加密或解密期间出现问题，则抛出。 |

这些异常是System命名空间可能抛出的异常的子集。有关更多信息，请参阅Exception Class和Built-In Exceptions。

对于CBC，Crypto类使用AES / CBC / PKCS7填充，这容易受到Padding Oracle攻击。您可以通过使用Encrypt-then-MAC方法来防止Padding Oracle攻击。在此方法中，您分别加密密文和MAC。

对于加密，首先使用一个加密密钥通过AES加密数据。然后，使用不同的加密密钥，使用generateMac(algorithmName, input, privateKey)方法为密文生成消息认证码（MAC）。在将MAC发送给接收者之前，将MAC附加到密文。

对于解密，首先使用verifyHMac(algorithmName, data, privateKey, macToVerify)方法检查密文的真实性和完整性。如果真实性或完整性检查失败，抛出异常并且不解密密文。只有在第二步中，在验证消息真实性和完整性之后，才能解密密文。

您也可以通过使用GCM加密算法来防止Padding Oracle攻击。

## 其他错误

在极少数情况下，您可能会遇到来自JSON Web Tokens (JWT)服务的invalid_client错误。

| 错误 | 消息 | 描述 |
|------|------|------|
| invalid_client | 实际文本有所不同，但描述了无法验证客户端凭据。 | Salesforce Connected Application中的JWT公钥证书似乎与已知私钥不匹配。 |

对于Shield Platform Encryption，当您使用使用P11363格式的自定义JWT实现，并且还想使用ECDSA-SHA256算法时，可能会发生此错误。解决方案是指定ECDSA-SHA256-PLAIN算法。ECDSA-SHA256-PLAIN可用于多个sign()和verify()方法。

例如，为了符合您的程序要求，您使用椭圆曲线数字签名算法（ECDSA）和P-256曲线对令牌进行签名。此算法采用P1363格式，因此当您尝试使用ECDSA SHA256使用Crypto.verify()时，您会收到包含invalid_client的响应。您将ECDSA-SHA256更改为ECDSA-SHA256-PLAIN，错误就解决了。

## Crypto 方法

以下是Crypto的方法。所有方法都是静态的。

### decrypt(algorithmName, secretKey, initializationVector, cipherText)

使用指定的算法、私钥和初始化向量解密密文blob。使用此方法解密使用第三方应用程序或encrypt方法加密的blob。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> decrypt方法用于解密数据，需要提供算法名称、密钥、初始化向量和密文。
> 
> 适用于需要自己控制初始化向量的场景。

#### 签名

```apex
public static Blob decrypt(String algorithmName, Blob secretKey, Blob initializationVector, Blob cipherText)
```

#### 参数

**algorithmName**
- 类型：String
- 描述：decrypt支持algorithmName的所有这些值。有关每个算法的详细信息，请参阅Crypto Class。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 描述：私钥文本。secretKey的长度必须与algorithmName要求的大小匹配：128位、192位或256位，分别为16字节、24字节或32字节。您可以使用第三方应用程序或generateAesKey方法生成此密钥。

**initializationVector**
- 类型：Blob
- 描述：对于CBC，128位（16字节）IV。IV必须是128位（16字节）。
  对于GCM，不提供IV。任何非null IV都会导致错误。

**cipherText**
- 类型：Blob
- 描述：要解密的内容。

#### 返回值

- 类型：Blob
- 描述：包含cipherText的解密内容。

#### 示例

```apex
public class TestDecrypt {
    public void testDecrypt(){
        // 16字节字符串
        Blob exampleIv = Blob.valueOf('Example of IV123');
        Blob key = Crypto.generateAesKey(128);
        Blob data = Blob.valueOf('Data to be encrypted');
        Blob encrypted = Crypto.encrypt('AES128', key, exampleIv, data);
        
        Blob decrypted = Crypto.decrypt('AES128', key, exampleIv, encrypted);
        String decryptedString = decrypted.toString();
        System.debug('Decrypted Value: ' + decryptedString);
        Assert.areEqual('Data to be encrypted', decryptedString, 'Error: not equal!');
    }
}
```

### decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText)

使用指定的算法和私钥解密IVAndCipherText blob。使用此方法解密使用第三方应用程序或encryptWithManagedIV方法加密的blob。此版本的decryptWithManagedIV不使用附加认证数据。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> decryptWithManagedIV方法使用Salesforce管理的初始化向量进行解密。
> 
> 适用于不需要自己管理初始化向量的场景，更简单易用。

#### 签名

```apex
public static Blob decryptWithManagedIV(String algorithmName, Blob secretKey, Blob IVAndCipherText)
```

#### 参数

**algorithmName**
- 类型：String
- 描述：decryptWithManagedIV支持algorithmName的所有这些值。有关每个算法的详细信息，请参阅Crypto Class。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 描述：私钥文本。secretKey的长度必须与algorithmName要求的大小匹配：128位、192位或256位，分别为16字节、24字节或32字节。您可以使用第三方应用程序或generateAesKey方法为您生成此密钥。

**IVAndCipherText**
- 类型：Blob
- 描述：初始化向量和您要解密的加密文本的连接。
  对于CBC，IVAndCipherText必须包含IV + 密文，其中IV必须是前128位（16字节），密文紧随其后。
  对于GCM，IVAndCipherText必须包含IV的长度（始终为12），后跟96位（12字节）IV，密文紧随其后。

#### 返回值

- 类型：Blob
- 描述：包含IVAndCipherText的解密内容。

#### 示例

```apex
public class TestDecryptWithManagedIV {
    public void testDecryptWithManagedIV(){
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

### decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText, aaData)

使用指定的算法和私钥解密IVAndCipherText blob。使用此方法解密使用第三方应用程序或encryptWithManagedIV方法加密的blob。此版本的decryptWithManagedIV使用附加认证数据。CBC不支持此方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 此版本的decryptWithManagedIV支持附加认证数据（AAD）。
> 
> 适用于需要额外安全验证的场景，如GCM模式。

#### 签名

```apex
public static Blob decryptWithManagedIV(String algorithmName, Blob secretKey, Blob IVAndCipherText, Blob aaData)
```

#### 参数

**algorithmName**
- 类型：String
- 描述：decryptWithManagedIV支持algorithmName的所有这些值。有关每个算法的详细信息，请参阅Crypto Class。
  - AES256-GCM

**secretKey**
- 类型：Blob
- 描述：私钥文本。secretKey的长度必须与algorithmName要求的大小匹配：128位、192位或256位，分别为16字节、24字节或32字节。您可以使用第三方应用程序或generateAesKey方法为您生成此密钥。

**IVAndCipherText**
- 类型：Blob
- 描述：IVAndCipherText必须包含IV的长度（始终为12），后跟96位（12字节）IV，密文紧随其后。

**aaData**
- 类型：Blob
- 描述：附加认证数据。此值是必需的。

#### 返回值

- 类型：Blob
- 描述：包含IVAndCipherText的解密内容。

#### 示例

```apex
public class TestDecryptWithManagedIV {
    public void testDecryptWithManagedIV(){
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

### encrypt(algorithmName, secretKey, initializationVector, clearText)

使用指定的算法、私钥和初始化向量加密明文blob。当您想要指定自己的初始化向量时，使用此方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> encrypt方法用于加密数据，需要提供算法名称、密钥、初始化向量和明文。
> 
> 适用于需要自己控制初始化向量的场景。

#### 签名

```apex
public static Blob encrypt(String algorithmName, Blob secretKey, Blob initializationVector, Blob clearText)
```

#### 参数

**algorithmName**
- 类型：String
- 描述：用于加密clearText的算法。encrypt支持algorithmName的所有这些值。有关每个算法的详细信息，请参阅Crypto Class。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 描述：私钥文本。secretKey的长度必须与algorithmName要求的大小匹配：128位、192位或256位，分别为16字节、24字节或32字节。您可以使用第三方应用程序或generateAesKey方法为您生成此密钥。

**initializationVector**
- 类型：Blob
- 描述：对于CBC，任何128位（16字节）字符串为此方法提供初始状态。初始化向量必须是128位（16字节）。
  对于GCM，不提供IV。任何非null IV都会导致错误。

**clearText**
- 类型：Blob
- 描述：您要加密的内容。

#### 返回值

- 类型：Blob
- 描述：包含clearText的加密内容。

#### 示例

```apex
public class TestEncrypt {
    public void testEncrypt(){
        Blob exampleIv = Blob.valueOf('Example of IV123');
        Blob key = Crypto.generateAesKey(128);
        Blob data = Blob.valueOf('Encryption Example Text.');
        Blob encrypted = Crypto.encrypt('AES128', key, exampleIv, data);
        
        Blob decrypted = Crypto.decrypt('AES128', key, exampleIv, encrypted);
        String decryptedString = decrypted.toString();
        Assert.areEqual('Encryption Example Text.', decryptedString, 'Error: the values are not equal!');
    }
}
```

### encryptWithManagedIV(algorithmName, secretKey, clearText)

使用指定的算法和私钥加密明文blob。当您希望Salesforce生成初始化向量时，使用此方法。此版本的encryptWithManagedIV不使用附加认证数据。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> encryptWithManagedIV方法使用Salesforce管理的初始化向量进行加密。
> 
> 适用于不需要自己管理初始化向量的场景，更简单易用。

#### 签名

```apex
public static Blob encryptWithManagedIV(String algorithmName, Blob secretKey, Blob clearText)
```

#### 参数

**algorithmName**
- 类型：String
- 描述：encryptWithManagedIV支持algorithmName的所有这些值。有关每个算法的详细信息，请参阅Crypto Class。
  - AES128, AES128-CBC
  - AES192, AES192-CBC
  - AES256, AES256-CBC
  - AES256-GCM

**secretKey**
- 类型：Blob
- 描述：私钥文本。secretKey的长度必须与algorithmName要求的大小匹配：128位、192位或256位，分别为16字节、24字节或32字节。您可以使用第三方应用程序或generateAesKey方法为您生成此密钥。

**clearText**
- 类型：Blob
- 描述：您要加密的内容。

#### 返回值

- 类型：Blob
- 描述：包含clearText的加密内容。
  对于CBC，初始化向量存储为加密blob的前128位（16字节）。
  对于GCM，返回值包含IV的长度（始终为12），后跟96位（12字节）Salesforce生成的IV，密文紧随其后。

使用第三方应用程序或decryptWithManagedIV方法解密使用此方法加密的blob。如果您想要生成自己的初始化向量，请使用encrypt方法。

#### 示例

```apex
public class TestEncryptWithManagedIV {
    public void testEncryptWithManagedIV(){
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

### encryptWithManagedIV(algorithmName, secretKey, clearText, aaData)

使用指定的算法和私钥加密明文blob。当您希望Salesforce生成初始化向量时，使用此方法。此版本的encryptWithManagedIV使用附加认证数据。CBC不支持此方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 此版本的encryptWithManagedIV支持附加认证数据（AAD）。
> 
> 适用于需要额外安全验证的场景，如GCM模式。

#### 签名

```apex
public static Blob encryptWithManagedIV(String algorithmName, Blob secretKey, Blob clearText, Blob aaData)
```

#### 参数

**algorithmName**
- 类型：String
- 描述：encryptWithManagedIV支持algorithmName的所有这些值。有关每个算法的详细信息，请参阅Crypto Class。
  - AES256-GCM

**secretKey**
- 类型：Blob
- 描述：私钥文本。secretKey的长度必须与algorithmName要求的大小匹配：128位、192位或256位，分别为16字节、24字节或32字节。您可以使用第三方应用程序或generateAesKey方法为您生成此密钥。

**clearText**
- 类型：Blob
- 描述：您要加密的内容。

**aaData**
- 类型：Blob
- 描述：附加认证数据。这是必需的。

#### 返回值

- 类型：Blob
- 描述：包含clearText的加密内容。对于GCM，返回值包含IV的长度（始终为12），后跟96位（12字节）Salesforce生成的IV，密文紧随其后。

#### 示例

```apex
public class TestEncryptWithManagedIV {
    public void testEncryptWithManagedIV(){
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
