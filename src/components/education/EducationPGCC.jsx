import React from 'react';
import './education.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const PGCC_CS = [
  {
    course: "INT 1010",
    courseName: "Introduction to Information Tech",
    instructor: "Hossein Besharatian",
    semester: "Fall 2020",
    description: "Examine the categories of computing devices and different types of computer applications, software and their uses. Emphasis in this course is on enhancing skills in data analysis and programming and evaluate ethical principles related to privacy, security, intellectual property and how these apply to academic and professional life."
  },

  {
    course: "INT 1111",
    courseName: "Programming Logic and Design",
    instructor: "Homer Sharafi",
    semester: "Fall 2020",
    description: "Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications."
  },

  {
    course: "INT 2200",
    courseName: "Programming in Java",
    instructor: "Homer Sharafi",
    semester: "Spring 2021",
    description: "Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security."
  },
  {
    course: "INT 2240",
    courseName: "Introduction to Python",
    instructor: "Koudjo Koumadi",
    semester: "Summer 2021",
    description: "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations."
  },
  {
    course: "INT 2050",
    courseName: "Mobile Application Development",
    instructor: "Kolawole Ogunlana",
    semester: "Fall 2021",
    description: "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations."
  },
  {
    course: "INT 2210",
    courseName: "Computer Science I",
    instructor: "Homer Sharafi",
    semester: "Fall 2021",
    description: "Provides ways of developing Web Applications/Services using JavaScript for both front-end and back-end. The course covers topics on fundamental JavaScript language constructs, server-side JavaScript, back-end data persistence, and client-side JavaScript to build Web Applications." 
    },

  {
    course: "INT 2220",
    courseName: "Computer Science II",
    instructor: "Homer Sharafi",
    semester: "Spring 2022",
    description: "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations."
  },


]

const PGCC_Math = [
  {
    course: "MAT 2410",
    courseName: "Calculus I",
    instructor: "Fariba Roozbehi",
    semester: "Spring 2021",
    description: "Covers basics of MATLAB including simple commands, variables, solving equations, graphing differentiation and integration, matrices and vectors, functions, M-files and fundamentals of programming in the MATLAB environment."
  },

  {
    course: "MAT 2420",
    courseName: "Calculus II",
    instructor: "Peggy Beck",
    semester: "Fall 2021",
    description: "Various applications of linear algebra: theory of finite games, linear programming, matrix methods as applied to finite Markov chains, random walk, incidence matrices, graphs and directed graphs, networks and transportation problems."
  },

  {
    course: "MAT 2450",
    courseName: "Linear Algebra",
    instructor: "Jelena Mirtova",
    semester: "Spring 2022",
    description: "Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses."
  },

]

const PGCC_Gen = [
    {
        course: "ESL 0101",
        courseName: "Intermediate I",
        instructor: "Jacqueline Sumner",
        semester: "Fall 2020",
        description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
      },
      {
        course: "ESL 0201",
        courseName: "Composition",
        instructor: "Lakisha Jackson",
        semester: "Fall 2020",
        description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
      },
      {
        course: "ESL 0105",
        courseName: "Intermediate Reading Skills",
        instructor: "Esther Robbins",
        semester: "Fall 2020",
        description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
      },
      {
        course: "ESL 0106",
        courseName: "Advanced Reading Skills",
        instructor: "Brenan Swartz",
        semester: "Spring 2021",
        description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
      },
      {
        course: "ESL 0202",
        courseName: "Advanced Composition",
        instructor: "Sevtap Frantz",
        semester: "Spring 2021",
        description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
      },
  {
    course: "PAS 1000",
    courseName: "First Year Experience",
    instructor: "Raymond Harrod",
    semester: "Spring 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "PHL 1330",
    courseName: "Ethics",
    instructor: "Nicholas Plants",
    semester: "Spring 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "BIO 1010",
    courseName: "General Biology",
    instructor: "Fitz Rigby",
    semester: "Summer 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "PSY 1010",
    courseName: "General Psychology",
    instructor: "Victoria Taylor",
    semester: "Summer 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "SOC 1010",
    courseName: "Introduction to Sociology",
    instructor: "Britany Gatewood",
    semester: "Summer 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "PHL 1090",
    courseName: "Introduction to Logic",
    instructor: "Nicholas Plants",
    semester: "Fall 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "EGL 1010",
    courseName: "Expository Writing",
    instructor: "Donna Griggs",
    semester: "Fall 2021",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "EGL 1340",
    courseName: "Writing - Technical Topics",
    instructor: "Donna Griggs",
    semester: "Spring 2022",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
  {
    course: "PHY 1010",
    courseName: "Introductory Physics I",
    instructor: "Prem-Raj Ruffin",
    semester: "Spring 2022",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  }

]

const EducationPGCC = () => {
  return (
    <section id="educationPGCC">
      <h3>Prince George's Community College</h3>
      <div className="container education__container"> 
        <div className="education__cards">
            <div className="education__card">
              <div className="education__title">Computer Science</div>
              <Swiper className="education__swiper"
                    // install Swiper modules
                    modules={[ Pagination ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                  PGCC_CS.map(({course, courseName, instructor, semester, description}, index) => {
                    return (
                      <SwiperSlide key={index} className="education">
                        <div>
                          <h4 className="course">{course}</h4>
                          <h4 className="courseName">{courseName}</h4>
                          <small className="instructor">{instructor}</small>
                          <div></div>
                          <small className="semester>">({semester})</small>
                        {/*   <p className="description">{description}</p> */}
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
            
            <div className="education__card">
              <div className="education__title">Mathematics</div>
              <Swiper className="education__swiper"
                    // install Swiper modules
                    modules={[ Pagination ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                  PGCC_Math.map(({course, courseName, instructor, semester, description}, index) => {
                    return (
                      <SwiperSlide key={index} className="education">
                        <div>
                          <h4 className="course">{course}</h4>
                          <h4 className="courseName">{courseName}</h4>
                          <small className="instructor">{instructor}</small>
                          <div></div>
                          <small className="semester>">({semester})</small>
{/*                           <p className="description">{description}<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p></p> */}
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>

            <div className="education__card" id="genEdPGCC">
              <div className="education__title">General Education</div>
              <Swiper className="education__swiper"
                    // install Swiper modules
                    modules={[ Pagination ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                  PGCC_Gen.map(({course, courseName, instructor, semester, description}, index) => {
                    return (
                      <SwiperSlide key={index} className="education">
                        <div>
                          <h4 className="course">{course}</h4>
                          <h4 className="courseName">{courseName}</h4>
                          <small className="instructor">{instructor}</small>
                          <div></div>
                          <small className="semester>">({semester})</small>
{/*                           <p className="description">{description}</p> */}
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>

        </div>
      </div>
    </section>
  )
}

export default EducationPGCC