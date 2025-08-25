# Crypto 类

提供用于创建摘要、消息认证码和签名的方法，以及加密和解密信息。

## 命名空间

System

## 用法

Crypto 类中的方法可用于保护 Lightning Platform 中的内容，或与外部服务（如 Google 或 Amazon Web Services (AWS)）集成。

此类中的每个方法都支持一组独特的 AES 加密算法，具体取决于其用途。要确认您想要执行的操作可用的算法，请检查每个方法。

## 使用加密算法

Crypto 类支持伽罗瓦计数器模式 (GCM) 和密码块链接模式 (CBC)。

GCM AES256-GCM 算法在所有加密和解密变体中均有效。目前，GCM 仅支持 256 位大小。128 位、192 位和 256 位大小的 CBC 算法在所有变体中均有效，但期望附加认证数据（aaD 参数）的变体除外。

当您将 CBC 与 encrypt 和 decrypt 一起使用时，您提供 16 位初始化向量 (IV)。

当您将 GCM 与 encrypt 和 decrypt 一起使用时，您不提供初始化向量 (IV)。

当您将 CBC 与 encryptWithManagedIV 和 decryptWithManagedIV 一起使用时，Salesforce 提供 IV。您不提供附加认证数据 (aaData)。只有当您使用不期望 aaData 的版本时，才能将 CBC 与 encryptWithManagedIV 和 decryptWithManagedIV 一起使用。

当您将 GCM 与 encryptWithManagedIV 和 decryptWithManagedIV 一起使用时，Salesforce 提供 IV，您可以选择提供 aaData。

当使用 Crypto 类使用 GCM 进行加密时，最终加密内容包括 IV 的长度（始终为 12）、Salesforce 生成的 12 字节 IV 和密文。

## 加密算法

Crypto 类支持以下加密算法。

| 模式 | 变体 | 描述 |
|------|------|------|
| CBC (密码块链接) | AES128, AES128-CBC | 使用 PKCS7 填充的 CBC 模式的 AES 128 位。使用这两个值中的任一个。 |
| | AES192, AES192-CBC | 使用 PKCS7 填充的 CBC 模式的 AES 192 位。使用这两个值中的任一个。 |
| | AES256, AES256-CBC | 使用 PKCS7 填充的 CBC 模式的 AES 256 位。使用这两个值中的任一个。 |
| GCM (伽罗瓦计数器模式) | AES256-GCM | 使用无填充 GCM 模式的 AES 256 位。目前，GCM 仅支持 256 位大小。 |

## 签名算法

Crypto 类支持以下签名算法。

| 类型 | 变体 | 描述 |
|------|------|------|
| RSA | RSA, RSA-SHA1 | SHA1 哈希的 RSA 签名（使用非对称密钥对）。使用这两个值中的任一个。 |
| | RSA-SHA256 | SHA256 哈希的 RSA 签名 |
| | RSA-SHA384 | SHA384 哈希的 RSA 签名 |
| | RSA-SHA512 | SHA512 哈希的 RSA 签名 |
| ECDSA (DER) | ECDSA-SHA256 | SHA256 哈希的 ECDSA 签名 |
| | ECDSA-SHA384 | SHA384 哈希的 ECDSA 签名 |
| | ECDSA-SHA512 | SHA512 哈希的 ECDSA 签名 |
| ECDSA (P1363) | ECDSA-SHA256-P1363 | SHA256 哈希的 ECDSA 签名（P1363 格式） |
| | ECDSA-SHA256-PLAIN | SHA256 哈希的 ECDSA 签名（P1363 格式）。如果 JWT 返回 invalid_client，请使用。请参阅本页的其他错误。 |
| | ECDSA-SHA384-P1363 | SHA256 哈希的 ECDSA 签名（P1363 格式） |
| | ECDSA-SHA512-P1363 | SHA512 哈希的 ECDSA 签名（P1363 格式） |

