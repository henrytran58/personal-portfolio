import React from 'react';
import './education.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import EducationPGCC from './EducationPGCC.jsx';

const UMD_CS = [
  {
    course: "CMSC 216",
    courseName: "Introduction to Computer Systems",
    instructor: "Herve Franceschi",
    semester: "Fall 2022",
    description: "Introduction to the interaction between user programs and the operating system/hardware. Major topics include C programming, introductory systems programming, and assembly language. Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. Programming is done in the Linux Environment."
  },

  {
    course: "CMSC 250",
    courseName: "Discrete Structures",
    instructor: "Mohammad Nayeem Teli",
    semester: "Fall 2022",
    description: "Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications."
  },

  {
    course: "CMSC 330",
    courseName: "Organization of Programming Languages",
    instructor: "Cliff Bakalian",
    semester: "Spring 2023 - Now",
    description: "Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security."
  },

  {
    course: "CMSC 335",
    courseName: "Web Application Development with JavaScript",
    instructor: "Nelson Padua-Perez",
    semester: "Spring 2023 - Now",
    description: "Provides ways of developing Web Applications/Services using JavaScript for both front-end and back-end. The course covers topics on fundamental JavaScript language constructs, server-side JavaScript, back-end data persistence, and client-side JavaScript to build Web Applications." },

  {
    course: "CMSC 351",
    courseName: "Algorithms",
    instructor: "Maksym Morawski",
    semester: "Spring 2023 - Now",
    description: "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations."
  }
]

const UMD_Math = [
  {
    course: "MATH 206",
    courseName: "Introduction to Matlab",
    instructor: "Justin Wyss-Gallifent",
    semester: "Fall 2022",
    description: "Covers basics of MATLAB including simple commands, variables, solving equations, graphing differentiation and integration, matrices and vectors, functions, M-files and fundamentals of programming in the MATLAB environment."
  },

  {
    course: "MATH 401",
    courseName: "Applications of Linear Algebra",
    instructor: "Shalin Parekh",
    semester: "Fall 2022",
    description: "Various applications of linear algebra: theory of finite games, linear programming, matrix methods as applied to finite Markov chains, random walk, incidence matrices, graphs and directed graphs, networks and transportation problems."
  },

  {
    course: "STAT 400",
    courseName: "Applied Probability and Statistics I",
    instructor: "James Conway",
    semester: "Fall 2022",
    description: "Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses."
  },

]

const UMD_Gen = [
  {
    course: "ENES 461",
    courseName: "Entrepreneurial Opportunity Analysis in Technology Ventures",
    instructor: "James Green",
    semester: "Fall 2022",
    description: "Explores the factors that influence entrepreneurial opportunity analysis in technology-based ventures. Uses a cognitive theoretical framework to examine the integration of motivation, emotions and information processing modes to make complex decisions in technology venture environments."
  },
]

const Education = () => {
  return (
    <section id="education">
      <h5>What did I learn?</h5>
      <h2>My Education</h2>
      <h3>University of Maryland, College Park</h3>
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
                  UMD_CS.map(({course, courseName, instructor, semester, description}, index) => {
                    return (
                      <SwiperSlide key={index} className="education">
                        <div>
                          <h4 className="course">{course}</h4>
                          <h4 className="courseName">{courseName}</h4>
                          <small className="instructor">{instructor}</small>
                          <div></div>
                          <small className="semester>">({semester})</small>
                          <p className="description">{description}</p>
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
                  UMD_Math.map(({course, courseName, instructor, semester, description}, index) => {
                    return (
                      <SwiperSlide key={index} className="education">
                        <div>
                          <h4 className="course">{course}</h4>
                          <h4 className="courseName">{courseName}</h4>
                          <small className="instructor">{instructor}</small>
                          <div></div>
                          <small className="semester>">({semester})</small>
                          <p className="description">{description}<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p></p>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>

            <div className="education__card" id="genEd">
              <div className="education__title">General Education</div>
              <Swiper className="education__swiper"
                    // install Swiper modules
                    modules={[ Pagination ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                  UMD_Gen.map(({course, courseName, instructor, semester, description}, index) => {
                    return (
                      <SwiperSlide key={index} className="education">
                        <div>
                          <h4 className="course">{course}</h4>
                          <h4 className="courseName">{courseName}</h4>
                          <small className="instructor">{instructor}</small>
                          <div></div>
                          <small className="semester>">({semester})</small>
                          <p className="description">{description}</p>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>

        </div>
      </div>
      <EducationPGCC />
    </section>
  )
}

export default Education