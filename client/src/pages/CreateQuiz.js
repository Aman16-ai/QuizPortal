import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import END_POINT from '../config/Api'
import "./css/CreateQuiz.css" 
import { useState } from 'react'
export default function CreateQuiz() {

  const [categories,setCategories] = useState([])
  const [userCategory,setUserCategory] = useState("")

  const [title,setTitle] = useState("")
  const [questionAndAnswers,SetQuestionAndAnswers] = useState([])

  const [userQuizData,setUserQuizData] = useState({
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    correctAnswer:""
  })
  const fetchAllCategories = async () => {
    const url = `${END_POINT}/category/getAllCategories`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setCategories(data.allCategories)
    setUserCategory(data.allCategories[0]._id)
  }

  useEffect(()=> {
    fetchAllCategories()
  },[])

  const handleChange = (e)=> {
    setUserCategory(e.target.value)
  }

  const handleQuizDataChange = (e)=> {
    setUserQuizData({...userQuizData,[e.target.name]:e.target.value})
  }

  const handleAddQuestion = () => {
    // SetQuestionAndAnswers
    SetQuestionAndAnswers(questionAndAnswers.concat({...userQuizData}))
    console.log(userQuizData)
  }
  
  return (
    <div className="outter-container">
      <div className="create-container">
        <Typography id="title-typo" style={{marginTop:"20px"}} variant='h4'>
          Create Quiz
        </Typography>
        <TextField
          id='title-in'
          className='text-in'
          style={{marginTop:"40px"}}
          variant='outlined'
          label='Title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
         <FormControl className="text-in" style={{marginTop:"20px"}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userCategory}
          label="Category"
          onChange={handleChange}
        >
          {categories.map((category)=> {
            return <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
          })}
        </Select>
      </FormControl>

      <TextField
          id='question-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Question'
          name='question'
          value={userQuizData.question}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='option1-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option1'
          name='option1'
          value={userQuizData.option1}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='option2-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option2'
          name='option2'
          value={userQuizData.option2}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='Option3-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option3'
          name='option3'
          value={userQuizData.option3}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='Option4-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option4'
          name='option4'
          value={userQuizData.option4}
          onChange={handleQuizDataChange}
        />
      <FormControl className="text-in" style={{marginTop:"20px"}}>
        <InputLabel id="demo-simple-select-label">Choose correct answer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userQuizData.correctAnswer}
          label="Choose correct answer"
          onChange={handleQuizDataChange}
          name="correctAnswer"
        >
         <MenuItem value={userQuizData.option1}>{userQuizData.option1}</MenuItem>
         <MenuItem value={userQuizData.option2}>{userQuizData.option2}</MenuItem>
         <MenuItem value={userQuizData.option3}>{userQuizData.option3}</MenuItem>
         <MenuItem value={userQuizData.option4}>{userQuizData.option4}</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={handleAddQuestion} style={{marginTop:"20px",marginBottom:"40px",width:"400px"}} variant={"contained"}>Add Question</Button>
      </div>

    </div>
  )
}
