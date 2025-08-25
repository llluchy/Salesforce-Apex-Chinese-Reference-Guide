# Crypto 类签名和验证方法详细文档

## sign(algorithmName, input, privateKey)

使用指定算法和提供的私钥为输入 blob 值计算唯一数字签名。

### 签名

```apex
public static Blob sign(String algorithmName, Blob input, Blob privateKey)
```

### 参数

**algorithmName**
- 类型：String
- signWithCertificate 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, 和 ECDSA-SHA512

**input**
- 类型：Blob
- 要签名的数据。

**privateKey**
- 类型：Blob
- 用于签名的密钥。privateKey 的值必须使用 EncodingUtil base64Decode 方法解码，并且应该采用 RSA 的 PKCS #8 (1.2) 私钥信息语法标准格式。该值不能超过 4 KB。

### 返回值

- 类型：Blob
- 新的数字签名。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。要正确运行它，您需要一个 PKCS8 私钥。在您的终端中，使用 openssl 创建一个。首先，创建密钥。然后将其转换为 PKCS8：

```bash
$ openssl genrsa -out myprivatekey.pem 1024
$ openssl pkey -in myprivatekey.pem -out myprivatekey.pkcs8.pem
```

创建 PKCS8 兼容密钥后，您只需解码密钥部分的文本（不包括 BEGIN PRIVATE KEY 或 END PRIVATE KEY 行）作为 privateKey 参数。

```apex
public class TestSign {
    public void testSign() {
        Blob input = Blob.valueOf('Some text.');
        String algorithmName = 'RSA';
        String rawKey = '<text value of your pkcs8 private key>'; 
        //没有 BEGIN PRIVATE KEY 或 END PRIVATE KEY 头/尾！
        Blob privateKey = EncodingUtil.base64Decode(rawKey);
        System.debug(privateKey);
        Blob signedKey = Crypto.sign(algorithmName, input, privateKey);
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestSign ts = new TestSign();
ts.testSign();
```

## signWithCertificate(algorithmName, input, certDevName)

使用指定算法和提供的证书和密钥对为输入 blob 值计算唯一数字签名。

### 签名

```apex
public static Blob signWithCertificate(String algorithmName, Blob input, String certDevName)
```

### 参数

**algorithmName**
- 类型：String
- signWithCertificate 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, 和 ECDSA-SHA512

**input**
- 类型：Blob
- 要签名的数据。

**certDevName**
- 类型：String
- 存储在 Salesforce 组织的证书和密钥管理页面中的证书的唯一名称字段中列出的值，用于签名。
- 要从设置访问证书和密钥管理页面，在快速查找框中输入证书和密钥管理，然后选择证书和密钥管理。

### 返回值

- 类型：Blob
- 签名内容。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类。对于 TestCertName 变量，使用您在运行此测试的组织中创建的自签名或 CA 证书的唯一名称值。

```apex
public class TestSignWithCert {
    public void testSignWithCert() {
        String algorithmName = 'RSA';
        Blob input = Blob.valueOf('Test Sign With Certificate.');
        String TestCertName = 'your-cert-unique-name';
        Blob signedKey = Crypto.signWithCertificate(algorithmName, input, TestCertName);
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestSignWithCert tswc = new TestSignWithCert();
tswc.testSignWithCert();
```

## signXML(algorithmName, node, idAttributeName, certDevName)

将签名封装到 XML 文档中。

### 签名

```apex
public Void signXML(String algorithmName, Dom.XmlNode node, String idAttributeName, String certDevName)
```

### 参数

**algorithmName**
- 类型：String
- signWithCertificate 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, 和 ECDSA-SHA512

**node**
- 类型：Dom.XmlNode
- 要签名并将签名插入其中的 XML 节点。

**idAttributeName**
- 类型：String
- 节点 (XmlNode) 上要用作引用 ID 的属性的全名（包括命名空间）。如果为 null，此方法使用节点上的 ID 属性。如果没有 ID 属性，Salesforce 生成一个新的 ID 并将其添加到节点。

