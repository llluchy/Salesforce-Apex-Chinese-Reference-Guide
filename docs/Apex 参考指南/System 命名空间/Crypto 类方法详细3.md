# Crypto 类其他方法详细文档

## generateAesKey(size)

生成高级加密标准 (AES) 密钥。

### 签名

```apex
public static Blob generateAesKey(Integer size)
```

### 参数

**size**
- 类型：Integer
- 密钥的大小（以位为单位）。有效值为：
  - 128
  - 192
  - 256

### 返回值

- 类型：Blob
- 包含生成的 AES 密钥。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类：

```apex
public class TestGenerateAESKey {
    public void testGenerateAESKey() {
        Blob key = Crypto.generateAesKey(128);
        System.debug('Generated AES Key: ');
        String strKey = EncodingUtil.base64Encode(key);
        System.debug(strKey);
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestGenerateAESKey tgaes = new TestGenerateAESKey();
tgaes.testGenerateAESKey();
```

## generateDigest(algorithmName, input)

使用指定算法对提供的输入 blob 计算安全、单向哈希摘要。

### 签名

```apex
public static Blob generateDigest(String algorithmName, Blob input)
```

### 参数

**algorithmName**
- 类型：String
- 您想要用来生成摘要的算法。algorithmName 的有效值为：
  - MD5
  - SHA1
  - SHA3-256
  - SHA3-384
  - SHA3-512
  - SHA-256
  - SHA-512

**input**
- 类型：Blob
- 您想要为其生成摘要的内容。

### 返回值

- 类型：Blob
- 包含生成的摘要。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类：

```apex
public class TestGenerateDigest {
    public void testGenerateDigest() {
        Blob targetBlob = Blob.valueOf('ExampleMD5String');
        Blob hash = Crypto.generateDigest('MD5', targetBlob);
        String result = EncodingUtil.base64Encode(hash);
        System.debug('Value: ' + result);
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestGenerateDigest tgd = new TestGenerateDigest();
tgd.testGenerateDigest();
```

## generateMac(algorithmName, input, privateKey)

使用私钥和指定算法为输入 blob 值计算消息认证码 (MAC)。

### 签名

```apex
public static Blob generateMac(String algorithmName, Blob input, Blob privateKey)
```

### 参数

**algorithmName**
- 类型：String
- 这些是 algorithmName 的有效值：
  - hmacMD5
  - hmacSHA1
  - hmacSHA256
  - hmacSHA512

**input**
- 类型：Blob
- 您想要为其生成 MAC 的内容。

**privateKey**
- 类型：Blob
- 用于生成 MAC 的密钥。您可以提供使用 Base64 编码编码的私钥。但是，如果您这样做，那么您还必须在使用 verifyHMac 方法验证 MAC 时提供 Base64 编码的私钥。privateKey 的值不能超过 4 KB。

### 返回值

- 类型：Blob
- 消息认证码。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类：

```apex
public class TestGenerateMAC {
    public void testGenerateMAC() {
        String salt = String.valueOf(Crypto.getRandomInteger());
        String key = 'key';
        Blob data = Crypto.generateMac('HmacSHA256', 
                                        Blob.valueOf(salt), 
                                        Blob.valueOf(key));
        System.debug('Generated MAC: ');        
        System.debug(EncodingUtil.base64Encode(data));
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestGenerateMAC tgm = new TestGenerateMAC();
tgm.testGenerateMAC();
```

## getRandomInteger()

返回一个随机整数值。

### 签名

```apex
public static Integer getRandomInteger()
```

### 返回值

- 类型：Integer
- 返回一个随机 4 字节整数。Salesforce 调用 java.security.SecureRandom api 生成此数字。有关如何生成数字的信息，请参阅 java.security.SecureRandom。

### 示例

您可以使用您首选的 Salesforce 开发环境来练习此函数。创建以下 Apex 类：

```apex
public class TestGetRandomInteger {
    public void testGetRandomInteger() {
        Integer i1 = Crypto.getRandomInteger();
        Integer i2 = Crypto.getRandomInteger();
        System.debug('Integer 1: ' + i1);
        System.debug('Integer 2: ' + i2);
        Assert.areNotEqual(i1, i2, 'Sorry, those aren\'t random!');
        //这只是一个示例。这不是随机性的真正测试
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestGetRandomInteger tri = new TestGetRandomInteger();
tri.testGetRandomInteger();
```

### 另请参阅

- java.security.SecureRandom

## getRandomLong()

返回一个随机长整型值。

### 签名

```apex
public static Long getRandomLong()
```

### 返回值

- 类型：Long
- 返回一个随机 8 字节长整型。Salesforce 调用 java.security.SecureRandom api 生成此数字。有关如何生成数字的信息，请参阅 java.security.SecureRandom。

### 示例

您可以使用您首选的 Salesforce 开发环境来练习此函数。创建以下 Apex 类：

```apex
public class TestGetRandomLong {
    public void testGetRandomLong() {
        Long L1 = Crypto.getRandomLong();
        Long L2 = Crypto.getRandomLong();
        System.debug('Long 1: ' + L1);
        System.debug('Long 2: ' + L2);
        Assert.areNotEqual(L1, L2, 'Sorry, not random!');
        //这只是一个示例。这不是随机性的真正测试
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestGetRandomLong trl = new TestGetRandomLong();
trl.testGetRandomLong();
```

### 另请参阅

- java.security.SecureRandom
