# PDF转Markdown操作要求文档

## 📋 项目概述

将Salesforce Apex参考指南的PDF文件转换为中文Markdown文档，并集成到VitePress项目中。

## 🎯 主要任务

将 `Crypto Class.pdf` 文件转换为中文 Markdown 文档，并集成到 VitePress 项目中。

## 📁 项目结构

```
Salesforce-Apex-Chinese-Reference-Guide/
├── docs/
│   ├── Apex 参考指南/
│   │   └── System 命名空间/
│   │       ├── Crypto 类.md (需要创建)
│   │       ├── Crypto Class.pdf (需要处理)
│   │       └── 已完成/ (PDF处理完成后移动到这里)
│   └── .vitepress/
│       └── config.mjs (需要更新路由)
```

## 🔧 技术工具和环境

- **操作系统**: Windows 10/11
- **Shell**: PowerShell
- **Python库**: `fitz` (PyMuPDF) 用于PDF文本提取
- **编码**: UTF-8
- **文档格式**: Markdown (VitePress兼容)

## 📝 操作步骤

### 1. PDF内容提取

```powershell
python -c "import fitz; doc = fitz.open('docs/Apex 参考指南/System 命名空间/Crypto Class.pdf'); text = ''.join([page.get_text() for page in doc]); open('temp_crypto.txt', 'w', encoding='utf-8').write(text)"
```

### 2. 创建Markdown文件

- **文件名**: `docs/Apex 参考指南/System 命名空间/Crypto 类.md`
- **模板**: 参考 `AccessLevel 类.md` 的结构和格式

### 3. 更新配置文件

- **文件**: `docs/.vitepress/config.mjs`
- **操作**: 在System命名空间部分添加Crypto类的路由链接
- **格式**: `{ text: 'Crypto 类', link: '/Apex%20参考指南/System%20命名空间/Crypto%20类' }`

### 4. 文件管理

```powershell
# 移动PDF到已完成文件夹
Move-Item "docs/Apex 参考指南/System 命名空间/Crypto Class.pdf" "docs/Apex 参考指南/System 命名空间/已完成/"

# 删除临时文件
Remove-Item "temp_crypto.txt"
```

## 📄 文档格式要求

### 基础结构

```markdown
# Crypto 类

[中文介绍]

> [!NOTE] 白话 —— 个人理解，谨慎分析
> [白话解释]

## 命名空间
System

## 用法
[用法说明]

## [方法名称]
[方法描述]

> [!NOTE] 白话 —— 个人理解，谨慎分析
> [白话解释]

#### 签名
```apex
[方法签名]
```

#### 参数
[参数说明]

#### 返回值
[返回值说明]

#### 示例
```apex
[代码示例]
```

## 使用场景
[实际应用场景]

## 注意事项
[重要注意事项]

## 性能考虑
[性能相关说明]

## 最佳实践
[最佳实践建议]

## 相关链接
[相关文档链接]

---
*文档来源：[原始链接]*
```

### 特殊格式要求

1. **白话解释**: 使用 `> [!NOTE] 白话 —— 个人理解，谨慎分析` 格式
2. **代码块**: 使用 ```apex 标记
3. **表格**: 使用标准Markdown表格格式
4. **链接**: 使用URL编码格式（空格用%20）
5. **HTML转义**: 避免使用 `<` 和 `>` 符号，使用 `&lt;` 和 `&gt;`

## ⚠️ 重要注意事项

### 1. 编码问题

- 所有文件操作必须使用UTF-8编码
- PDF提取时明确指定编码：`encoding='utf-8'`

### 2. 文件名处理

- 中文文件名在config.mjs中需要URL编码
- 空格转换为 `%20`
- 避免使用 `✅` 符号（保留给人工检查）

### 3. 内容翻译要求

- 保持一对一翻译，不缩减内容
- 保持原文档的内容顺序
- 添加白话解释帮助理解
- 包含完整的代码示例

### 4. 错误处理

- 检查PDF提取是否成功
- 验证临时文件是否生成
- 确保config.mjs更新正确
- 处理可能的编码错误

### 5. 文件管理

- 处理完成后将PDF移动到"已完成"文件夹
- 删除临时提取文件
- 保持目录结构整洁

## 🔍 质量检查要点

1. **内容完整性**: 确保所有方法都已翻译
2. **格式一致性**: 与AccessLevel 类.md模板保持一致
3. **链接正确性**: config.mjs中的路由链接正确
4. **编码正确性**: 无乱码或编码错误
5. **文件清理**: 临时文件已删除，PDF已移动

## ✅ 预期结果

- ✅ 创建完整的 `Crypto 类.md` 文件
- ✅ 更新 `config.mjs` 添加路由
- ✅ 移动PDF到"已完成"文件夹
- ✅ 删除临时文件
- ✅ 文档可在VitePress中正常访问

## 🎯 成功标准

1. 文档内容完整且格式正确
2. 白话解释清晰易懂
3. 代码示例可运行
4. 路由链接正常工作
5. 文件管理规范

## 📚 参考模板

参考文件：`docs/Apex 参考指南/System 命名空间/AccessLevel 类.md`

该文件包含了完整的文档结构和格式示例，包括：
- 白话解释格式
- 方法文档结构
- 代码示例格式
- 使用场景说明
- 注意事项和最佳实践

## 🔄 工作流程

1. **准备阶段**: 确认PDF文件存在，检查目录结构
2. **提取阶段**: 使用Python提取PDF文本内容
3. **翻译阶段**: 将英文内容翻译为中文
4. **格式化阶段**: 按照模板格式创建Markdown文件
5. **集成阶段**: 更新config.mjs添加路由
6. **清理阶段**: 移动PDF文件，删除临时文件
7. **验证阶段**: 检查文档格式和链接正确性

## 🛠️ 常见问题解决

### PDF提取失败
- 检查Python和fitz库是否正确安装
- 确认PDF文件路径正确
- 检查文件权限

### 编码错误
- 确保所有文件操作使用UTF-8编码
- 检查PowerShell的编码设置

### 路由链接错误
- 确认URL编码格式正确
- 检查config.mjs语法
- 验证文件路径存在

### 格式不一致
- 参考AccessLevel 类.md模板
- 确保白话解释格式统一
- 检查代码块标记

## 📞 技术支持

如遇到问题，请检查：
1. Python环境配置
2. 文件路径和权限
3. 编码设置
4. VitePress配置

---

**文档版本**: 1.0  
**创建日期**: 2025年8月20日  
**适用范围**: Salesforce Apex参考指南PDF转Markdown项目