## 加密和解密异常

这些方法可能会抛出以下异常。

- decrypt
- encrypt
- decryptWithManagedIV
- encryptWithManagedIV

| 异常 | 消息 | 描述 |
|------|------|------|
| InvalidParameterValue | 无法从加密数据解析初始化向量。 | 如果您使用托管初始化向量且密文少于 16 字节，则抛出。 |
| | 无效的算法 algoName。必须是本页列出的受支持 AES 算法之一。 | 如果算法名称不是有效值之一，则抛出。 |
| | 无效的私钥。必须是 size 字节。 | 如果私钥的大小与指定算法不匹配，则抛出。 |
| | 无效的初始化向量。对于 CBC，这必须是 16 字节。对于 GCM，IV 是 12 字节。 | 如果为 CBC 加密提供的初始化向量不是 16 字节，则抛出。 |
| | AAD 只能与 AESGCM 算法一起使用。 | 如果为 aaData 提供了值，但加密算法不是 GCM 类型，则抛出。 |
| | 无效数据。输入数据是 size 字节，超过了 1,048,576 字节的限制。 | 如果数据大于 1 MB，则抛出。对于解密，允许 1,048,608 字节用于初始化向量头，加上加密添加的任何附加填充以对齐到块大小。 |
| NullPointerException | 参数不能为空。 | 如果所需的方法参数之一为空，则抛出。 |
| SecurityException | 给定的最终块没有正确填充。 | 如果数据没有正确块对齐或在加密或解密过程中发生类似问题，则抛出。 |
| SecurityException | 消息各不相同 | 如果在加密或解密过程中出现问题，则抛出。 |

这些异常是可以从 System 命名空间抛出的异常的子集。请参阅异常类和内置异常。

对于 CBC，Crypto 类使用 AES/CBC/PKCS7 填充，这容易受到填充预言攻击。您可以通过使用 Encrypt-then-MAC 方法来防止填充预言攻击。在此方法中，您分别加密密文和 MAC。

对于加密，首先使用一个加密密钥使用 AES 加密数据。然后，使用不同的加密密钥，使用 generateMac(algorithmName, input, privateKey) 方法为密文生成消息认证码 (MAC)。在将密文发送给接收者之前，将 MAC 附加到密文。

对于解密，首先使用 verifyHMac(algorithmName, data, privateKey, macToVerify) 方法检查密文的真实性和完整性。如果真实性或完整性检查失败，抛出异常并且不解密密文。只有在第二步中，在验证消息真实性和完整性之后，才能解密密文。

您也可以通过使用 GCM 加密算法来防止填充预言攻击。

## 其他错误

在极少数情况下，您可能会遇到来自 JSON Web Tokens (JWT) 服务的 invalid_client 错误。

| 错误消息 | 描述 |
|----------|------|
| invalid_client | 实际文本各不相同，但描述了无法验证客户端凭据。 | Salesforce 连接应用程序中的 JWT 公钥证书似乎与已知私钥不匹配。 |

对于 Shield Platform Encryption，当您使用使用 P11363 格式的自定义 JWT 实现，并且还想使用 ECDSA-SHA256 算法时，可能会发生此错误。解决方案是指定 ECDSA-SHA256-PLAIN 算法。ECDSA-SHA256-PLAIN 可用于多个 sign() 和 verify() 方法。

例如，为了符合您的程序要求，您使用椭圆曲线数字签名算法 (ECDSA) 和 P-256 曲线对令牌进行签名。此算法采用 P1363 格式，因此当您尝试使用 ECDSA SHA256 使用 Crypto.verify() 时，您会收到包含 invalid_client 的响应。您将 ECDSA-SHA256 更改为 ECDSA-SHA256-PLAIN，错误就解决了。

## 另请参阅

- Encrypt-then-MAC (EtM)
- ISO/IEC 19772:2020 - 信息安全认证加密
- 异常类和内置异常
