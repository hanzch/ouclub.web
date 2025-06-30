export default defineEventHandler(async (event) => {
  // 获取表单数据
  const body = await readBody(event)
  
  // 这里可以选择将数据保存到：
  // 1. 本地文件
  // 2. 数据库
  // 3. 发送邮件
  // 4. 转发到其他服务
  
  // 示例1：保存到本地 JSON 文件
  const fs = await import('fs').then(m => m.promises)
  const path = await import('path')
  
  const dataDir = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'submissions.json')
  
  try {
    // 确保目录存在
    await fs.mkdir(dataDir, { recursive: true })
    
    // 读取现有数据
    let submissions = []
    try {
      const existingData = await fs.readFile(filePath, 'utf-8')
      submissions = JSON.parse(existingData)
    } catch (e) {
      // 文件不存在，使用空数组
    }
    
    // 添加新提交
    submissions.push({
      id: Date.now(),
      timestamp: new Date().toISOString(),
      data: body
    })
    
    // 保存数据
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2))
    
    return { success: true, message: '表单提交成功' }
  } catch (error) {
    console.error('表单提交错误:', error)
    throw createError({
      statusCode: 500,
      statusMessage: '服务器错误'
    })
  }
})