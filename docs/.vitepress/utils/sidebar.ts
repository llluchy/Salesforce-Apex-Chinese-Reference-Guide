import fs from 'fs'
import path from 'path'

interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

/**
 * 递归扫描目录,自动生成 VitePress 侧边栏配置
 * 支持无限嵌套:每个目录是一个可折叠节点,点击可跳转到该目录的 index.md
 *
 * @param dir 当前扫描的目录绝对路径
 * @param basePath 相对于 docs 目录的路径(用于生成 link)
 * @returns 侧边栏配置数组
 */
function getSidebarItems(dir: string, basePath = ''): SidebarItem[] {
  const items: SidebarItem[] = []

  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return items
  }

  // 过滤隐藏文件、public 目录、.vitepress 目录
  const filtered = entries.filter(
    (entry) =>
      !entry.name.startsWith('.') &&
      entry.name !== 'public' &&
      entry.name !== 'node_modules'
  )

  // 排序:目录在前,文件在后;同类按中文拼音/字母排序
  const sorted = filtered.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1
    if (!a.isDirectory() && b.isDirectory()) return 1
    return a.name.localeCompare(b.name, 'zh-CN')
  })

  for (const entry of sorted) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.posix.join(basePath, entry.name)

    if (entry.isDirectory()) {
      // 目录节点:既是页面(有 index.md 时可点击跳转),又可展开子节点
      const indexPath = path.join(fullPath, 'index.md')
      const hasIndex = fs.existsSync(indexPath)

      // 递归获取子节点
      const childItems = getSidebarItems(fullPath, relativePath)

      const item: SidebarItem = {
        text: entry.name,
        collapsed: true,
        items: childItems.length > 0 ? childItems : undefined,
      }

      // 如果目录有 index.md,则该节点可点击跳转
      if (hasIndex) {
        item.link = `/${relativePath}/`
      }

      // 如果没有子节点也没有 index.md,则不显示该目录
      if (childItems.length === 0 && !hasIndex) {
        continue
      }

      items.push(item)
    } else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
      // Markdown 文件节点(排除 index.md,因为它已被父目录节点使用)
      const fileName = entry.name.replace(/\.md$/, '')
      items.push({
        text: fileName,
        link: `/${path.posix.join(basePath, fileName)}`,
      })
    }
  }

  return items
}

/**
 * 生成完整的侧边栏配置
 * 扫描 docs 目录下的所有子目录和文件
 *
 * @param docsDir docs 目录的绝对路径
 * @returns VitePress 侧边栏配置
 */
export function getSidebar(docsDir: string): SidebarItem[] {
  return getSidebarItems(docsDir)
}
