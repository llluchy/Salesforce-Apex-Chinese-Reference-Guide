# EmailMessages Methods

以下是 EmailMessages 的静态方法。

## getFormattedThreadingToken(recordId)

返回格式化为正确前缀和后缀的电子邮件线程令牌。此令牌可以嵌入到出站电子邮件正文、电子邮件主题或正文和主题中。当用户回复电子邮件时，线程令牌可用于将响应附加到记录，例如 Email-to-Case 中的 Case 记录。

## getRecordIdFromEmail(subject, textBody, htmlBody)

返回与指定电子邮件线程令牌对应的记录 ID，如果未找到则返回 null。
