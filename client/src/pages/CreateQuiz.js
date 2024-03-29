import { Button, CircularProgress, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import END_POINT from '../config/Api'
import "./css/CreateQuiz.css" 
import { useState } from 'react'
import CreatedQuestion from '../components/CreatedQuestion'
import NavBar from '../components/NavBar'
export default function CreateQuiz() {

  const [categories,setCategories] = useState([])
  const [userCategory,setUserCategory] = useState("")
  const [loading,setLoading] = useState(false)

  const [openModal,setOpenModal] = useState(false)

  const [title,setTitle] = useState("")
  const [questionAndAnswers,SetQuestionAndAnswers] = useState([])

  const [userQuizData,setUserQuizData] = useState({
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:"",
    correctAnswer:""
  })

  const [userUpdateQuizData,setUserUpdateQuizData] = useState({
    idx:"",
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:"",
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
    setUserQuizData(
      {
        question:"",
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        correctAnswer:""
      }
    )
  }

  const handleUpdateQuestion = (questionData) => {
    setOpenModal(true)
    setUserUpdateQuizData(questionData)
  }

  const handleUpload = async()=> {
    if(title === "" || title === " ") {
      alert("Title must not be empty");
    }
    else if(userCategory === "" || userCategory === " ") {
      alert("Category must be filled");
    }
    else if(questionAndAnswers.length === 0) {
      alert("Please atleast one question for quiz");
    }
    else {
      const quizRequestBody = {
        "title" :title,
        "category":userCategory,
        "questionsAndAnswers" : questionAndAnswers
      }
  
      console.log(questionAndAnswers)
      setLoading(true)
      try{
        let url = `${END_POINT}/quiz/createQuiz`;
          const response = await fetch(url,{
              method: 'POST',
              headers : {
                  'Content-Type':'application/json',
                  Authorization: `Bearer ${localStorage.getItem('quiz-token')}`
              },
              body: JSON.stringify(quizRequestBody)
          })
          const data = await response.json();
          console.log(data)
      }
      catch(err) {
        console.log(err.toString())
      }
      finally {
        setLoading(false)
      }
    }
  }
  
  const handleModalFormDataChange = (e) => {
    setUserUpdateQuizData({...userUpdateQuizData,[e.target.name]:e.target.value})
  }

  const handleUpdateModalBtn = ()=> {
    const templist = [...questionAndAnswers]
    for(let i = 0;i<templist.length;i++) {
      if(i === userUpdateQuizData.idx) {
        templist[i] = userUpdateQuizData
      }
    }
    SetQuestionAndAnswers(templist)
    setOpenModal(false)
  }

  const handleDeleteQuestions = (question) => {
    const templist = [...questionAndAnswers]
    const newlist = templist.filter((e,i)=> {
      if(i !== question.idx) return true
    })
    SetQuestionAndAnswers(newlist)
  }
  return (
    <div className='create-main-container' >
     <NavBar loading={loading} handleUpload={handleUpload}/>
    <div className="outter-container">
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
      >
        <div id='update-questions-modal'>
        <Typography id="modal-modal-title" component={"h2"} variant={"h6"}>
          Update Question
          </Typography>
          <div className="update-question-form">
          <TextField
          id='question-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Question'
          name='question'
          value={userUpdateQuizData.question}
          onChange={handleModalFormDataChange}
        />
        <TextField
          id='option1-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option1'
          name='answer1'
          value={userUpdateQuizData.answer1}
          onChange={handleModalFormDataChange}
        />
        <TextField
          id='option2-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option2'
          name='answer2'
          value={userUpdateQuizData.answer2}
          onChange={handleModalFormDataChange}
        />
        <TextField
          id='Option3-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option3'
          name='answer3'
          value={userUpdateQuizData.answer3}
          onChange={handleModalFormDataChange}
        />
        <TextField
          id='Option4-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option4'
          name='answer4'
          value={userUpdateQuizData.answer4}
          onChange={handleModalFormDataChange}
        />
      <FormControl className="text-in" style={{marginTop:"20px"}}>
        <InputLabel id="demo-simple-select-label">Choose correct answer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userUpdateQuizData.correctAnswer}
          label="Choose correct answer"
          onChange={handleModalFormDataChange}
          name="correctAnswer"
        >
         <MenuItem value={userUpdateQuizData.answer1}>{userUpdateQuizData.answer1}</MenuItem>
         <MenuItem value={userUpdateQuizData.answer2}>{userUpdateQuizData.answer2}</MenuItem>
         <MenuItem value={userUpdateQuizData.answer3}>{userUpdateQuizData.answer3}</MenuItem>
         <MenuItem value={userUpdateQuizData.answer4}>{userUpdateQuizData.answer4}</MenuItem>
        </Select>
      </FormControl>
        <Button onClick={handleUpdateModalBtn} style={{backgroundColor:"#1b263b",marginTop:"20px"}} variant='contained'>Update</Button>
        <Button onClick={()=>setOpenModal(false)} style={{backgroundColor:"#1b263b",marginTop:"20px",marginLeft:"10px"}} variant='contained'>Cancel</Button>
          </div>
        </div>
      </Modal>
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

          <hr style={{marginTop:"20px",width:"400px",backgroundColor:"black"}}/>
        <Typography style={{marginTop:"10px"}} variant='h5'>
          Duration
        </Typography>
      <Stack direction={'row'} spacing={4}>
          <TextField
            style={{marginTop:"20px",width:"60px"}}
            variant="outlined"
            label='HH'
          />
          <TextField
            style={{marginTop:"20px",width:"60px"}}
            variant="outlined"
            label='MM'
          />
          <TextField
            style={{marginTop:"20px",width:"60px"}}
            variant="outlined"
            label='SS'
          />
        </Stack>
        <hr style={{marginTop:"20px",width:"400px",backgroundColor:"black"}}/>
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
          name='answer1'
          value={userQuizData.answer1}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='option2-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option2'
          name='answer2'
          value={userQuizData.answer2}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='Option3-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option3'
          name='answer3'
          value={userQuizData.answer3}
          onChange={handleQuizDataChange}
        />
        <TextField
          id='Option4-in'
          className='text-in'
          style={{marginTop:"20px"}}
          variant='outlined'
          label='Option4'
          name='answer4'
          value={userQuizData.answer4}
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
         <MenuItem value={userQuizData.answer1}>{userQuizData.answer1}</MenuItem>
         <MenuItem value={userQuizData.answer2}>{userQuizData.answer2}</MenuItem>
         <MenuItem value={userQuizData.answer3}>{userQuizData.answer3}</MenuItem>
         <MenuItem value={userQuizData.answer4}>{userQuizData.answer4}</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={handleAddQuestion} style={{marginTop:"20px",marginBottom:"40px",width:"400px"}} variant={"contained"}>Add Question</Button>
      </div>
        <Stack spacing={5}>
        <div className="questions-container">
          {
            questionAndAnswers.map((e,i)=> {
              return <CreatedQuestion key={i} idx={i} questionData={e} handleDeleteQuestions={handleDeleteQuestions} handleUpdateQuestion={handleUpdateQuestion} />
            })
          }
          
      </div>
      <hr style={{marginTop:"10px", marginLeft:"110px",width:"460px",backgroundColor:"black"}}/>
          <Stack style={{marginBottom:"18px",marginTop:"20px"}} direction="row" spacing={3}>

          <Button onClick={handleUpload} style={{width:"220px", height:"60px",marginLeft:"110px"}} color="success" variant='contained'>{loading?<CircularProgress style={{position:"absolute",color:"white"}}/>:"upload"}</Button>

          <Button style={{width:"220px", height:"60px"}} color="error" variant='contained'>Reset</Button>

          </Stack>
        </Stack>
    </div>
    </div>
  )
}
