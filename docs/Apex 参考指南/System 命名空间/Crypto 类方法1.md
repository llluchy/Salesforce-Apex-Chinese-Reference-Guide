# Crypto 类方法

以下是 Crypto 的方法。所有方法都是静态的。

## decrypt(algorithmName, secretKey, initializationVector, cipherText)

使用指定的算法、私钥和初始化向量解密 cipherText blob。使用此方法解密使用第三方应用程序或 encrypt 方法加密的 blob。

## decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText)

使用指定的算法和私钥解密 IVAndCipherText blob。使用此方法解密使用第三方应用程序或 encryptWithManagedIV 方法加密的 blob。此版本的 decryptWithManagedIV 不使用附加认证数据。

## decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText, aaData)

使用指定的算法和私钥解密 IVAndCipherText blob。使用此方法解密使用第三方应用程序或 encryptWithManagedIV 方法加密的 blob。此版本的 decryptWithManagedIV 使用附加认证数据。此方法不支持 CBC。

## encrypt(algorithmName, secretKey, initializationVector, clearText)

使用指定的算法、私钥和初始化向量加密 clearText blob。当您想要指定自己的初始化向量时使用此方法。

## encryptWithManagedIV(algorithmName, secretKey, clearText)

使用指定的算法和私钥加密 clearText blob。当您希望 Salesforce 生成初始化向量时使用此方法。此版本的 encryptWithManagedIV 不使用附加认证数据。

## encryptWithManagedIV(algorithmName, secretKey, clearText, aaData)

使用指定的算法和私钥加密 clearText blob。当您希望 Salesforce 生成初始化向量时使用此方法。此版本的 encryptWithManagedIV 使用附加认证数据。此方法不支持 CBC。

## generateAesKey(size)

生成高级加密标准 (AES) 密钥。

## generateDigest(algorithmName, input)

使用指定算法对提供的输入 blob 计算安全、单向哈希摘要。

## generateMac(algorithmName, input, privateKey)

使用私钥和指定算法为输入 blob 值计算消息认证码 (MAC)。

## getRandomInteger()

返回一个随机整数值。

## getRandomLong()

返回一个随机长整型值。

## sign(algorithmName, input, privateKey)

使用指定算法和提供的私钥为输入 blob 值计算唯一数字签名。

## signWithCertificate(algorithmName, input, certDevName)

使用指定算法和提供的证书和密钥对为输入 blob 值计算唯一数字签名。

## signXML(algorithmName, node, idAttributeName, certDevName)

将签名封装到 XML 文档中。

## signXML(algorithmName, node, idAttributeName, certDevName, refChild)

在指定的子节点之前插入签名封装。

## verify(algorithmName, data, signature, publicKey)

使用指定算法和提供的公钥验证数据 blob 的数字签名。使用此方法验证使用第三方应用程序或 sign 方法创建的数字签名签名的 blob。

## verify(algorithmName, data, signature, certDevName)

使用指定算法和与 certDevName 关联的公钥验证数据 blob 的数字签名。使用此方法验证使用第三方应用程序或 signWithCertificate 方法创建的数字签名签名的 blob。

## verifyHMac(algorithmName, data, privateKey, macToVerify)

使用指定算法、输入数据、私钥和 mac 验证数据 blob 的 HMAC 签名。使用此方法验证使用第三方应用程序或 sign 方法创建的数字签名签名的 blob。
