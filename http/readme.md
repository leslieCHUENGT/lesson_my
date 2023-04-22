# http https

# 为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？
- HTTP在通信过程中，存在以下问题：
  - 通信使用明文（不加密），内容可能被窃听
  - 不验证通信方的身份，因此有可能遭遇伪装

- SSL(Secure Sockets Layer 安全套接字协议),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议

- SSL的实现这些功能主要依赖于三种手段：
  - 对称加密：采用协商的密钥对数据加密
  - 非对称加密：实现身份认证和密钥协商
  - 摘要算法：验证信息的完整性
  - 数字签名：身份验证
# TCP
- 传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、`基于字节流`的`传输层通信协议`