**certDevName**
- 类型：String
- 存储在 Salesforce 组织的证书和密钥管理页面中的证书的唯一名称，用于签名。
- 要从设置访问证书和密钥管理页面，在快速查找框中输入证书和密钥管理，然后选择证书和密钥管理。

### 返回值

- 类型：void
- 此方法不返回值。签名封装插入到节点内。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类。对于 testCertName 变量，使用您在运行此测试的组织中创建的自签名或 CA 证书的唯一名称值。

```apex
public class TestSignXML {
    public void testSignXML() {
        String algorithmName = 'RSA';
        String testCertName = 'your-cert-unique-name';
        Dom.Document doc = new Dom.Document();
        String docToLoad = '<?xml version="1.0"?>\n' + 
        '<customers>\n' + 
        '  <customer id="2">\n' +
        '    <name>Company One</name>\n' + 
        '  </customer>\n' +
        '</customers>';
        doc.load(docToLoad);
        
        System.Crypto.signXML(algorithmName, doc.getRootElement(), null, testCertName);
        
        //将签名 XML 文档的内容转储到调试日志
        System.Debug(doc.toXmlString());
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestSignXML tswxml = new TestSignXML();
tswxml.testSignXML();
```

## signXML(algorithmName, node, idAttributeName, certDevName, refChild)

在指定的子节点之前插入签名封装。

### 签名

```apex
public static void signXml(String algorithmName, Dom.XmlNode node, String idAttributeName, String certDevName, Dom.XmlNode refChild)
```

### 参数

**algorithmName**
- 类型：String
- signWithCertificate 支持 algorithmName 的所有这些值。有关每个算法的详细信息，请参阅 Crypto 类。
  - RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, 和 ECDSA-SHA512

**node**
- 类型：Dom.XmlNode
- 要签名并将签名插入其中的 XML 节点。

**idAttributeName**
- 类型：String
- 节点 (XmlNode) 上要用作引用 ID 的属性的全名（包括命名空间）。如果为 null，此方法使用节点上的 ID 属性。如果没有 ID 属性，Salesforce 生成一个新的 ID 并将其添加到节点。

**certDevName**
- 类型：String
- 存储在 Salesforce 组织的证书和密钥管理页面中的证书的唯一名称，用于签名。
- 要从设置访问证书和密钥管理页面，在快速查找框中输入证书和密钥管理，然后选择证书和密钥管理。

**refChild**
- 类型：Dom.XmlNode
- 在其之前插入签名的 XML 节点。如果 refChild 为 null，签名将添加在末尾。

### 返回值

- 类型：Void
- 此方法不返回值。签名封装插入到节点内。

### 示例

您可以使用您首选的 Salesforce 开发环境来测试此函数。创建以下 Apex 类。对于 testCertName 变量，使用您在运行此测试的组织中创建的自签名或 CA 证书的唯一名称值。

```apex
public class TestSignXML_2 {
    public void testSignXML_2() {
        String algorithmName = 'RSA';
        String testCertName = 'your-cert-unique-name';
        Dom.Document doc = new Dom.Document();
        String docToLoad = '<?xml version="1.0"?>\n' + 
        '<customers>\n' + 
        '  <customer id="2">\n' +
        '    <name>Company One</name>\n' + 
        '  </customer>\n' +
        '</customers>';
        doc.load(docToLoad);
        Dom.XmlNode rootNode = doc.getRootElement();
        Dom.XmlNode commentNode = rootNode.addCommentNode('SomeComment');
        
        System.Crypto.signXML(algorithmName, doc.getRootElement(), null, testCertName, commentNode);
        
        //将签名 XML 文档的内容发送到调试日志
        System.Debug(doc.toXmlString());
    }
}
```

要调用此方法，请运行以下命令：

```apex
TestSignXML_2 tswxml2 = new TestSignXML_2();
tswxml2.testSignXML_2();
```
