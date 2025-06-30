import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // 配置邮件发送器（从环境变量读取）
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
  
  // 构建邮件内容
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECEIVE_EMAIL || 'your-email@example.com',
    subject: `新的咨询表单提交 - ${body.parentName}`,
    html: `
      <h2>新的咨询表单提交</h2>
      <table border="1" cellpadding="5">
        <tr><td><strong>家长姓名</strong></td><td>${body.parentName}</td></tr>
        <tr><td><strong>联系电话</strong></td><td>${body.contactNo}</td></tr>
        <tr><td><strong>孩子姓名</strong></td><td>${body.kidName || '未填写'}</td></tr>
        <tr><td><strong>年龄</strong></td><td>${body.age || '未填写'}</td></tr>
        <tr><td><strong>预约日期</strong></td><td>${body.preferredDay || '未填写'}</td></tr>
        <tr><td><strong>预约时间</strong></td><td>${body.time || '未填写'}</td></tr>
        <tr><td><strong>邮箱</strong></td><td>${body.email}</td></tr>
        <tr><td><strong>留言</strong></td><td>${body.message || '无'}</td></tr>
      </table>
      <p>提交时间：${new Date().toLocaleString('zh-CN')}</p>
    `
  }
  
  try {
    await transporter.sendMail(mailOptions)
    
    // 同时保存到文件作为备份
    const fs = await import('fs').then(m => m.promises)
    const path = await import('path')
    
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'submissions.json')
    
    await fs.mkdir(dataDir, { recursive: true })
    
    let submissions = []
    try {
      const existingData = await fs.readFile(filePath, 'utf-8')
      submissions = JSON.parse(existingData)
    } catch (e) {}
    
    submissions.push({
      id: Date.now(),
      timestamp: new Date().toISOString(),
      data: body
    })
    
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