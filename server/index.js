const express = require('express')
const app = express()
const port = 3000
app.use(require('cors')())//解决跨域
app.use(express.json())//为了能识别客户端传过来的json数据

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin',{//element-admin这个数据库如果没有，mongodb会自动创建
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true
    //上面三个参数最好加上
})
const Article = mongoose.model('Article',new mongoose.Schema({
 title:{type:String},//不给type就没有权限保存数据，但是不影响查询
 content:{type:String}
}))

app.get('/', (req, res) => res.send('我是API~'))

//↓插入数据(新增文章)
app.post('/api/article', async (req,res)=>{
    const article = await Article.create(req.body)
    res.send(article)
})
//↓查找数据（显示文章）
app.get('/api/articles/', async (req, res) => {
  const articles = await Article.find()
  res.send(articles)
})
//↓删除数据(删除文章)
app.delete('/api/article/:id', async(req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send('删除成功!')
})
//↓查找数据(显示修改页的文章)
app.get('/api/article/edit/:id',async (req,res)=>{
    const article = await Article.findById(req.params.id)
    res.send(article)
})
//↓修改数据(修改文章)
app.put('/api/article/edit/:id',async(req,res)=>{
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send('修改成功！')
})
app.listen(port, () => console.log(`服务器在 ${port} 端口处启动成功！`))