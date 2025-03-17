// const express = require('express')
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors());

const movies = [
  {
    id: 1,
    title: "베놈",
    year: 2018,
    actor: ["톰하디", "리즈 아메드"],
    producer : "루벤 플레셔" ,
    poster:'https://i.namu.wiki/i/__CjJoFpuzJXzMjM2DjQYvXCNf6UbCA_uaqgE5gubv80nATEJXEMwf01jV7kQnfkpREUrl2MEmR18H8_rUFAOg.webp'
  },
  {
    id: 2,
    title: "엔트맨3 - 맨트맨과 와스프:퀀텀 매니아",
    year: 2015,
    actor: ["풀 러드", "마이클 더글라스"],
    producer : "케빈 파이기" ,
    poster:'https://i.namu.wiki/i/4pTX-e6W-NWga2U9Z4D8kTZMPW6hTIBUM8z3mnT0hJzIrC6YE_N15NO1xG5nAn4lLUGU-d8iw5AdvSeDyFbMPA.webp'
  },
  {
    id: 3,
    title: "백설공주",
    year: 2025,
    actor: ["레이첼 지글러", "갤 가돗"],
    producer : "마크 웹" ,
    poster:'https://img.vogue.co.kr/vogue/2024/12/style_67724cc7676c8-960x1440.jpg'
  },
  {
    id: 4,
    title: "위키드",
    year: 2024,
    actor: ["신시아 에리보", "아리아나 그란데", "조나단 베일리"],
    producer : "존 추" ,
    poster:'https://www.wolyo.co.kr/news/photo/202411/251173_141446_139.jpg'
  }
]

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/movies', (req, res) => {
  // res.send('Get Movies List')
  res.json(movies)
})
app.post('/movie', (req, res) => {
  res.send('Create Movie')
})
app.put('/movie/:id', (req, res) => {
  res.send('Update Movie')
})
app.delete('/movie/:id', (req, res) => {
  res.send('Delete Movie')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})